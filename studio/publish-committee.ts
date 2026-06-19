import { getCliClient } from 'sanity/cli'

const client = getCliClient().withConfig({ perspective: 'raw', apiVersion: '2025-02-19', useCdn: false })

async function run() {
  const docs: Array<Record<string, unknown> & { _id: string }> = await client.fetch(
    '*[_type == "committeeMember"]',
  )
  console.log('raw ids found:', docs.map((d) => d._id))

  for (const d of docs) {
    const publishedId = d._id.startsWith('drafts.') ? d._id.slice('drafts.'.length) : d._id
    const rest: Record<string, unknown> = { ...d }
    delete rest._id
    delete rest._rev
    delete rest._createdAt
    delete rest._updatedAt
    await client.createOrReplace({ ...(rest as object), _id: publishedId, _type: 'committeeMember' })
    if (d._id.startsWith('drafts.')) {
      await client.delete(d._id).catch(() => {})
    }
    console.log('published:', publishedId)
  }

  const publishedCount = await client.fetch(
    'count(*[_type == "committeeMember" && !(_id in path("drafts.**"))])',
  )
  console.log('published committeeMember count now:', publishedCount)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

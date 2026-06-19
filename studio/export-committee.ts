import { getCliClient } from 'sanity/cli'
import { writeFileSync } from 'node:fs'

const client = getCliClient().withConfig({ perspective: 'raw', useCdn: false })

async function run() {
  const docs: Array<Record<string, unknown>> = await client.fetch('*[_type == "committeeMember"]')
  const lines = docs
    .map((d) => {
      const rest: Record<string, unknown> = { ...d }
      delete rest._rev
      delete rest._createdAt
      delete rest._updatedAt
      // normalise id to the published form
      if (typeof rest._id === 'string' && rest._id.startsWith('drafts.')) {
        rest._id = rest._id.slice('drafts.'.length)
      }
      return JSON.stringify(rest)
    })
    .join('\n')
  writeFileSync('/tmp/committee.ndjson', lines + '\n')
  console.log('exported', docs.length, 'documents to /tmp/committee.ndjson')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

import { getCliClient } from 'sanity/cli'
import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'

const client = getCliClient()

const members = [
  {
    id: 'committee.mathilda-rossignol',
    name: 'Mathilda Rossignol',
    role: 'Secretary General',
    file: 'mathilda-rossignol.png',
    order: 1,
    quote: 'I am fully committed to MUN because I believe that debate is key to finding solutions, and that we should never underestimate the power of words, especially in today\'s world.',
  },
  {
    id: 'committee.samuel-boisseau',
    name: 'Samuel Boisseau',
    role: 'Secretary General',
    file: 'samuel-boisseau.jpeg',
    order: 2,
    quote: 'I believe that Saint Dominique\'s MUN is a great opportunity for people of all around the world to come together and try to tackle current issues and exercise public speaking and diplomacy in a world where truth and words seem to hold less and less power everyday.',
  },
  {
    id: 'committee.samuel-letang',
    name: 'Samuel Létang',
    role: 'Vice Secretary General',
    file: 'samuel-letang.png',
    order: 3,
    quote: 'I\'m glad we have the opportunity to host this year. Last year, I liked every moment. Now, I would like to make sure new students can enjoy MUN as much as I did.',
  },
  {
    id: 'committee.zoe-chaffiotte',
    name: 'Zoë Chaffiotte',
    role: 'Vice Secretary General',
    file: 'zoe-chaffiotte.jpeg',
    order: 4,
    quote: 'I know how important these conferences are to share our voices together and debate about current issues in the world. As we all know, there are many ongoing crises around the world and speaking is the first step to ensure a better future.',
  },
  {
    id: 'committee.gabriel-galdiolo',
    name: 'Gabriel Galdiolo',
    role: 'Head of Press Team',
    file: 'gabriel-galdiolo.jpeg',
    order: 5,
    quote: 'My job, along with the other members of the press team, will be to give visibility to the conference and show how it unfolds. We will also make sure to create lasting memories of the moments of debate and of all the special events.',
  },
]

async function run() {
  for (const m of members) {
    const existing = await client.getDocument(m.id).catch(() => null)
    if (existing && (existing as { photo?: { asset?: { _ref?: string } } }).photo?.asset?._ref) {
      console.log('skip (already has photo):', m.name)
      continue
    }
    const filePath = resolve(process.cwd(), '..', 'public', 'images', m.file)
    const asset = await client.assets.upload('image', createReadStream(filePath), { filename: m.file })
    await client.createOrReplace({
      _id: m.id,
      _type: 'committeeMember',
      name: m.name,
      role: m.role,
      quote: m.quote,
      order: m.order,
      photo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    })
    console.log('created:', m.name)
  }
  console.log('Committee migration done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

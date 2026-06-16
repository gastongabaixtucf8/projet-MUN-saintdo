import { client } from '@/lib/sanity/client'

async function getMessage(): Promise<string | null> {
  return client.fetch(`*[_type == "siteSettings"][0].message`, {}, { cache: 'no-store' })
}

export default async function Page() {
  const message = await getMessage()

  return (
    <main>
      <h1>{message ?? 'Hello Cows'}</h1>
    </main>
  )
}

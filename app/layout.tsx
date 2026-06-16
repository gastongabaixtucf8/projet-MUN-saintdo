import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'MUN Saint Dominique — Pau, France',
  description: 'Model United Nations conference at Institut Saint Dominique, Pau — 19–21 March 2027.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

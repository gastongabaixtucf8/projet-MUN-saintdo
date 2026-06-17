'use client'

import { useState } from 'react'

// Web3Forms access key — get one free at web3forms.com for mun@saintdominique.fr,
// then set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local and in the Vercel project.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', ACCESS_KEY ?? '')
    formData.append('from_name', 'MUN Saint Dominique website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card text-center py-12">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message sent</h3>
        <p className="text-gray-500 mb-6">Thank you for getting in touch. We will reply to you by email as soon as possible.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline text-navy-mid border-navy-mid">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users, filled only by bots */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your full name" className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">Subject</label>
        <input id="subject" name="subject" type="text" required placeholder="What is your message about?" className="form-input" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="Write your message here..." className="form-input resize-y" />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-navy-mid shrink-0" />
        <span>I agree to my data being collected and stored so the MUN Saint Dominique team can respond to my message.</span>
      </label>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong and your message could not be sent. Please try again, or email us directly at{' '}
          <a href="mailto:mun@saintdominique.fr" className="underline">mun@saintdominique.fr</a>.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

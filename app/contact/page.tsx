'use client'

import { useState } from 'react'

const PhoneIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
  </svg>
)

const MapIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
  </svg>
)

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    school: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = `Name: ${form.firstName} ${form.lastName}
School: ${form.school}
Email: ${form.email}
Subject: ${form.subject}

${form.message}`

    const mailto = `mailto:mun@saintdominique.fr?subject=${encodeURIComponent(form.subject || 'MUN Saint Dominique — Contact')}&body=${encodeURIComponent(body)}`
    window.open(mailto)
    setSubmitted(true)
  }

  return (
    <main>

      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-white/70 text-lg">
            Get in touch with the MUN Saint Dominique team.
          </p>
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* Form */}
            <div className="flex-1">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="36" height="36" fill="none" stroke="#16a34a" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3">Message sent!</h2>
                  <p className="text-gray-600 mb-8">
                    Your email client has opened with your message pre-filled. We will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your name"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="form-input"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your last name"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <input
                    type="text"
                    name="school"
                    placeholder="Your school establishment"
                    value={form.school}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    required
                    rows={9}
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-y"
                  />
                  <button type="submit" className="btn-primary w-full text-center text-lg py-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:w-72 flex flex-col gap-8">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-navy-mid">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg mb-1">Phone</p>
                  <a href="tel:+33559320123" className="text-gray-500 hover:text-navy-mid transition-colors">
                    +33 5 59 32 01 23
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-navy-mid">
                  <MapIcon />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg mb-1">Address</p>
                  <p className="text-gray-500 leading-relaxed">
                    30 Avenue Fouchet<br />
                    64000 PAU<br />
                    France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-navy-mid">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg mb-1">Contact us</p>
                  <a
                    href="mailto:mun@saintdominique.fr"
                    className="text-gray-500 hover:text-navy-mid transition-colors break-all"
                  >
                    mun@saintdominique.fr
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

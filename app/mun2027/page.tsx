import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import OrganisingCommittee from '@/components/OrganisingCommittee'

export const metadata: Metadata = { title: 'MUN 2027' }

async function getProgramme(): Promise<{ url: string } | null> {
  return client.fetch(
    `*[_type == "programDocument" && _id == "programme-singleton"][0]{ "url": file.asset->url }`,
    {},
    { cache: 'no-store' },
  )
}

async function getCommitteeTopics(): Promise<{ url: string } | null> {
  return client.fetch(
    `*[_type == "committeeTopicsDocument" && _id == "committee-topics-singleton"][0]{ "url": file.asset->url }`,
    {},
    { cache: 'no-store' },
  )
}

export default async function MUN2027Page() {
  const [programme, committeeTopics] = await Promise.all([getProgramme(), getCommitteeTopics()])

  return (
    <main>

      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">MUN 2027</h1>
          <p className="text-white/65 text-lg">Theme, documents, and registration.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-4xl">Conference Overview</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  MUN Saint Dominique 2027 will be held at Institut Saint Dominique in Pau, France. The conference
                  brings together delegates from schools across Europe for three days of formal debate, diplomacy,
                  and cross-cultural exchange.
                </p>
                <p>
                  All delegates must register via MyMUN. Once registered, you will receive access to your committee
                  assignment, the Delegate Guide, and all further conference information.
                </p>
              </div>
              <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-block">
                Apply on MyMUN
              </a>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Dates', value: '19, 20 & 21 March 2027' },
                { label: 'Location', value: 'Institut Saint Dominique, 30 Avenue Fouchet, 64000 Pau' },
                { label: 'Registration', value: 'Via MyMUN (mymun.com)' },
                { label: 'Theme', value: 'To be announced' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-1.5 bg-gold rounded-full shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-gray-700">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Conference Documents</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Essential documents for all delegates. Read the Delegate Guide carefully before the conference — it covers
            the Rules of Procedure, how to write a position paper, and what to expect during sessions.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">

            {/* Delegate Guide */}
            <div className="card flex flex-col">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>
              <p className="font-bold text-navy text-lg mb-2">Delegate Guide</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                The complete guide for delegates — Rules of Procedure, how to write a position paper, how to behave
                in committee, and everything else you need to know.
              </p>
              <a
                href="/delegates-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center"
              >
                Download PDF
              </a>
            </div>

            {/* Programme */}
            <div className="card flex flex-col">
              <div className="w-12 h-12 bg-navy-mid rounded-xl flex items-center justify-center mb-4">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                </svg>
              </div>
              <p className="font-bold text-navy text-lg mb-2">Programme 2027</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                The full conference programme — sessions, timetables, social events, and opening and closing
                ceremonies. Published once the schedule is finalised.
              </p>
              {programme?.url
                ? (
                  <a href={programme.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm text-center">
                    Download PDF
                  </a>
                )
                : (
                  <span className="inline-block text-center bg-gray-100 text-gray-400 font-semibold px-8 py-3 rounded-lg text-sm">
                    Coming Soon
                  </span>
                )
              }
            </div>

            {/* Committee Topics */}
            <div className="card flex flex-col">
              <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center mb-4">
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
                </svg>
              </div>
              <p className="font-bold text-navy text-lg mb-2">Committee Topics</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                The topic documents for each committee — background guides, key questions, and recommended
                sources to help you prepare your position papers.
              </p>
              {committeeTopics?.url
                ? (
                  <a href={committeeTopics.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm text-center">
                    Download PDF
                  </a>
                )
                : (
                  <span className="inline-block text-center bg-gray-100 text-gray-400 font-semibold px-8 py-3 rounded-lg text-sm">
                    Coming Soon
                  </span>
                )
              }
            </div>

          </div>
        </div>
      </section>

      {/* Register */}
      <section className="py-20 px-6 bg-navy text-white text-center rounded-t-[2rem]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Register for MUN 2027</h2>
          <p className="text-white/60 mb-10 text-lg">
            Registration is handled through MyMUN. Create an account, search for MUN Saint Dominique, and apply
            with your school.
          </p>
          <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
            Apply on MyMUN
          </a>
        </div>
      </section>

    </main>
  )
}

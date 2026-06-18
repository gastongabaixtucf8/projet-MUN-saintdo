import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import OrganisingCommittee from '@/components/OrganisingCommittee'

export const metadata: Metadata = { title: 'About Us' }

export default function AboutPage() {
  return (
    <main>

      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-white/65 text-lg">Our school, our programme, our team, and our partner.</p>
        </div>
      </section>

      {/* Institut Saint Dominique */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Institut Saint Dominique</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                Welcome to Institut Saint Dominique — a private Catholic educational institution in the heart of Pau,
                dedicated to the holistic development of our students through a balanced, coherent, and unified approach
                to education.
              </p>
              <p>
                Our mission centres on guiding students toward personal fulfilment and academic excellence, rooted in
                spiritual values and a genuine commitment to each individual&rsquo;s growth. We serve students from primary
                school through to the end of lycée.
              </p>
              <p>
                Everything we do is guided by a triple pursuit — the search for <strong>balance</strong>, the quest for
                <strong> coherence</strong>, and the pursuit of <strong>unity</strong> — which you can read about just below.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Address', value: '30 Avenue Fouchet, 64000 Pau, France' },
                { label: 'Phone', value: '+33 5 59 32 01 23' },
                { label: 'Email', value: 'mun@saintdominique.fr', href: 'mailto:mun@saintdominique.fr' },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-1.5 bg-gold rounded-full shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{label}</p>
                    {href
                      ? <a href={href} className="text-navy hover:text-navy-mid transition-colors">{value}</a>
                      : <p className="text-gray-700">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="section-title text-4xl">Our Philosophy</h2>
            <p className="text-gray-500 text-lg">
              At Institut Saint Dominique, our educational philosophy is rooted in a triple pursuit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'The Search for Balance',
                body: 'Our administrative and pastoral teams are committed to supporting students with a blend of attentive listening, high expectations, and unwavering kindness. This balance forms the cornerstone of our educational relationships, ensuring that each student feels valued and motivated to achieve their best.',
              },
              {
                number: '02',
                title: 'The Quest for Coherence',
                body: 'Our teaching staff is dedicated to making the academic journey meaningful. They engage students not only through rigorous classroom instruction and exam preparation but also by leading numerous enriching projects such as educational trips, outings, and challenges. These activities serve as gateways to cultural enrichment, providing students with a well-rounded educational experience.',
              },
              {
                number: '03',
                title: 'The Pursuit of Unity',
                body: 'Our spiritual guidance team offers students the opportunity to explore an inner Word that harmonizes all aspects of their being. This spiritual journey, inspired by Christian faith, does not confine students to a particular ideology but rather opens new perspectives on life, fostering personal growth and happiness.',
              },
            ].map(({ number, title, body }) => (
              <div key={number} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col">
                <span className="text-gold font-bold text-3xl mb-4">{number}</span>
                <h3 className="font-bold text-navy text-xl mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUN Programme */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Our MUN Programme</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-12 max-w-4xl">
            <p>
              Institut Saint Dominique organises one of the most dynamic Model United Nations conferences in southwestern
              France. Our MUN programme gives students a real platform for global engagement — allowing them to step
              outside the classroom and engage with the world&rsquo;s most pressing challenges in the formal setting of a
              United Nations simulation.
            </p>
            <p>
              Through MUN, our students develop leadership by taking on delegate roles that require negotiation,
              collaboration, and strategic thinking. They enhance their public speaking skills by presenting their
              country&rsquo;s positions in front of their peers; gain a genuine international perspective on geopolitics and
              the UN system; and foster empathy by truly engaging with viewpoints very different from their own.
            </p>
            <p>
              The conference welcomes delegates from partner schools across Europe, creating an environment of rich
              cultural exchange and intellectual challenge. Whether you are a first-time delegate or an experienced
              chair, MUN Saint Dominique is a conference designed to push you, inspire you, and leave a lasting impression.
            </p>
          </div>
          <Link href="/mun2027" className="btn-primary">Conference Details →</Link>
        </div>
      </section>

      {/* Organising Committee */}
      <OrganisingCommittee />

      {/* Alleyn's */}
      <section className="relative py-24 px-6 overflow-hidden rounded-t-[2rem]">
        <div className="absolute inset-0">
          <Image src="/images/alleyns-school.jpg" alt="Alleyn's School" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Our Partner — Alleyn&rsquo;s School</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-white/85 leading-relaxed text-lg">
              <p>
                We are thrilled to announce our collaboration with The Alleyn&rsquo;s Schools Group in organising this
                prestigious conference. This partnership brings together the rich educational heritage of both
                institutions, fostering a dynamic exchange of ideas and perspectives.
              </p>
              <p>
                As we look ahead to 2027, we are excited about the opportunity to host this event in the beautiful
                city of Pau, where we will continue to promote world-class holistic education and strengthen our
                global community.
              </p>
              <a
                href="https://www.alleynsmun.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block mt-2"
              >
                Visit Alleyn&rsquo;s MUN
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">Host School</p>
                  <p className="font-bold text-navy text-lg">Institut Saint Dominique</p>
                  <p className="text-gray-500 text-sm">Pau, France</p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-xs font-semibold text-navy-mid uppercase tracking-widest mb-1">Partner School</p>
                  <p className="font-bold text-navy text-lg">Alleyn&rsquo;s School</p>
                  <p className="text-gray-500 text-sm">Dulwich, London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Interested in joining?</h2>
          <p className="text-white/60 mb-8">Register on MyMUN or contact us with any questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply on MyMUN</a>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

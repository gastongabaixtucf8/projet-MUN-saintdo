import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — MUN Saint Dominique',
}

const leadershipTeam = [
  {
    role: 'Secretary-General',
    name: 'Coming Soon',
    bio: 'The Secretary-General leads the Secretariat and chairs the opening and closing ceremonies. They are responsible for the overall vision and smooth running of the conference.',
    message: 'We are thrilled to welcome delegates from around Europe to Pau for MUN Saint Dominique 2027. This conference is the result of months of dedicated preparation, and we look forward to three days of inspiring debate and diplomacy.',
  },
  {
    role: 'Deputy Secretary-General',
    name: 'Coming Soon',
    bio: 'The Deputy Secretary-General supports the Secretary-General and oversees the day-to-day operations of the conference, coordinating between committees, logistics, and the press corps.',
    message: 'MUN has profoundly shaped the way I engage with the world. I hope each delegate leaves Pau with a deeper understanding of international relations and a new circle of friends from across Europe.',
  },
  {
    role: 'President of the General Assembly',
    name: 'Coming Soon',
    bio: 'The President of the General Assembly presides over plenary sessions, manages debate procedures, and ensures all delegates have an equal voice on the floor.',
    message: 'The General Assembly is where great ideas become resolutions. I look forward to guiding this vital body through our theme and helping delegates find common ground on the world\'s most pressing issues.',
  },
  {
    role: 'Director of Communications',
    name: 'Coming Soon',
    bio: 'The Director of Communications manages all social media, press releases, and the MUN Saint Dominique newsletter, ensuring delegates and schools stay informed before and during the conference.',
    message: 'Storytelling is at the heart of diplomacy. Our communications team will make sure the spirit of MUN Saint Dominique 2027 is felt far beyond the walls of Institut Saint Dominique.',
  },
  {
    role: 'Head of Logistics',
    name: 'Coming Soon',
    bio: 'The Head of Logistics coordinates accommodation, transportation, catering, and the physical setup of all conference rooms and venues.',
    message: 'The best conferences run seamlessly. Our logistics team works tirelessly behind the scenes so that every delegate can focus entirely on what matters most — debate.',
  },
  {
    role: 'Chair, Security Council',
    name: 'Coming Soon',
    bio: 'The Security Council Chair facilitates debate on the most urgent international peace and security matters, guiding delegates through complex resolutions and procedural motions.',
    message: 'The Security Council addresses the world\'s most critical crises. I encourage all delegates to come thoroughly prepared and ready to engage with the full weight of these issues.',
  },
]

export default function AboutPage() {
  return (
    <main>

      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-white/70 text-lg">
            Our school, our MUN programme, our team, and our partner.
          </p>
        </div>
      </section>

      {/* ── Welcome to Institut Saint Dominique ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Institut Saint Dominique</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                Welcome to Institut Saint Dominique — a private Catholic educational institution in the heart of Pau,
                dedicated to fostering the holistic development of our students through a balanced, coherent, and
                unified approach.
              </p>
              <p>
                Our mission centres on guiding students toward personal fulfilment and academic excellence, rooted
                in spiritual values and a genuine commitment to each student&rsquo;s growth. We serve students from
                primary school through to the end of lycée (high school).
              </p>
              <p>
                Institut Saint Dominique pursues three interconnected objectives:
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Balance', text: 'Administrative and pastoral teams combine attentive listening, high expectations, and kindness to guide and support every student.' },
                { title: 'Coherence', text: 'Teaching staff deliver rigorous instruction while organising enriching projects — educational trips, cultural activities, and international programmes like MUN.' },
                { title: 'Unity', text: 'Spiritual guidance explores inner development through a Christian-inspired perspective, fostering personal growth without ideological constraints.' },
              ].map(({ title, text }) => (
                <div key={title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-2 bg-gold rounded-full shrink-0" />
                  <div>
                    <p className="font-bold text-navy mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-navy text-white rounded-2xl p-8 inline-block">
            <p className="font-bold text-lg mb-1">Institut Saint Dominique</p>
            <p className="text-white/70">30 Avenue Fouchet, 64000 Pau, France</p>
            <p className="text-white/70 mt-1">
              <a href="mailto:mun@saintdominique.fr" className="text-gold hover:underline">mun@saintdominique.fr</a>
              {' '}·{' '}
              <a href="tel:+33559320123" className="text-gold hover:underline">+33 5 59 32 01 23</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── What is MUN? ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">What is Model United Nations?</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg max-w-4xl">
            <p>
              Model United Nations (MUN) is an educational simulation of the United Nations in which students act
              as delegates representing different countries and debate real-world international issues. Participants
              research a country&rsquo;s position, write position papers, give speeches, and draft resolutions to address
              global challenges.
            </p>
            <p>
              MUN develops a wide range of critical skills: public speaking, research, critical thinking, teamwork,
              negotiation, and empathy. Delegates leave with a far deeper understanding of international relations,
              the workings of multilateral institutions, and the enormous complexity of finding global consensus on
              issues like climate change, conflict, human rights, and economic inequality.
            </p>
            <p>
              Through MUN, Institut Saint Dominique&rsquo;s students take on leadership through delegate roles that require
              negotiation and collaboration; enhance their public speaking skills by presenting their country&rsquo;s positions
              before peers; gain an international perspective on geopolitics and the UN system; and develop empathy by
              genuinely engaging with viewpoints very different from their own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: '📋', title: 'Position Papers', text: 'Before the conference, delegates write a position paper outlining their country\'s stance on each committee topic. This research phase is essential preparation.' },
              { icon: '🗣️', title: 'Formal Debate', text: 'In committee sessions, delegates deliver formal speeches, ask points of information, and engage in structured debate governed by Rules of Procedure.' },
              { icon: '📝', title: 'Resolutions', text: 'Delegates collaborate to draft and amend resolutions — formal documents outlining proposed solutions to global problems, voted on by the whole committee.' },
              { icon: '🏅', title: 'Awards', text: 'Outstanding delegates are recognised with Best Delegate, Outstanding Delegate, and Verbal Commendation awards at the closing ceremony.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="card">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-4xl">MUN Club Leadership Team</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The organising committee of MUN Saint Dominique 2027 — the students who make it all happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map(({ role, name, bio, message }) => (
              <div key={role} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
                {/* Photo placeholder */}
                <div className="h-52 bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="40" height="40" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-1">{role}</p>
                  <p className="font-bold text-navy text-lg mb-3">{name}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{bio}</p>
                  <blockquote className="border-l-4 border-gold pl-4 text-gray-600 text-sm italic mt-auto leading-relaxed">
                    &ldquo;{message}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-10 italic">
            Team photos and names will be published in September 2026.
          </p>
        </div>
      </section>

      {/* ── Alleyn's School ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Our Partner — Alleyn&rsquo;s School</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                MUN Saint Dominique is proud to be organised in partnership with <strong>Alleyn&rsquo;s School</strong>,
                an independent school in Dulwich, London, United Kingdom. Alleyn&rsquo;s has a long and distinguished
                tradition in Model United Nations, and our collaboration has grown into one of the most exciting
                Franco-British school partnerships in the region.
              </p>
              <p>
                Together, our two schools previously co-hosted the MUN Alleyn&rsquo;s International conference in 2024
                and 2025 at Alleyn&rsquo;s School in London. In 2027, Institut Saint Dominique takes the reins as host
                school, welcoming Alleyn&rsquo;s delegates and many others to Pau, France.
              </p>
              <p>
                This partnership embodies everything that MUN stands for: cross-cultural understanding, international
                friendship, and the belief that young people can engage meaningfully with the challenges facing our world.
              </p>
              <a
                href="https://alleynsmun.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-mid font-semibold hover:text-gold transition-colors underline"
              >
                Visit Alleyn&rsquo;s MUN website →
              </a>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border-l-4 border-gold bg-white shadow-sm p-8">
                <p className="font-bold text-navy text-xl mb-1">Institut Saint Dominique</p>
                <p className="text-gray-500 mb-1">30 Avenue Fouchet, 64000 Pau, France</p>
                <p className="text-gold font-semibold text-sm">Host School — MUN 2027</p>
              </div>
              <div className="rounded-2xl border-l-4 border-navy-mid bg-white shadow-sm p-8">
                <p className="font-bold text-navy text-xl mb-1">Alleyn&rsquo;s School</p>
                <p className="text-gray-500 mb-1">Townley Road, Dulwich, London SE22 8SU, UK</p>
                <p className="text-navy-light font-semibold text-sm">Partner School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to join the conference?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Register on MyMUN or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Apply on MyMUN
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

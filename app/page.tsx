import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end text-white overflow-hidden rounded-b-[2.5rem]">
        {/* Full background image */}
        <Image
          src="/images/photo-acceuil-MUN.webp"
          alt="MUN Saint Dominique"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient only at the bottom-left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

        {/* Text — bottom left */}
        <div className="relative z-10 max-w-2xl px-8 sm:px-14 pb-16 sm:pb-20">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-3">
            Model United Nations
          </h1>
          <p className="text-xl text-white/85 font-light italic mb-5">
            Together Towards Global Solutions
          </p>
          <p className="text-white/70 mb-8 leading-relaxed text-base">
            Welcome to Saint Dominique MUN. Following several successful conferences organised in partnership
            with Alleyn&rsquo;s School, London, we are delighted to continue bringing together students from around
            the world in Pau for an inspiring experience of debate, diplomacy, and international cooperation.
            We look forward to welcoming delegates, teachers, and guests to the next edition of Saint Dominique
            Model United Nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3">
              Apply on MyMUN
            </a>
            <Link href="/mun2027" className="btn-outline text-base px-8 py-3">
              Conference Info
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl">What is Model United Nations?</h2>
          <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            An educational simulation of the United Nations where students become diplomats, debaters, and global thinkers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Represent a Country', body: 'Each delegate takes on the role of a country representative and must defend that nation\'s position on complex international issues. Research your country\'s foreign policy, its alliances, and its history before arriving in Pau — thorough preparation is what separates a good delegate from a great one.' },
              { num: '02', title: 'Debate & Negotiate', body: 'Through formal speeches, working papers, and resolution drafting, delegates practise the art of real diplomacy. You will argue your position, seek allies, find compromises, and experience first-hand what it takes to reach international consensus on the world\'s most pressing challenges.' },
              { num: '03', title: 'Grow & Connect', body: 'MUN develops confidence, critical thinking, and public speaking skills that last a lifetime. Beyond the debate hall, you will build genuine friendships with students from partner schools across Europe — bonds that extend well beyond the three days in Pau.' },
            ].map(({ num, title, body }) => (
              <div key={title} className="card">
                <p className="text-5xl font-bold text-gold/25 mb-4 leading-none">{num}</p>
                <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference theme placeholder */}
      <section className="py-24 px-6 bg-navy-mid text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-4">MUN Saint Dominique 2027</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Conference Theme</h2>
          <p className="text-white/60 text-lg italic mb-8">Theme to be announced</p>
          <p className="text-white/70 leading-relaxed mb-10">
            Every MUN conference is built around a central theme that guides debate across all committees. The theme
            for MUN Saint Dominique 2027 will be announced here once confirmed. In the meantime, explore the conference
            details or register your interest on MyMUN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply on MyMUN</a>
            <Link href="/mun2027" className="btn-outline">Conference Details</Link>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl">Partnerships</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are thrilled to announce our collaboration with The Alleyn&rsquo;s Schools Group in organising this
            prestigious conference. This partnership brings together the rich educational heritage of both institutions,
            fostering a dynamic exchange of ideas and perspectives. As we look ahead to 2027, we are excited about the
            opportunity to host this event in the beautiful city of Pau, where we will continue to promote world-class
            holistic education and strengthen our global community.
          </p>
          <a href="https://www.alleynsmun.co.uk/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Alleyn&rsquo;s MUN
          </a>
        </div>
      </section>

      {/* Pau teaser */}
      <section className="relative py-24 px-6 overflow-hidden mx-4 sm:mx-6 rounded-[2rem]">
        <div className="absolute inset-0">
          <Image src="/images/chateau-pau.webp" alt="Château de Pau" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-5">Come to Pau</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Nestled at the foot of the Pyrénées, Pau is one of the most beautiful cities in southwestern France.
            Birthplace of King Henry IV, home of the Section Paloise rugby club, and named France&rsquo;s most athletic
            city in 2024 — it is the perfect backdrop for three days of world-class diplomacy.
          </p>
          <Link href="/pau" className="btn-white">Discover Pau & Travel Info</Link>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to join us?</h2>
          <p className="text-white/60 mb-3">Registration is open on MyMUN. Spots are limited — apply early.</p>
          <p className="text-white/45 text-sm mb-10">
            Questions? <a href="mailto:mun@saintdominique.fr" className="text-gold hover:underline">mun@saintdominique.fr</a>
          </p>
          <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
            Apply on MyMUN
          </a>
        </div>
      </section>

    </main>
  )
}

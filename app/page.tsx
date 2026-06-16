import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative bg-navy min-h-[88vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ville-de-pau.webp"
            alt="Pau, France"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <Image
            src="/images/logo MUN.webp"
            alt="MUN Saint Dominique"
            width={140}
            height={140}
            className="mx-auto mb-8 rounded-xl"
          />
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-5">
            19 – 20 – 21 March 2027 · Pau, France
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
            Model United Nations
          </h1>
          <p className="text-2xl sm:text-3xl text-white/80 font-light mb-4 italic">
            &ldquo;Together towards a pact for the future&rdquo;
          </p>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            MUN Saint Dominique is hosted by Institut Saint Dominique, Pau, France —
            in partnership with Alleyn&rsquo;s School, London. Join delegates from across
            Europe for three days of diplomacy, debate, and discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mymun.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Apply on MyMUN
            </a>
            <Link href="/about" className="btn-outline text-lg px-10 py-4">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* ── Key Facts ── */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '3', label: 'Days of Conference' },
            { value: '2027', label: 'March 19–21' },
            { value: 'Pau', label: 'South of France' },
            { value: 'MyMUN', label: 'Register Online' },
          ].map(({ value, label }) => (
            <div key={label} className="py-6">
              <p className="text-4xl font-bold text-navy-mid mb-1">{value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is MUN? ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-4xl">What is Model United Nations?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A unique educational experience that transforms students into diplomats, thinkers, and global citizens.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Represent a Country',
                body: 'Each delegate takes on the role of a country representative and must defend that nation\'s position on complex international issues — regardless of their personal views. You will research your country\'s history, foreign policy, and alliances before arriving in Pau, so that you can speak confidently and persuasively on the floor. Thorough preparation is what separates a good delegate from a great one.',
              },
              {
                num: '02',
                title: 'Debate & Negotiate',
                body: 'Through formal speeches, working papers, and resolution drafting, delegates practise the art of diplomacy in real time. You will argue your country\'s position, seek allies, negotiate compromises, and experience first-hand what it takes to reach international consensus on some of the world\'s most pressing challenges. Every word on the floor matters.',
              },
              {
                num: '03',
                title: 'Grow & Connect',
                body: 'MUN builds confidence, critical thinking, and public speaking skills that last a lifetime. Students who attend consistently report that MUN is one of the most formative experiences of their school career. Beyond the debate hall, you will build lasting friendships with students from partner schools across Europe — bonds that extend far beyond the three days in Pau.',
              },
            ].map(({ num, title, body }) => (
              <div key={title} className="card">
                <p className="text-5xl font-bold text-gold/30 mb-4 leading-none">{num}</p>
                <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conference Theme ── */}
      <section className="py-24 px-6 bg-navy-mid text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">MUN Saint Dominique 2027</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Conference Theme</h2>
          <p className="text-2xl italic text-white/85 mb-6">
            &ldquo;Together towards a pact for the future&rdquo;
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Our theme invites delegates to reflect on the collective agreements that shape our shared world —
            from climate and security to technology and human rights. In a time of global uncertainty, what pact
            will the next generation of leaders propose? Come to Pau in March 2027 and make your voice heard.
          </p>
          <a
            href="https://mymun.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Register on MyMUN
          </a>
        </div>
      </section>

      {/* ── Things to Do ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl">Things to Do in Pau</h2>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            Between sessions, explore one of France&rsquo;s most beautiful cities.
          </p>

          <div className="flex flex-col gap-14">

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/chateau-pau.webp"
                  alt="Château de Pau"
                  width={900}
                  height={550}
                  className="w-full h-72 md:h-[28rem] object-cover"
                />
              </div>
              <div className="md:w-2/5 px-4">
                <h3 className="text-2xl font-bold text-navy mb-4">Château de Pau</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Château de Pau is a stunning Renaissance castle and the birthplace of King Henry IV of France.
                  Perched above the city, it offers panoramic views of the Pyrenees and houses remarkable royal
                  collections. A must-visit for any delegate spending time in Pau.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pau-tour-de-france.webp"
                  alt="Tour de France à Pau"
                  width={900}
                  height={550}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-2/5 px-4">
                <h3 className="text-2xl font-bold text-navy mb-4">Tour de France</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Pau is one of the most iconic stage cities of the Tour de France. Its location at the gateway
                  to the Pyrenees makes it a legendary base for the mountain stages. The city breathes cycling
                  history, with famous climbs like the Col du Tourmalet just a short drive away.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/section-paloise.webp"
                  alt="Section Paloise Rugby"
                  width={900}
                  height={550}
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2 px-4">
                <h3 className="text-2xl font-bold text-navy mb-4">Section Paloise Rugby</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Rugby is the soul of Pau. The Section Paloise is one of the oldest and most respected rugby clubs
                  in France, competing in the Top 14. If you are visiting during the rugby season, a match at the
                  Stade du Hameau is an unforgettable experience that captures the city&rsquo;s sporting spirit perfectly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl">Partnerships</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are thrilled to announce our collaboration with The Alleyn&rsquo;s Schools Group in organizing this
            prestigious conference. This partnership brings together the rich educational heritage of both
            institutions, fostering a dynamic exchange of ideas and perspectives. As we look ahead to 2027, we
            are excited about the opportunity to host this event in the beautiful city of Pau, where we will
            continue to promote world-class holistic education and strengthen our global community.
          </p>
          <a
            href="https://www.alleynsmun.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Visit Alleyn&rsquo;s MUN
          </a>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center">Find Us</h2>
          <p className="text-center text-gray-600 mb-8">
            Institut Saint Dominique · 30 Avenue Fouchet, 64000 Pau, France
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Institut Saint Dominique, Pau"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3950%2C43.2990%2C-0.3550%2C43.3290&layer=mapnik&marker=43.3140%2C-0.3748"
              width="100%"
              height="440"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.openstreetmap.org/?mlat=43.3140&mlon=-0.3748#map=17/43.3140/-0.3748"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-mid hover:text-gold transition-colors text-sm underline"
            >
              View larger map
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to join us in Pau?</h2>
          <p className="text-white/70 mb-3 text-lg">
            Registration is open on MyMUN. Spots are limited — apply early.
          </p>
          <p className="text-white/55 mb-10 text-sm">
            Questions? Send us an email at{' '}
            <a href="mailto:mun@saintdominique.fr" className="text-gold hover:underline">
              mun@saintdominique.fr
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mymun.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Apply on MyMUN
            </a>
            <Link href="/contact" className="btn-outline text-lg px-10 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

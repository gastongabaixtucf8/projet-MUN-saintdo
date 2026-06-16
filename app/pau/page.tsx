import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pau, Accommodation & Transportation — MUN Saint Dominique',
}

export default function PauPage() {
  return (
    <main>

      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Pau & Travel</h1>
          <p className="text-white/70 text-lg">
            Everything you need to know about the city, where to stay, and how to get here.
          </p>
        </div>
      </section>

      {/* ── About Pau ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ville-de-pau.webp"
            alt="Ville de Pau"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/65" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Welcome to Pau</h2>
          <p className="text-lg text-white/85 leading-relaxed mb-6">
            Pau is a charming city of 80,000 inhabitants nestled at the foothills of the Pyrénées, in the heart of
            the Béarn region of southwestern France. Positioned between the Atlantic Ocean and the mountains, it
            enjoys a mild climate year-round and an exceptional quality of life.
          </p>
          <p className="text-white/75 leading-relaxed mb-6">
            Birthplace of King Henry IV, Pau boasts a rich royal history, world-class cultural institutions, and one
            of the most spectacular urban panoramas in France — the famous Boulevard des Pyrénées, a 1.8 km promenade
            overlooking the entire Pyrenees mountain range.
          </p>
          <p className="text-white/75 leading-relaxed">
            Named the most athletic city in France in 2024, Pau has hosted the Tour de France and is home to the
            Section Paloise rugby club. In March 2027, it will also be home to MUN Saint Dominique — welcoming
            delegates from across Europe for three unforgettable days.
          </p>
        </div>
      </section>

      {/* ── Things to Do ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl">Explore Pau</h2>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-lg">
            Pau is more than just a conference venue — it&rsquo;s a city worth discovering. Between sessions,
            here are some highlights not to miss.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: '/images/chateau-pau.webp',
                title: 'Château de Pau',
                text: 'The Château de Pau is one of the most historically significant castles in France. Built in the 14th century and transformed during the Renaissance, it was the birthplace of King Henry IV in 1553. Today it is a national museum housing extraordinary royal tapestries, furniture, and art. The château\'s position above the city also offers stunning views of the Pyrenees.',
              },
              {
                img: '/images/pau-tour-de-france.webp',
                title: 'Boulevard des Pyrénées & Tour de France',
                text: 'The Boulevard des Pyrénées is one of the great urban panoramas of France — a wide promenade stretching nearly 2 km with an unbroken view of the Pyrenees mountain range. Pau is also a legendary Tour de France city: riders have battled from Pau to the summit of the Col du Tourmalet and the Col d\'Aubisque many times. The cycling heritage is everywhere in the city.',
              },
              {
                img: '/images/section-paloise.webp',
                title: 'Section Paloise Rugby',
                text: 'Rugby is at the very heart of Pau\'s identity. The Section Paloise, founded in 1902, is one of the oldest rugby clubs in France and competes in the Top 14 — the top division of French rugby. The passion of Palois supporters at the Stade du Hameau is legendary. If matches are on during the conference weekend, attending one is a truly immersive local experience.',
              },
              {
                img: '/images/ville-de-pau.webp',
                title: 'City Centre & Markets',
                text: 'Pau\'s city centre is lively and walkable, with beautiful 19th-century architecture, independent boutiques, and excellent restaurants. The covered market — Halles de Pau — is a great place to discover local Béarnaise specialities: foie gras, Jurançon wines, Ossau-Iraty cheese, and fresh produce from the mountain farms. The Thursday and Saturday outdoor markets are also worth a visit.',
              },
            ].map(({ img, title, text }) => (
              <div key={title} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    width={700}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Accommodation</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
            Pau has a wide range of accommodation options to suit all budgets and preferences. We recommend booking
            early, especially for the conference weekend. Below are some options close to Institut Saint Dominique.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                category: 'Close to School',
                tag: 'Most convenient',
                description: 'Several hotels are located within a 5-minute walk of Institut Saint Dominique on Avenue Fouchet. For delegates who want to minimise travel time between sessions and their accommodation, this is the most practical choice. You will be able to return to your hotel at lunch breaks and after evening events without needing transport.',
                note: 'Booking links will be confirmed closer to the conference.',
              },
              {
                category: 'City Centre',
                tag: 'Best for exploration',
                description: 'Pau\'s vibrant city centre is about 10–15 minutes from the school by bus or on foot. Staying here puts you close to the main restaurants, cafés, shops, the château, and the Boulevard des Pyrénées. It is an excellent option for delegates who want to experience Pau fully beyond the conference itself.',
                note: 'Bus service is frequent and costs just €1.20 per journey.',
              },
              {
                category: 'Budget Options',
                tag: 'Best value',
                description: 'There are several affordable hotels, residences, and student accommodation options in and around Pau. We recommend checking booking platforms well in advance of the conference, as the city can fill up during busy periods. Contact us if you need advice on organising accommodation for a school group.',
                note: 'Contact us for school-group accommodation advice.',
              },
            ].map(({ category, tag, description, note }) => (
              <div key={category} className="card flex flex-col">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">{tag}</p>
                <h3 className="font-bold text-navy text-lg mb-3">{category}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 flex-1">{description}</p>
                <p className="text-sm text-navy-mid font-medium">{note}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy-mid text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">Need Help with Accommodation?</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              If you are organising accommodation for a school group, please contact us directly and we will do our
              best to assist with recommendations. Detailed hotel information with booking links will be published
              on this page closer to the conference date.
            </p>
            <a href="mailto:mun@saintdominique.fr" className="btn-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Transportation ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Getting to Pau</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            Pau is well connected to the rest of France and Europe. Here are the main ways to reach the city.
          </p>

          <div className="space-y-6">

            {/* By Plane */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                  <svg width="22" height="22" fill="none" stroke="#0e1f42" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">By Plane</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    <strong>Pau Pyrénées Airport (PUF)</strong> is just 10 minutes from the city centre. It serves
                    several domestic destinations including Paris-Orly (Air France) and offers seasonal European routes.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Alternatively, <strong>Biarritz Airport (BIQ)</strong> is approximately 1 hour from Pau and serves
                    more international routes. <strong>Bordeaux Airport (BOD)</strong> and <strong>Toulouse Airport (TLS)</strong>
                    {' '}are 1h45 away and offer extensive European and intercontinental connections.
                  </p>
                </div>
              </div>
            </div>

            {/* By Train */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start gap-5">
                <div className="text-4xl shrink-0">🚄</div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">By Train</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Pau has a main train station (<strong>Gare de Pau</strong>) with regular TGV and Intercités
                    connections. Direct trains from Paris Montparnasse take approximately 4h30–5h. Connections
                    via Bordeaux or Bayonne are also frequent.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    From the station, Pau&rsquo;s famous <strong>funiculaire</strong> (cable car) connects the lower
                    town to the upper city and château area in just minutes — a unique experience in itself!
                  </p>
                </div>
              </div>
            </div>

            {/* By Car */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start gap-5">
                <div className="text-4xl shrink-0">🚗</div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">By Car</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Pau is easily accessible by motorway from all directions. The A64 (La Pyrénéenne) connects
                    Pau to Bayonne (1h) and Toulouse (2h). From Paris, the drive is approximately 7–8 hours via
                    the A10 and A63 or the A62 and A64.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Parking is available near Institut Saint Dominique on Avenue Fouchet and in the surrounding area.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Transport */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start gap-5">
                <div className="text-4xl shrink-0">🚌</div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">Getting Around Pau</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Pau has a safe, clean and efficient public bus network operated by <strong>Idelis</strong>.
                    A single journey costs just <strong>€1.20</strong>, and a 10-journey card is available for
                    <strong> €10</strong> (+ €0.20 card fee). Pre-loaded travel cards can be arranged as part
                    of your conference registration.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The city centre and château area are easily walkable from many accommodation options.
                    Taxis and rideshare services are also readily available.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Travel Partner */}
          <div className="mt-10 bg-navy text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">Official Travel Partner — Pro Sky</h3>
            <p className="text-white/80 leading-relaxed mb-5">
              Pro Sky is our official travel partner, offering competitive rates for air and rail arrangements for
              schools and groups travelling to Pau.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-1">UK & Southern Europe</p>
                <p className="text-white/80">Karina Balbino · <a href="tel:+33788862559" className="hover:text-gold">+33 7 88 86 25 59</a></p>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-1">Germany & Northern Europe</p>
                <p className="text-white/80">André Saak · <a href="tel:+492219204424" className="hover:text-gold">+49 221 9204424</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center">Institut Saint Dominique</h2>
          <p className="text-center text-gray-600 mb-8">
            30 Avenue Fouchet, 64000 Pau, France
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Institut Saint Dominique, Pau"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3900%2C43.2830%2C-0.3550%2C43.3050&layer=mapnik&marker=43.2940%2C-0.3725"
              width="100%"
              height="460"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.openstreetmap.org/?mlat=43.2940&mlon=-0.3725#map=16/43.2940/-0.3725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-mid hover:text-gold transition-colors text-sm underline"
            >
              View larger map
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Questions about your trip to Pau?</h2>
          <p className="text-white/70 mb-8">
            Our team is happy to help with travel or accommodation advice.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  )
}

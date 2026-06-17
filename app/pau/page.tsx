import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Pau & Travel' }

const hotels = [
  {
    name: 'Hôtel B&B Pau Zénith',
    stars: '3-star',
    body: 'A comfortable hotel offering single and double rooms, just 3 bus stops from the school. To enjoy the preferential rates below, simply book by phone or by email using the booking code.',
    code: 'MUNSTDO26',
    link: 'https://www.hotel-bb.com/fr',
    rates: [
      { label: 'Double room (1 large bed, sleeps 2)', price: '€69' },
      { label: 'Twin room (2 single beds)', price: '€69' },
      { label: 'Quad room (1 double + 2 single beds)', price: '€90' },
    ],
    extras: [
      { label: 'Breakfast', value: '€11.90 per person' },
      { label: 'City tax (18+)', value: '€1.63 per person' },
    ],
  },
  {
    name: 'Kyriad Prestige Pau',
    stars: '4-star',
    body: 'A 4-star hotel with the "La Boucherie" restaurant on the ground floor, offering high-quality comfort just 3 bus stops from the school. A number of single and double / twin rooms are reserved for conference participants at the preferential rates below.',
    code: null,
    link: null,
    rates: [
      { label: 'Single room', price: '€101' },
      { label: 'Double or twin room', price: '€118' },
    ],
    extras: [
      { label: 'City tax', value: '€2.07 per person' },
    ],
  },
  {
    name: 'Hôtel Pau-Université',
    stars: '3-star',
    body: 'A comfortable and very well-located hotel near the university, with easy access to the school and the city centre. Use the discount code below to unlock our special conference rates.',
    code: 'SAINTDO 2026',
    link: 'https://ostalhotel-pau.com',
    rates: [
      { label: 'Double room', price: '€72', was: '€85' },
      { label: 'Twin room', price: '€75', was: '€89' },
      { label: 'Triple room', price: '€90', was: '€110' },
      { label: 'Quad room', price: '€98', was: '€120' },
    ],
    extras: [
      { label: 'Buffet breakfast', value: '€12' },
      { label: 'City tax', value: '€1.67 per person' },
    ],
  },
]

export default function PauPage() {
  return (
    <main>

      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Pau & Travel</h1>
          <p className="text-white/65 text-lg">Everything you need to know about the city, how to get here, and where to stay.</p>
        </div>
      </section>

      {/* About Pau */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/ville-de-pau.webp" alt="Pau" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/68" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Welcome to Pau</h2>
          <div className="space-y-5 text-white/80 text-lg leading-relaxed">
            <p>
              Pau is a vibrant city of 80,000 inhabitants nestled at the foothills of the Pyrénées, in the heart of
              the Béarn region of southwestern France. Positioned between the Atlantic Ocean to the west and the
              mountains to the south, it enjoys a mild climate year-round and an exceptional quality of life.
            </p>
            <p>
              Pau is the birthplace of King Henry IV of France, born at the Château de Pau in 1553. The city has
              a rich royal and aristocratic history — in the 19th century it became a fashionable winter retreat for
              British aristocrats, who introduced golf to continental Europe here in 1856. The famous
              Boulevard des Pyrénées, a 1.8 km promenade overlooking the entire mountain range, remains one of the
              most spectacular urban panoramas in France.
            </p>
            <p>
              Today, Pau is known as one of France&rsquo;s most dynamic mid-sized cities. It was named the most athletic
              city in France in 2024, reflecting its deep sporting culture: the city hosts the Tour de France,
              the legendary Pau Grand Prix motor race, and is home to the Section Paloise rugby club, one of the oldest
              and most respected clubs in French rugby.
            </p>
          </div>
        </div>
      </section>

      {/* Things to do */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl">Things to Do in Pau</h2>
          <p className="text-center text-gray-500 text-lg mb-14 max-w-2xl mx-auto">
            The conference leaves room to explore one of France&rsquo;s most beautiful cities.
          </p>

          <div className="flex flex-col gap-14">

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/chateau-pau.webp" alt="Château de Pau" width={900} height={550} className="w-full h-72 md:h-96 object-cover" />
              </div>
              <div className="md:w-2/5 px-4">
                <h3 className="text-2xl font-bold text-navy mb-4">Château de Pau</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Château de Pau is one of the most historically significant castles in France. Built in the 14th
                  century and transformed into a Renaissance palace, it is the birthplace of King Henry IV and today
                  houses a remarkable national museum of royal furniture, tapestries, and art. From the château terrace,
                  the views of the Pyrenees are simply breathtaking.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/pau-tour-de-france.webp" alt="Tour de France à Pau" width={900} height={550} className="w-full h-72 md:h-80 object-cover" />
              </div>
              <div className="md:w-2/5 px-4">
                <h3 className="text-2xl font-bold text-navy mb-4">Boulevard des Pyrénées</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Boulevard des Pyrénées is one of the great promenades of France — 1.8 km of gardens and
                  viewpoints with an unbroken panorama of the Pyrenees mountain range. Pau is also one of the most
                  iconic Tour de France stage cities; the legendary climbs of the Col du Tourmalet and the
                  Col d&rsquo;Aubisque begin just an hour&rsquo;s drive from the city.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/section-paloise.webp" alt="Section Paloise" width={900} height={550} className="w-full h-64 md:h-72 object-cover" />
              </div>
              <div className="md:w-1/2 px-4">
                <h3 className="text-2xl font-bold text-navy mb-4">Section Paloise Rugby</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Rugby is at the soul of Pau. The Section Paloise, founded in 1902, is one of the oldest rugby clubs
                  in France, currently competing in the Top 14. If there is a match at the Stade du Hameau during the
                  conference weekend, it is an experience not to be missed — the passion of the Palois supporters is
                  legendary throughout French rugby.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Getting to Pau</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Pau is well connected to the rest of France and Europe by air, rail, and road.
          </p>

          <div className="space-y-5">
            {[
              {
                title: 'By Plane',
                icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>,
                body: 'Pau Pyrénées Airport (PUF) is just 10 minutes from the city centre, with direct flights from Paris-Orly (Air France) and seasonal European routes. Alternatively, Biarritz Airport (BIQ) is 1 hour away with more international connections. Bordeaux (BOD) and Toulouse (TLS) airports are 1h45 away and offer extensive European and intercontinental routes.',
              },
              {
                title: 'By Train',
                icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5M3 13.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v7.5m-18 0h18m-9 3.75h.008v.008H12v-.008z"/></svg>,
                body: 'Pau\'s main train station (Gare de Pau) has regular TGV and Intercités connections. Direct trains from Paris Montparnasse take approximately 4h30–5h. Connections via Bordeaux or Bayonne are also frequent. From the station, Pau\'s famous funiculaire (cable car) whisks you up to the upper city and the château area — a unique experience in itself.',
              },
              {
                title: 'By Car',
                icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5M3 13.5V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v7.5m-18 0h18"/></svg>,
                body: 'Pau is easily accessible by motorway from all directions. The A64 (La Pyrénéenne) connects Pau to Bayonne (1h west) and Toulouse (2h east). From Paris the drive is approximately 7–8 hours via the A10 and A63. Parking is available near Institut Saint Dominique on Avenue Fouchet and in the surrounding residential streets.',
              },
              {
                title: 'Getting Around Pau',
                icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5l1.5-4.5h13.5l1.5 4.5M3 10.5H2.25v1.5H3m17.25-1.5h.75v1.5h-.75M3 10.5h18M5.25 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 10.5v7.5h18v-7.5"/></svg>,
                body: 'Pau has a safe, clean, and efficient public bus network operated by Idelis. A single journey costs €1.20 and a 10-journey card is available for €10. The city centre and château are also easily walkable from many accommodation options. Pau also has its unique funiculaire (cable car) linking the lower town (train station area) to the upper town — free to use and a memorable experience.',
              },
            ].map(({ title, icon, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center text-navy shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pro Sky */}
          <div className="mt-10 bg-navy text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">Official Travel Partner — Pro Sky</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Pro Sky is the official travel partner for MUN Saint Dominique, offering competitive group rates for
              air and rail travel to Pau. Contact them directly for school group bookings.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">UK & Southern Europe</p>
                <p className="text-white/75">Karina Balbino</p>
                <a href="tel:+33788862559" className="text-white/60 hover:text-gold transition-colors">+33 7 88 86 25 59</a>
              </div>
              <div>
                <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">Germany & Northern Europe</p>
                <p className="text-white/75">André Saak</p>
                <a href="tel:+492219204424" className="text-white/60 hover:text-gold transition-colors">+49 221 9204424</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl">Accommodation</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Pau has a wide range of accommodation options. We recommend booking early, especially for the conference
            weekend. Specific hotel recommendations with updated prices will be confirmed closer to the event.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tag: 'Most Convenient',
                title: 'Close to School',
                body: 'Several hotels are located within a 5-minute walk of Institut Saint Dominique on Avenue Fouchet. For delegates who want to minimise travel between sessions and their room, this is the best option.',
              },
              {
                tag: 'Best for Exploring',
                title: 'City Centre',
                body: 'Staying in Pau\'s city centre puts you close to the château, boulevard, restaurants, and shops. It\'s 10–15 minutes from the school by bus (€1.20 per journey on the Idelis network).',
              },
              {
                tag: 'Best Value',
                title: 'Budget Options',
                body: 'There are affordable hotels, student residences, and hostels in and around Pau. Check major booking platforms in advance. Contact us if you need school-group accommodation advice.',
              },
            ].map(({ tag, title, body }) => (
              <div key={title} className="card flex flex-col">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">{tag}</p>
                <h3 className="font-bold text-navy text-lg mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy-mid text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">Need Accommodation Advice?</h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Detailed hotel information with specific recommendations and booking links will be published on this
              page closer to the conference. For school group bookings, please contact us directly.
            </p>
            <Link href="/contact" className="btn-primary inline-block">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center">Institut Saint Dominique</h2>
          <p className="text-center text-gray-500 mb-8">30 Avenue Fouchet, 64000 Pau, France</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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
          <p className="text-center mt-3">
            <a href="https://www.openstreetmap.org/?mlat=43.3140&mlon=-0.3748#map=17/43.3140/-0.3748" target="_blank" rel="noopener noreferrer" className="text-navy-mid hover:text-gold transition-colors text-sm underline">
              View larger map
            </a>
          </p>
        </div>
      </section>

    </main>
  )
}

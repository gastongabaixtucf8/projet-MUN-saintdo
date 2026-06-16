import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">
            19 – 21 March 2027 · Pau, France
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            MUN Saint Dominique
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join future world leaders at the Model United Nations conference hosted by
            Institut Saint Dominique.
          </p>
          <a href="mailto:mun@saintdominique.fr" className="btn-primary">
            Register Now
          </a>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="section-title text-center">About the Conference</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { title: 'Debate', body: 'Represent a country, defend its positions, and negotiate with delegates from around the world on global challenges.' },
            { title: 'Learn', body: 'Develop skills in public speaking, diplomacy, research, and collaborative problem-solving.' },
            { title: 'Connect', body: 'Build lasting friendships with students from partner schools across Europe and beyond.' },
          ].map(({ title, body }) => (
            <div key={title} className="bg-white rounded-xl shadow-md p-8 border-t-4 border-gold">
              <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Pau */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ville-de-pau.webp"
            alt="Ville de Pau"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Discover Pau</h2>
          <p className="text-lg text-white/85 leading-relaxed mb-6">
            Nestled at the foot of the Pyrenees, Pau is a vibrant city with a rich history, breathtaking mountain views, and a warm southern French atmosphere. Home to kings, cyclists, and rugby champions, Pau offers a unique backdrop for an unforgettable conference experience.
          </p>
          <p className="text-white/75 leading-relaxed">
            Delegates will have the opportunity to explore the city&rsquo;s boulevards, enjoy local cuisine, and experience the famous Pyrenean hospitality during their stay.
          </p>
        </div>
      </section>

      {/* Things to do in Pau */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Things to Do in Pau</h2>

          <div className="mt-12 flex flex-col gap-12">

            {/* Row 1: big left, text right */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/chateau-pau.webp"
                  alt="Château de Pau"
                  width={800}
                  height={500}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6">
                <h3 className="text-2xl font-bold text-navy mb-3">Château de Pau</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visit the birthplace of King Henry IV, a Renaissance castle that stands at the heart of Pau and offers panoramic views of the Pyrenees mountains.
                </p>
              </div>
            </div>

            {/* Row 2: text left, big right */}
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <div className="md:w-2/3 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pau-tour-de-france.webp"
                  alt="Tour de France à Pau"
                  width={800}
                  height={500}
                  className="w-full h-72 md:h-80 object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6">
                <h3 className="text-2xl font-bold text-navy mb-3">Tour de France</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pau is a legendary stage city of the Tour de France, celebrated for its proximity to the iconic Pyrenean climbs.
                </p>
              </div>
            </div>

            {/* Row 3: half and half */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/section-paloise.webp"
                  alt="Section Paloise Rugby"
                  width={800}
                  height={500}
                  className="w-full h-64 md:h-72 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-bold text-navy mb-3">Section Paloise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience the passion of French rugby with the Section Paloise, one of the oldest and most beloved clubs in France. Pau&rsquo;s rugby culture is legendary — catch a match if you can!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center">Find Us</h2>
          <p className="text-center text-gray-600 mb-8">
            Institut Saint Dominique · 36 Rue Saint-Louis, 64000 Pau, France
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Institut Saint Dominique, Pau"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3740%2C43.2900%2C-0.3550%2C43.3020&layer=mapnik&marker=43.2964%2C-0.3637"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.openstreetmap.org/?mlat=43.2964&mlon=-0.3637#map=15/43.2964/-0.3637"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-gold transition-colors text-sm underline"
            >
              View larger map
            </a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white/75 mb-8 text-lg">
            Questions about the conference? We&rsquo;d love to hear from you.
          </p>
          <a
            href="mailto:mun@saintdominique.fr"
            className="text-gold text-xl font-semibold hover:underline"
          >
            mun@saintdominique.fr
          </a>
          <div className="mt-10">
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

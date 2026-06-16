import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — MUN Saint Dominique',
}

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-white/75 text-lg">
            Discover MUN Saint Dominique, our school, and our partner.
          </p>
        </div>
      </section>

      {/* What is MUN? */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">What is Model United Nations?</h2>
          <div className="prose prose-lg text-gray-700 space-y-5 leading-relaxed">
            <p>
              Model United Nations (MUN) is an educational simulation of the United Nations where students take on the roles of country delegates and debate real-world issues. Participants research a country&rsquo;s position on global topics, write resolutions, and engage in formal debate to find solutions to international challenges.
            </p>
            <p>
              MUN conferences develop critical skills including public speaking, diplomacy, leadership, research, and teamwork. Students leave with a deeper understanding of international relations, global issues, and the complex machinery of multilateral negotiations.
            </p>
            <p>
              Whether you are a first-time delegate or an experienced chair, MUN Saint Dominique welcomes students from all backgrounds to take the floor and make their voice heard.
            </p>
          </div>
        </div>
      </section>

      {/* Institut Saint Dominique */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Institut Saint Dominique</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Institut Saint Dominique is a private Catholic school located in Pau, in the Pyrénées-Atlantiques department of southwestern France. Founded with a mission of academic excellence and personal development, the school serves students from primary level through high school (lycée).
            </p>
            <p>
              The school has a strong tradition of international engagement, encouraging students to think globally, develop linguistic skills, and participate in cross-cultural exchange. The MUN programme is a natural extension of these values, offering students a platform to engage with the world&rsquo;s most pressing issues.
            </p>
            <p>
              Located in the heart of Pau — just steps from the Château and the famous Boulevard des Pyrénées — the school benefits from an exceptional environment that inspires both study and exploration.
            </p>
          </div>

          <div className="mt-8 inline-block bg-navy text-white rounded-xl px-8 py-5">
            <p className="font-semibold text-lg">Institut Saint Dominique</p>
            <p className="text-white/75 mt-1">36 Rue Saint-Louis, 64000 Pau, France</p>
            <p className="text-white/75 mt-1">
              Contact:{' '}
              <a href="mailto:mun@saintdominique.fr" className="text-gold hover:underline">
                mun@saintdominique.fr
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Alleyn's School Partnership */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Partner — Alleyn&rsquo;s School</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              MUN Saint Dominique is proud to partner with <strong>Alleyn&rsquo;s School</strong>, an independent school in Dulwich, London, United Kingdom. Alleyn&rsquo;s has a long and distinguished tradition in Model United Nations, and our collaboration brings together students from France and the UK in a shared commitment to international dialogue.
            </p>
            <p>
              This partnership enriches the conference with diverse perspectives, experienced delegates, and a strong transatlantic spirit. Together, our two schools embody the cooperation and friendship that MUN seeks to foster.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <div className="flex-1 rounded-xl border-l-4 border-gold bg-gray-50 p-6">
              <p className="font-bold text-navy text-lg">Institut Saint Dominique</p>
              <p className="text-gray-600 mt-1">Pau, France</p>
              <p className="text-gray-500 text-sm mt-1">Host school — 19–21 March 2027</p>
            </div>
            <div className="flex-1 rounded-xl border-l-4 border-navy bg-gray-50 p-6">
              <p className="font-bold text-navy text-lg">Alleyn&rsquo;s School</p>
              <p className="text-gray-600 mt-1">Dulwich, London, United Kingdom</p>
              <p className="text-gray-500 text-sm mt-1">Partner school</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
          <p className="text-white/75 mb-8">
            Contact us to learn more about registering for MUN Saint Dominique 2027.
          </p>
          <a href="mailto:mun@saintdominique.fr" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}

import Image from 'next/image'

const secretariat = [
  {
    role: 'Secretary General',
    name: 'Mathilda Rossignol',
    photo: '/images/mathilda-rossignol.png',
    quote: 'I am fully committed to MUN because I believe that debate is key to finding solutions, and that we should never underestimate the power of words, especially in today\'s world.',
  },
  {
    role: 'Secretary General',
    name: 'Samuel Boisseau',
    photo: '/images/samuel-boisseau.jpeg',
    quote: 'I believe that Saint Dominique\'s MUN is a great opportunity for people of all around the world to come together and try to tackle current issues and exercise public speaking and diplomacy in a world where truth and words seem to hold less and less power everyday.',
  },
  {
    role: 'Vice Secretary General',
    name: 'Samuel Létang',
    photo: '/images/samuel-letang.png',
    quote: 'I\'m glad we have the opportunity to host this year. Last year, I liked every moment. Now, I would like to make sure new students can enjoy MUN as much as I did.',
  },
  {
    role: 'Vice Secretary General',
    name: 'Zoë Chaffiotte',
    photo: '/images/zoe-chaffiotte.jpeg',
    quote: 'I know how important these conferences are to share our voices together and debate about current issues in the world. As we all know, there are many ongoing crises around the world and speaking is the first step to ensure a better future.',
  },
  {
    role: 'Head of Press Team',
    name: 'Gabriel Galdiolo',
    photo: '/images/gabriel-galdiolo.jpeg',
    quote: 'My job, along with the other members of the press team, will be to give visibility to the conference and show how it unfolds. We will also make sure to create lasting memories of the moments of debate and of all the special events.',
  },
]

export default function OrganisingCommittee({ className = '' }: { className?: string }) {
  return (
    <section className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title text-4xl">Organising Committee</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The student team that makes MUN Saint Dominique happen. Photos and updated bios for the 2027 conference
            will be published here in September 2026.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {secretariat.map(({ role, name, photo, quote }) => (
            <div key={name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-96 bg-gray-100">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">{role}</p>
                <p className="font-bold text-navy text-xl mb-4">{name}</p>
                <blockquote className="border-l-4 border-gold pl-4 text-gray-600 text-sm italic leading-relaxed mt-auto">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-10 italic">
          Names and roles shown are from the 2025–2026 conference. The 2027 committee will be confirmed in September 2026.
        </p>
      </div>
    </section>
  )
}

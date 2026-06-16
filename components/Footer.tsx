export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 py-8 px-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} MUN Saint Dominique &mdash; Institut Saint Dominique, Pau, France
      </p>
      <p className="mt-1">
        <a href="mailto:mun@saintdominique.fr" className="hover:text-gold transition-colors">
          mun@saintdominique.fr
        </a>
      </p>
    </footer>
  )
}

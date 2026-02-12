import { Link } from 'react-router-dom'
import { footerLinks } from '@shared/data/mockData'

export const PublicFooter = () => (
  <footer className="border-t border-violet-300/10 px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 text-sm text-violet-100/65 md:flex-row md:items-center">
      <p>© {new Date().getFullYear()} Student-IA. AI-based study platform.</p>
      <div className="flex flex-wrap items-center gap-4">
        {footerLinks.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
)


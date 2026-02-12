import { ArrowRight, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { publicNav } from '../../data/mockData'
import { GradientButton } from '../common/GradientButton'

export const LandingNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-violet-300/10 bg-[#0d0922]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="font-display text-lg font-bold text-white sm:text-xl" to="/">
          Student<span className="gradient-text">-IA</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-violet-100/70 xl:gap-8 md:flex">
          {publicNav.map((item) => (
            <li key={item.path}>
              <NavLink className="transition-colors hover:text-violet-100" to={item.path}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link className="rounded-xl border border-violet-300/20 px-4 py-2 font-semibold text-violet-100/80 hover:bg-violet-300/10" to="/signin">
            Sign In
          </Link>
          <GradientButton className="glow-ring" to="/dashboard">
            Start Free
          </GradientButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex rounded-lg p-2 text-violet-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="space-y-4 border-t border-violet-200/10 bg-[#0d0922] px-4 py-4 sm:px-6 md:hidden">
          {publicNav.map((item) => (
            <NavLink className="block text-sm font-semibold text-violet-100/70" key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
          <GradientButton className="w-full glow-ring" to="/dashboard">
            Launch Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </GradientButton>
        </div>
      )}
    </header>
  )
}

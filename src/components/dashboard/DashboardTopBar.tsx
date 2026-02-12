import { Bell, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export const DashboardTopBar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-violet-300/10 bg-[#0d0922]/95 px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-100/45">Student Workspace</p>
          <h1 className="truncate font-display text-base font-bold text-white sm:text-xl">Welcome back, Alex</h1>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-xl border border-violet-300/15 bg-violet-300/5 px-3 py-2 text-sm text-violet-100/65 md:flex">
            <Search className="h-4 w-4" />
            <input className="w-44 border-none bg-transparent text-violet-50 outline-none" placeholder="Search courses" type="text" />
          </label>
          <button className="rounded-xl border border-violet-300/15 bg-violet-300/5 p-2 text-violet-100/75" type="button">
            <Bell className="h-5 w-5" />
          </button>
          <Link className="flex items-center gap-2 rounded-xl border border-violet-300/20 bg-violet-300/8 px-2 py-2 transition hover:border-violet-200/40 sm:gap-3 sm:px-3" to="/dashboard/profile">
            <div className="h-8 w-8 rounded-full bg-brand-gradient" />
            <p className="hidden text-sm font-semibold text-violet-50 sm:block">Alex D.</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

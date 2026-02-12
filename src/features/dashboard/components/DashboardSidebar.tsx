import {
  BarChart3,
  BookOpen,
  Bot,
  CalendarClock,
  ChartColumn,
  CreditCard,
  FileCheck2,
  LayoutDashboard,
  Layers,
  MessageSquareText,
  Settings2,
  UserRound,
  Sparkles,
  Users,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/courses', label: 'Courses', icon: BookOpen },
  { to: '/dashboard/flashcards', label: 'Flashcards', icon: Layers },
  { to: '/dashboard/quizzes', label: 'Quizzes', icon: Sparkles },
  { to: '/dashboard/planner', label: 'Planner', icon: CalendarClock },
  { to: '/dashboard/assignments', label: 'Assignments', icon: FileCheck2 },
  { to: '/dashboard/study-room', label: 'Study Room', icon: Users },
  { to: '/dashboard/messages', label: 'Messages', icon: MessageSquareText },
  { to: '/dashboard/analytics', label: 'Analytics', icon: ChartColumn },
  { to: '/dashboard/billing', label: 'Billing', icon: CreditCard },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings2 },
  { to: '/dashboard/profile', label: 'Profile', icon: UserRound },
]

export const DashboardSidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-dvh w-72 flex-col overflow-y-auto border-r border-violet-300/10 bg-[#0b081d] px-4 py-6 lg:flex">
      <div className="mb-8 px-2">
        <p className="font-display text-2xl font-bold text-white">
          Student<span className="gradient-text">-IA</span>
        </p>
        <p className="mt-1 text-sm text-violet-100/60">AI-powered study hub</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'bg-brand-gradient text-white glow-ring'
                  : 'text-violet-100/70 hover:bg-violet-300/10 hover:text-violet-100'
              }`
            }
            key={item.to}
            to={item.to}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-violet-300/20 bg-violet-300/8 p-4">
        <div className="mb-2 inline-flex rounded-lg bg-violet-300/15 p-2 text-violet-100">
          <Bot className="h-4 w-4" />
        </div>
        <p className="text-sm font-bold text-white">AI Tutor Online</p>
        <p className="mt-1 text-xs text-violet-100/70">Ask your coach for targeted revision plans in one click.</p>
        <button className="mt-3 w-full rounded-lg bg-brand-gradient px-3 py-2 text-sm font-semibold text-white glow-ring" type="button">
          Open Tutor
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-violet-300/15 bg-violet-300/5 p-3 text-xs text-violet-100/80">
        <BarChart3 className="h-4 w-4" />
        87% weekly performance
      </div>
    </aside>
  )
}


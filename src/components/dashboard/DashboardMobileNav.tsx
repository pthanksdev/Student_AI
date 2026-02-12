import { LayoutDashboard, Layers, MessageSquareText, NotebookPen, Settings2, UserRound, Wallet } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { to: '/dashboard/courses', label: 'Courses', icon: NotebookPen },
  { to: '/dashboard/flashcards', label: 'Cards', icon: Layers },
  { to: '/dashboard/planner', label: 'Planner', icon: NotebookPen },
  { to: '/dashboard/messages', label: 'Messages', icon: MessageSquareText },
  { to: '/dashboard/billing', label: 'Billing', icon: Wallet },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings2 },
  { to: '/dashboard/profile', label: 'Profile', icon: UserRound },
]

export const DashboardMobileNav = () => (
  <nav className="no-scrollbar sticky top-[68px] z-10 flex gap-2 overflow-x-auto border-b border-violet-300/10 bg-[#0d0922]/95 px-4 py-2 sm:top-[76px] sm:py-3 lg:hidden">
    {items.map((item) => (
      <NavLink
        className={({ isActive }) =>
          `inline-flex min-w-max items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${
            isActive ? 'bg-brand-gradient text-white glow-ring' : 'bg-violet-300/10 text-violet-100/75'
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
)


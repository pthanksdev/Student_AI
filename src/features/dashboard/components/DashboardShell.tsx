import type { ReactNode } from 'react'
import { DashboardMobileNav } from './DashboardMobileNav'
import { DashboardSidebar } from './DashboardSidebar'
import { DashboardTopBar } from './DashboardTopBar'

type DashboardShellProps = {
  children: ReactNode
}

export const DashboardShell = ({ children }: DashboardShellProps) => (
  <div className="min-h-screen bg-[#080516] text-violet-50 lg:flex">
    <DashboardSidebar />
    <div className="dark-grid flex-1">
      <DashboardTopBar />
      <DashboardMobileNav />
      <main className="px-4 py-5 pb-8 sm:px-5 sm:py-6 sm:pb-10 lg:px-8">{children}</main>
    </div>
  </div>
)

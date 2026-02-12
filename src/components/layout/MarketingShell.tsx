import type { ReactNode } from 'react'
import { LandingNav } from '../landing/LandingNav'
import { PublicFooter } from './PublicFooter'

type MarketingShellProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export const MarketingShell = ({ title, subtitle, children }: MarketingShellProps) => (
  <div className="dark-grid min-h-screen text-violet-50">
    <LandingNav />
    <main className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/70">Student-IA</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-violet-100/75">{subtitle}</p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl">{children}</section>
    </main>
    <PublicFooter />
  </div>
)

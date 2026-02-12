import type { ReactNode } from 'react'

type MarketingCardProps = {
  title: string
  description?: string
  icon?: ReactNode
  soft?: boolean
  children?: ReactNode
  className?: string
}

export const MarketingCard = ({ title, description, icon, soft = false, children, className = '' }: MarketingCardProps) => (
  <article className={`${soft ? 'dark-card-soft' : 'dark-card'} rounded-2xl p-6 ${className}`}>
    {icon ? <div className="mb-4 inline-flex rounded-xl bg-violet-300/15 p-3 text-violet-100">{icon}</div> : null}
    <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
    {description ? <p className="mt-2 text-violet-100/70">{description}</p> : null}
    {children}
  </article>
)

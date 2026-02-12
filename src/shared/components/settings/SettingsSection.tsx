import type { ReactNode } from 'react'

type SettingsSectionProps = {
  title: string
  subtitle?: string
  children: ReactNode
  soft?: boolean
}

export const SettingsSection = ({ title, subtitle, children, soft = false }: SettingsSectionProps) => (
  <article className={`${soft ? 'dark-card-soft' : 'dark-card'} rounded-2xl p-6`}>
    <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
    {subtitle ? <p className="mt-1 text-sm text-violet-100/65">{subtitle}</p> : null}
    <div className="mt-4">{children}</div>
  </article>
)

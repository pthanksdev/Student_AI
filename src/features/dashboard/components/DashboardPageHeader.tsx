type DashboardPageHeaderProps = {
  label: string
  title: string
  description?: string
}

export const DashboardPageHeader = ({ label, title, description }: DashboardPageHeaderProps) => (
  <section className="mb-6">
    <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">{label}</p>
    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
    {description ? <p className="mt-2 text-violet-100/70">{description}</p> : null}
  </section>
)

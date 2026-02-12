type SectionHeadingProps = {
  badge: string
  title: string
  subtitle: string
  centered?: boolean
}

export const SectionHeading = ({ badge, title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    <p className="mb-3 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
      {badge}
    </p>
    <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
    <p className="mt-4 text-base text-slate-600 md:text-lg">{subtitle}</p>
  </div>
)

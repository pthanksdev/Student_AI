import { MarketingShell } from '../components/layout/MarketingShell'
import { featureCards } from '../data/mockData'

export const FeaturesPage = () => (
  <MarketingShell
    subtitle="Explore the full AI toolkit powering smarter prep, faster retention, and stronger exam outcomes."
    title="Platform Features"
  >
    <div className="grid gap-5 md:grid-cols-2">
      {featureCards.map((feature) => (
        <article className="dark-card rounded-2xl p-6" key={feature.title}>
          <div className="mb-4 inline-flex rounded-xl bg-violet-300/15 p-3 text-violet-100">
            <feature.icon className="h-5 w-5" />
          </div>
          <h2 className="font-display text-xl font-semibold text-white">{feature.title}</h2>
          <p className="mt-2 text-violet-100/70">{feature.description}</p>
        </article>
      ))}
    </div>
  </MarketingShell>
)

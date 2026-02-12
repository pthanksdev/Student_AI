import { MarketingCard } from '../components/marketing/MarketingCard'
import { MarketingShell } from '../components/layout/MarketingShell'
import { featureCards } from '../data/mockData'

export const FeaturesPage = () => (
  <MarketingShell
    subtitle="Explore the full AI toolkit powering smarter prep, faster retention, and stronger exam outcomes."
    title="Platform Features"
  >
    <div className="grid gap-5 md:grid-cols-2">
      {featureCards.map((feature) => (
        <MarketingCard
          description={feature.description}
          icon={<feature.icon className="h-5 w-5" />}
          key={feature.title}
          title={feature.title}
        />
      ))}
    </div>
  </MarketingShell>
)

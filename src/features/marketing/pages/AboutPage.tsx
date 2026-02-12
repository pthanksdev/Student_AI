import { MarketingCard } from '@shared/components/marketing/MarketingCard'
import { MarketingShell } from '@shared/components/layout/MarketingShell'

export const AboutPage = () => (
  <MarketingShell
    subtitle="Student-IA was built to make high-quality study support accessible to every learner."
    title="About Student-IA"
  >
    <div className="grid gap-6 lg:grid-cols-3">
      <MarketingCard
        className="lg:col-span-2"
        description="We combine pedagogy and AI to help students spend less time guessing what to study and more time mastering what matters. From daily revision to final prep, Student-IA is designed to support consistent performance improvements."
        title="Our mission"
      />
      <MarketingCard soft title="By the numbers">
        <ul className="mt-3 space-y-3 text-violet-100/75">
          <li>12,000+ active learners</li>
          <li>200+ partner campuses</li>
          <li>4.9/5 average rating</li>
        </ul>
      </MarketingCard>
    </div>
  </MarketingShell>
)


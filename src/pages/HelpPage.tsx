import { MarketingShell } from '../components/layout/MarketingShell'

export const HelpPage = () => (
  <MarketingShell subtitle="Find setup guides, troubleshooting steps, and onboarding resources." title="Help Center">
    <div className="grid gap-5 md:grid-cols-2">
      {['Getting started', 'Account setup', 'Billing support', 'Team management'].map((topic) => (
        <article className="dark-card rounded-2xl p-6" key={topic}>
          <h2 className="font-display text-xl font-semibold text-white">{topic}</h2>
          <p className="mt-2 text-violet-100/70">Step-by-step documentation and quick actions for {topic.toLowerCase()}.</p>
        </article>
      ))}
    </div>
  </MarketingShell>
)

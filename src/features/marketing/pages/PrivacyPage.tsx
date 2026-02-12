import { MarketingShell } from '@shared/components/layout/MarketingShell'

export const PrivacyPage = () => (
  <MarketingShell subtitle="How we collect, use, and protect your data across the Student-IA platform." title="Privacy Policy">
    <article className="dark-card rounded-2xl p-6 text-violet-100/75">
      <h2 className="font-display text-xl font-semibold text-white">Data usage</h2>
      <p className="mt-2">We use your study activity to personalize recommendations, improve model responses, and surface progress insights.</p>
      <h2 className="mt-5 font-display text-xl font-semibold text-white">Security</h2>
      <p className="mt-2">All account data is encrypted in transit and at rest. Access controls are applied to protect user workspaces.</p>
      <h2 className="mt-5 font-display text-xl font-semibold text-white">Controls</h2>
      <p className="mt-2">You can export, manage, and delete your account data from dashboard settings.</p>
    </article>
  </MarketingShell>
)


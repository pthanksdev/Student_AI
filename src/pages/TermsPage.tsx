import { MarketingShell } from '../components/layout/MarketingShell'

export const TermsPage = () => (
  <MarketingShell subtitle="Terms governing your use of Student-IA services, plans, and team features." title="Terms of Service">
    <article className="dark-card rounded-2xl p-6 text-violet-100/75">
      <h2 className="font-display text-xl font-semibold text-white">Account responsibilities</h2>
      <p className="mt-2">Users are responsible for maintaining account security and for all activity under their credentials.</p>
      <h2 className="mt-5 font-display text-xl font-semibold text-white">Acceptable use</h2>
      <p className="mt-2">Do not upload unlawful content or attempt to misuse platform systems.</p>
      <h2 className="mt-5 font-display text-xl font-semibold text-white">Billing and renewals</h2>
      <p className="mt-2">Paid plans renew automatically unless canceled before the next billing cycle.</p>
    </article>
  </MarketingShell>
)

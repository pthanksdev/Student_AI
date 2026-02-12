import { CreditCard, ReceiptText } from 'lucide-react'
import { DashboardShell } from '../components/dashboard/DashboardShell'

export const BillingPage = () => (
  <DashboardShell>
    <section className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Billing</p>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Plan & Invoices</h2>
    </section>

    <div className="grid gap-6 lg:grid-cols-2">
      <article className="dark-card rounded-2xl p-6">
        <p className="text-sm text-violet-100/65">Current plan</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">Pro - $19/month</h3>
        <p className="mt-2 text-violet-100/70">Next renewal: March 14</p>
        <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white" type="button">
          <CreditCard className="h-4 w-4" />
          Manage payment method
        </button>
      </article>
      <article className="dark-card-soft rounded-2xl p-6">
        <h3 className="font-display text-xl font-semibold text-white">Recent invoices</h3>
        <ul className="mt-4 space-y-3 text-violet-100/75">
          <li className="inline-flex items-center gap-2"><ReceiptText className="h-4 w-4" /> Feb 2026 - Paid</li>
          <li className="inline-flex items-center gap-2"><ReceiptText className="h-4 w-4" /> Jan 2026 - Paid</li>
          <li className="inline-flex items-center gap-2"><ReceiptText className="h-4 w-4" /> Dec 2025 - Paid</li>
        </ul>
      </article>
    </div>
  </DashboardShell>
)

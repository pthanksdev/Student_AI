import { Mail, MapPin, Phone } from 'lucide-react'
import { MarketingShell } from '@shared/components/layout/MarketingShell'

export const ContactPage = () => (
  <MarketingShell subtitle="Talk to sales, support, or partnerships. We usually reply within one business day." title="Contact Us">
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="dark-card rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-white">Send a message</h2>
        <form className="mt-4 space-y-3">
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" placeholder="Name" />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" placeholder="Email" />
          <textarea className="h-28 w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" placeholder="Message" />
          <button className="rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-white" type="button">Submit</button>
        </form>
      </article>
      <article className="dark-card-soft rounded-2xl p-6">
        <h3 className="font-display text-xl font-semibold text-white">Reach us directly</h3>
        <ul className="mt-4 space-y-3 text-violet-100/75">
          <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@student-ia.ai</li>
          <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (415) 555-0142</li>
          <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> San Francisco, CA</li>
        </ul>
      </article>
    </div>
  </MarketingShell>
)


import { DashboardShell } from '../components/dashboard/DashboardShell'

export const SettingsPage = () => (
  <DashboardShell>
    <section className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Settings</p>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Account Settings</h2>
    </section>

    <div className="grid gap-6 lg:grid-cols-2">
      <article className="dark-card rounded-2xl p-6">
        <h3 className="font-display text-xl font-semibold text-white">Profile</h3>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" placeholder="Full name" />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" placeholder="Email" />
          <button className="rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white" type="button">Save profile</button>
        </div>
      </article>
      <article className="dark-card-soft rounded-2xl p-6">
        <h3 className="font-display text-xl font-semibold text-white">Preferences</h3>
        <div className="mt-4 space-y-3 text-sm text-violet-100/80">
          <label className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3">
            Study reminders
            <input type="checkbox" defaultChecked />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3">
            Weekly summary emails
            <input type="checkbox" defaultChecked />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3">
            AI suggestion popups
            <input type="checkbox" />
          </label>
        </div>
      </article>
    </div>
  </DashboardShell>
)

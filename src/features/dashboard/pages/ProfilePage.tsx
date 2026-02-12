import {
  BadgeCheck,
  Bell,
  BookOpen,
  CalendarClock,
  CreditCard,
  Globe,
  KeyRound,
  Link2,
  Lock,
  Save,
  ShieldCheck,
  Target,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'
import {
  connectedServices,
  profileAchievements,
  profileGoals,
  profileOverview,
  securitySessions,
} from '@shared/data/mockData'

export const ProfilePage = () => (
  <DashboardShell>
    <section className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Profile</p>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{profileOverview.name}</h2>
        <p className="mt-1 text-sm text-violet-100/70">{profileOverview.bio}</p>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-violet-300/20 bg-violet-300/8 px-3 py-2">
        <img alt={`${profileOverview.name} avatar`} className="h-10 w-10 rounded-full border border-violet-300/20 object-cover" src={profileOverview.avatarUrl} />
        <div>
          <p className="text-sm font-semibold text-white">{profileOverview.handle}</p>
          <p className="text-xs text-violet-100/60">{profileOverview.email}</p>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {[
        { label: 'Streak', value: `${profileOverview.streak} days`, icon: CalendarClock },
        { label: 'Weekly Hours', value: `${profileOverview.weeklyHours}h`, icon: BookOpen },
        { label: 'Completion', value: `${profileOverview.completionRate}%`, icon: Target },
        { label: 'Security', value: '2FA Enabled', icon: ShieldCheck },
      ].map((item) => (
        <article className="dark-card-soft rounded-2xl p-4" key={item.label}>
          <item.icon className="h-4 w-4 text-violet-100" />
          <p className="mt-2 text-sm text-violet-100/65">{item.label}</p>
          <p className="mt-1 text-lg font-bold text-white">{item.value}</p>
        </article>
      ))}
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-3">
      <article className="dark-card rounded-2xl p-5 xl:col-span-2">
        <h3 className="font-display text-xl font-semibold text-white">Account Information</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue={profileOverview.name} />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue={profileOverview.email} />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue={profileOverview.school} />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue={profileOverview.major} />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue={profileOverview.year} />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue={profileOverview.timezone} />
        </div>
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white" type="button">
          <Save className="h-4 w-4" />
          Save Profile
        </button>
      </article>

      <article className="dark-card-soft rounded-2xl p-5">
        <h3 className="font-display text-xl font-semibold text-white">Preferences</h3>
        <div className="mt-4 space-y-3 text-sm text-violet-100/80">
          {[
            'Daily study reminder',
            'Weekly performance email',
            'Deadline risk alerts',
            'AI coach nudges',
          ].map((label) => (
            <label className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3" key={label}>
              {label}
              <input defaultChecked={label !== 'AI coach nudges'} type="checkbox" />
            </label>
          ))}
        </div>
      </article>
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-3">
      <article className="dark-card rounded-2xl p-5">
        <h3 className="font-display text-xl font-semibold text-white">Goals</h3>
        <div className="mt-4 space-y-3">
          {profileGoals.map((goal) => (
            <div className="rounded-xl border border-violet-300/15 p-3" key={goal.title}>
              <p className="font-semibold text-violet-50">{goal.title}</p>
              <p className="mt-1 text-xs text-violet-100/65">{goal.current} / {goal.target} • Due {goal.deadline}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="dark-card rounded-2xl p-5">
        <h3 className="font-display text-xl font-semibold text-white">Achievements</h3>
        <div className="mt-4 space-y-3">
          {profileAchievements.map((badge) => (
            <div className="rounded-xl border border-violet-300/15 p-3" key={badge.title}>
              <p className="inline-flex items-center gap-2 font-semibold text-violet-50">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                {badge.title}
              </p>
              <p className="mt-1 text-xs text-violet-100/65">{badge.description}</p>
              <p className="mt-1 text-xs text-violet-200/80">{badge.unlocked}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="dark-card rounded-2xl p-5">
        <h3 className="font-display text-xl font-semibold text-white">Connected Apps</h3>
        <div className="mt-4 space-y-3">
          {connectedServices.map((service) => (
            <div className="rounded-xl border border-violet-300/15 p-3" key={service.name}>
              <p className="inline-flex items-center gap-2 font-semibold text-violet-50">
                <Link2 className="h-4 w-4" />
                {service.name}
              </p>
              <p className="mt-1 text-xs text-violet-100/65">Status: {service.status}</p>
              <p className="text-xs text-violet-200/80">Last sync: {service.lastSync}</p>
            </div>
          ))}
        </div>
      </article>
    </section>

    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <article className="dark-card rounded-2xl p-5">
        <h3 className="font-display text-xl font-semibold text-white">Security</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-violet-300/20 px-3 py-2 text-sm text-violet-100/85" type="button">
            <KeyRound className="h-4 w-4" />
            Change Password
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-violet-300/20 px-3 py-2 text-sm text-violet-100/85" type="button">
            <Lock className="h-4 w-4" />
            Manage 2FA
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {securitySessions.map((session) => (
            <div className="rounded-xl border border-violet-300/15 p-3" key={`${session.device}-${session.lastActive}`}>
              <p className="inline-flex items-center gap-2 font-semibold text-violet-50">
                <UserRound className="h-4 w-4" />
                {session.device}
                {session.current ? <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Current</span> : null}
              </p>
              <p className="mt-1 text-xs text-violet-100/65">{session.location} • {session.lastActive}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="dark-card-soft rounded-2xl p-5">
        <h3 className="font-display text-xl font-semibold text-white">Account Tools</h3>
        <div className="mt-4 space-y-3">
          <Link className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3 text-violet-100/85" to="/dashboard/settings">
            <span className="inline-flex items-center gap-2"><Bell className="h-4 w-4" /> Notification Settings</span>
            <span className="text-xs text-violet-200/80">Open</span>
          </Link>
          <Link className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3 text-violet-100/85" to="/dashboard/billing">
            <span className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4" /> Billing and Plan</span>
            <span className="text-xs text-violet-200/80">Open</span>
          </Link>
          <button className="flex w-full items-center justify-between rounded-xl border border-violet-300/15 p-3 text-violet-100/85" type="button">
            <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4" /> Export Learning Data</span>
            <span className="text-xs text-violet-200/80">CSV</span>
          </button>
        </div>
      </article>
    </section>
  </DashboardShell>
)



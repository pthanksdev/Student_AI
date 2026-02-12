import {
  Bell,
  Clock3,
  Download,
  Globe,
  KeyRound,
  Lock,
  Mail,
  Save,
  Shield,
  Smartphone,
  Trash2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'
import { SettingsSection } from '@shared/components/settings/SettingsSection'
import { SettingsToggleRow } from '@shared/components/settings/SettingsToggleRow'

export const SettingsPage = () => (
  <DashboardShell>
    <DashboardPageHeader
      description="Manage account details, alerts, study preferences, privacy, and security from one place."
      label="Settings"
      title="Account Settings"
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <SettingsSection subtitle="Personal and academic identity used across your dashboard." title="Profile">
        <div className="space-y-3">
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue="Alex D." placeholder="Full name" />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue="alex.d@studentia.app" placeholder="Email" />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue="Westbridge University" placeholder="School" />
          <input className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50" defaultValue="Computer Science" placeholder="Major" />
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white" type="button">
            <Save className="h-4 w-4" />
            Save profile
          </button>
        </div>
      </SettingsSection>

      <SettingsSection soft subtitle="Control reminders, digests, and in-app alerts." title="Notifications">
        <div className="space-y-3 text-sm text-violet-100/80">
          <SettingsToggleRow defaultChecked description="Daily reminder at your preferred study hour." label="Study reminders" />
          <SettingsToggleRow defaultChecked description="Weekly summary of progress and weak topics." label="Weekly summary emails" />
          <SettingsToggleRow description="Prompt recommendations while browsing dashboard pages." label="AI suggestion popups" />
          <SettingsToggleRow defaultChecked description="Send due-date alerts for upcoming assignments." label="Deadline alerts" />
        </div>
      </SettingsSection>
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <SettingsSection subtitle="Tune your study flow and plan behavior." title="Study Preferences">
        <div className="space-y-3 text-sm text-violet-100/80">
          <SettingsToggleRow defaultChecked description="Auto-generate a 7-day plan every Monday." label="Auto weekly plan" />
          <SettingsToggleRow defaultChecked description="Include review sessions based on memory decay." label="Spaced repetition mode" />
          <SettingsToggleRow description="Prefer quiz generation before flashcards." label="Quiz-first workflow" />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="rounded-xl border border-violet-300/15 p-3 text-sm text-violet-100/80">
            Study start time
            <input className="mt-2 w-full rounded-lg border border-violet-300/20 bg-violet-300/5 px-3 py-2 text-violet-50" defaultValue="18:30" type="time" />
          </label>
          <label className="rounded-xl border border-violet-300/15 p-3 text-sm text-violet-100/80">
            Focus block length
            <select className="mt-2 w-full rounded-lg border border-violet-300/20 bg-violet-300/5 px-3 py-2 text-violet-50" defaultValue="25">
              <option value="25">25 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
            </select>
          </label>
        </div>
      </SettingsSection>

      <SettingsSection soft subtitle="Keep your account protected and session access under control." title="Security">
        <div className="grid gap-3 sm:grid-cols-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-violet-300/20 px-4 py-3 text-sm font-semibold text-violet-100/85" type="button">
            <KeyRound className="h-4 w-4" />
            Change password
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-violet-300/20 px-4 py-3 text-sm font-semibold text-violet-100/85" type="button">
            <Lock className="h-4 w-4" />
            Manage 2FA
          </button>
        </div>
        <div className="mt-4 rounded-xl border border-violet-300/15 p-3 text-sm text-violet-100/75">
          <p className="inline-flex items-center gap-2 font-semibold text-violet-100">
            <Shield className="h-4 w-4" />
            Active sessions
          </p>
          <p className="mt-2">Chrome on Windows • New York • Current session</p>
          <p>Safari on iPhone • New York • Last active 2h ago</p>
          <button className="mt-3 rounded-lg border border-violet-300/20 px-3 py-2 text-xs font-semibold text-violet-100/80" type="button">
            Sign out all other sessions
          </button>
        </div>
      </SettingsSection>
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <SettingsSection subtitle="Control integrations and connected channels." title="Connected Channels">
        <div className="space-y-3">
          {[
            { label: 'Email', icon: Mail, status: 'Connected' },
            { label: 'Push Notifications', icon: Smartphone, status: 'Connected' },
            { label: 'Google Calendar', icon: Clock3, status: 'Connected' },
            { label: 'Regional Format', icon: Globe, status: 'English (US)' },
          ].map((item) => (
            <div className="flex items-center justify-between rounded-xl border border-violet-300/15 p-3" key={item.label}>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-violet-100">
                <item.icon className="h-4 w-4" />
                {item.label}
              </p>
              <span className="text-xs text-violet-200/80">{item.status}</span>
            </div>
          ))}
        </div>
      </SettingsSection>

      <SettingsSection soft subtitle="Export records, manage plan, and remove account data." title="Data and Account">
        <div className="space-y-3">
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-violet-300/20 px-4 py-3 text-sm font-semibold text-violet-100/85" type="button">
            <Download className="h-4 w-4" />
            Export study data (CSV)
          </button>
          <Link className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-violet-300/20 px-4 py-3 text-sm font-semibold text-violet-100/85" to="/dashboard/billing">
            <Bell className="h-4 w-4" />
            Manage subscription
          </Link>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-500/30 px-4 py-3 text-sm font-semibold text-rose-300" type="button">
            <Trash2 className="h-4 w-4" />
            Delete account
          </button>
        </div>
      </SettingsSection>
    </div>
  </DashboardShell>
)


import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'

const threads = [
  { from: 'AI Tutor', preview: 'I generated your 20-minute revision plan.', time: 'Now' },
  { from: 'Maya Lin', preview: 'Can we review chapter 5 tonight?', time: '1h ago' },
  { from: 'Course Mentor', preview: 'Your quiz accuracy improved this week.', time: 'Yesterday' },
]

export const MessagesPage = () => (
  <DashboardShell>
    <DashboardPageHeader label="Messages" title="Inbox" />
    <div className="space-y-4">
      {threads.map((thread) => (
        <article className="dark-card rounded-2xl p-5" key={thread.from + thread.time}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{thread.from}</h3>
              <p className="mt-1 text-sm text-violet-100/70">{thread.preview}</p>
            </div>
            <p className="text-xs text-violet-200/80">{thread.time}</p>
          </div>
        </article>
      ))}
    </div>
  </DashboardShell>
)


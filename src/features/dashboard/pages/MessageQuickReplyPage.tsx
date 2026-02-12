import { ArrowLeft, Sparkles } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'
import { messageThreads } from '@shared/data/mockData'

const quickTemplates = [
  'Thanks for the update. I will complete this by tonight and share progress.',
  'Can we move this to tomorrow? I need 24 hours to finish the revision.',
  'Please send the checklist version so I can follow a step-by-step flow.',
]

export const MessageQuickReplyPage = () => {
  const { threadId } = useParams<{ threadId: string }>()
  const thread = messageThreads.find((item) => item.id === threadId)

  if (!thread) return <Navigate replace to="/dashboard/messages" />

  return (
    <DashboardShell>
      <DashboardPageHeader
        description={`Send a quick response to ${thread.from} without opening full chat.`}
        label="Messages"
        title="Quick Reply"
      />

      <div className="mb-4">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-violet-200" to="/dashboard/messages">
          <ArrowLeft className="h-4 w-4" />
          Back to Inbox
        </Link>
      </div>

      <article className="dark-card rounded-2xl p-5">
        <p className="text-sm text-violet-100/70">Replying to</p>
        <div className="mt-2 flex items-center gap-3">
          <img alt={`${thread.from} avatar`} className="h-10 w-10 rounded-full border border-violet-300/20 object-cover" src={thread.avatarUrl} />
          <div>
            <p className="font-semibold text-white">{thread.from}</p>
            <p className="text-xs text-violet-100/65">{thread.channel}</p>
          </div>
        </div>

        <label className="mt-5 block text-sm text-violet-100/70">
          Message
          <textarea
            className="mt-2 h-36 w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50"
            defaultValue={quickTemplates[0]}
          />
        </label>

        <div className="mt-4">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-violet-100/50">Templates</p>
          <div className="space-y-2">
            {quickTemplates.map((template) => (
              <button
                className="w-full rounded-xl border border-violet-300/15 p-3 text-left text-sm text-violet-100/85"
                key={template}
                type="button"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white" type="button">
            <Sparkles className="h-4 w-4" />
            Send Quick Reply
          </button>
          <Link className="inline-flex items-center rounded-xl border border-violet-300/20 px-4 py-3 text-sm font-semibold text-violet-100/85" to={`/dashboard/messages/thread/${thread.id}`}>
            Open Full Thread
          </Link>
        </div>
      </article>
    </DashboardShell>
  )
}

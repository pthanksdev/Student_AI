import { ArrowLeft, SendHorizonal } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'
import { messageThreads } from '@shared/data/mockData'

export const MessageThreadPage = () => {
  const { threadId } = useParams<{ threadId: string }>()
  const thread = messageThreads.find((item) => item.id === threadId)

  if (!thread) return <Navigate replace to="/dashboard/messages" />

  return (
    <DashboardShell>
      <DashboardPageHeader
        description={`Channel: ${thread.channel} • Priority: ${thread.priority}`}
        label="Messages"
        title={`Thread with ${thread.from}`}
      />

      <div className="mb-4">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-violet-200" to="/dashboard/messages">
          <ArrowLeft className="h-4 w-4" />
          Back to Inbox
        </Link>
      </div>

      <article className="dark-card rounded-2xl p-5">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <img alt={`${thread.from} avatar`} className="h-10 w-10 rounded-full border border-violet-300/20 object-cover" src={thread.avatarUrl} />
            <div className="max-w-2xl rounded-2xl bg-violet-300/10 p-3">
              <p className="text-sm font-semibold text-violet-100">{thread.from}</p>
              <p className="mt-1 text-sm text-violet-100/80">{thread.preview}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-2xl rounded-2xl bg-brand-gradient/30 p-3 text-sm text-white/90">
              Thanks. I will review this now and follow up with my results.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img alt={`${thread.from} avatar`} className="h-10 w-10 rounded-full border border-violet-300/20 object-cover" src={thread.avatarUrl} />
            <div className="max-w-2xl rounded-2xl bg-violet-300/10 p-3 text-sm text-violet-100/85">
              Great. I can also generate a short checklist if you want a guided flow.
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50"
            placeholder="Write a message..."
            type="text"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white" type="button">
            <SendHorizonal className="h-4 w-4" />
            Send
          </button>
        </div>
      </article>
    </DashboardShell>
  )
}

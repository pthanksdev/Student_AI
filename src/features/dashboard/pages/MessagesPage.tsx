import { CircleDot, MessageCircleMore, SendHorizonal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'
import { messageThreads } from '@shared/data/mockData'

export const MessagesPage = () => {
  const unreadCount = messageThreads.filter((thread) => thread.unread).length

  return (
    <DashboardShell>
      <DashboardPageHeader
        description={`${unreadCount} unread conversation${unreadCount === 1 ? '' : 's'} waiting for your response.`}
        label="Messages"
        title="Inbox"
      />

      <section className="mb-5 grid gap-4 sm:grid-cols-3">
        <article className="dark-card-soft rounded-2xl p-4">
          <p className="text-sm text-violet-100/65">Unread</p>
          <p className="mt-1 text-xl font-bold text-white">{unreadCount}</p>
        </article>
        <article className="dark-card-soft rounded-2xl p-4">
          <p className="text-sm text-violet-100/65">Mentions</p>
          <p className="mt-1 text-xl font-bold text-white">2</p>
        </article>
        <article className="dark-card-soft rounded-2xl p-4">
          <p className="text-sm text-violet-100/65">Response Time</p>
          <p className="mt-1 text-xl font-bold text-white">14m avg</p>
        </article>
      </section>

      <div className="space-y-4">
        {messageThreads.map((thread) => (
          <article className="dark-card rounded-2xl p-5" key={`${thread.from}-${thread.time}-${thread.preview}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <img alt={`${thread.from} avatar`} className="h-10 w-10 rounded-full border border-violet-300/20 object-cover" src={thread.avatarUrl} />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">{thread.from}</h3>
                    <span className="rounded-lg bg-violet-300/12 px-2 py-0.5 text-xs font-semibold text-violet-100">{thread.channel}</span>
                    {thread.priority === 'High' ? (
                      <span className="rounded-lg bg-rose-500/20 px-2 py-0.5 text-xs font-semibold text-rose-300">High priority</span>
                    ) : null}
                    {thread.unread ? (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                        <CircleDot className="h-3 w-3" />
                        Unread
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 max-w-3xl text-sm text-violet-100/75">{thread.preview}</p>
                </div>
              </div>
              <p className="text-xs text-violet-200/80">{thread.time}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                className="inline-flex items-center gap-2 rounded-lg border border-violet-300/20 px-3 py-2 text-sm font-semibold text-violet-100/85"
                to={`/dashboard/messages/thread/${thread.id}`}
              >
                <MessageCircleMore className="h-4 w-4" />
                Open Thread
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-3 py-2 text-sm font-semibold text-white"
                to={`/dashboard/messages/quick-reply/${thread.id}`}
              >
                <SendHorizonal className="h-4 w-4" />
                Quick Reply
              </Link>
            </div>
          </article>
        ))}
      </div>
    </DashboardShell>
  )
}

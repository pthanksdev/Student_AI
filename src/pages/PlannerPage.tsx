import { CalendarClock, CheckCircle2 } from 'lucide-react'
import { DashboardShell } from '../components/dashboard/DashboardShell'

const tasks = [
  { title: 'Biology review sprint', time: 'Today, 5:00 PM', status: 'Scheduled' },
  { title: 'Math flashcard session', time: 'Tomorrow, 8:00 AM', status: 'Scheduled' },
  { title: 'History quiz block', time: 'Friday, 6:30 PM', status: 'Pending' },
]

export const PlannerPage = () => (
  <DashboardShell>
    <section className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Planner</p>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Study Planner</h2>
    </section>
    <div className="space-y-4">
      {tasks.map((task) => (
        <article className="dark-card rounded-2xl p-5" key={task.title}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{task.title}</h3>
              <p className="mt-1 inline-flex items-center gap-2 text-sm text-violet-100/70">
                <CalendarClock className="h-4 w-4" />
                {task.time}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100">
              <CheckCircle2 className="h-4 w-4" />
              {task.status}
            </span>
          </div>
        </article>
      ))}
    </div>
  </DashboardShell>
)

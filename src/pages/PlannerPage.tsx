import { useState } from 'react'
import { CalendarClock, CheckCircle2 } from 'lucide-react'
import { DashboardDetailModal } from '../components/dashboard/DashboardDetailModal'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { plannerTasks } from '../data/mockData'
import type { PlannerTask } from '../types'

export const PlannerPage = () => {
  const [selectedTask, setSelectedTask] = useState<PlannerTask | null>(null)

  return (
    <DashboardShell>
      <section className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Planner</p>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Study Planner</h2>
      </section>
      <div className="space-y-4">
        {plannerTasks.map((task) => (
          <article
            className="dark-card cursor-pointer rounded-2xl p-5 transition hover:border-violet-300/30"
            key={`${task.title}-${task.time}`}
            onClick={() => setSelectedTask(task)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setSelectedTask(task)
            }}
            role="button"
            tabIndex={0}
          >
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

      {selectedTask ? (
        <DashboardDetailModal onClose={() => setSelectedTask(null)} title={selectedTask.title}>
          <p>Scheduled time: {selectedTask.time}</p>
          <p>Status: {selectedTask.status}</p>
          <p>Tip: Break this session into 25-minute focus blocks.</p>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}

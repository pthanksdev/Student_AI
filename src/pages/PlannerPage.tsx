import { useState } from 'react'
import { CalendarClock, CheckCircle2 } from 'lucide-react'
import { DashboardDetailModal } from '../components/dashboard/DashboardDetailModal'
import { DashboardPageHeader } from '../components/dashboard/DashboardPageHeader'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { plannerTasks } from '../data/mockData'
import type { PlannerTask } from '../types'

const getPlannerInsight = (task: PlannerTask) => {
  if (task.status === 'Completed') return 'This task is complete. Keep momentum by scheduling a short follow-up review.'
  if (task.status === 'Scheduled') return 'This task is planned and on track. Protect this time block and avoid context switching.'
  return 'This task is pending. Prioritize it early to reduce deadline pressure.'
}

export const PlannerPage = () => {
  const [selectedTask, setSelectedTask] = useState<PlannerTask | null>(null)

  return (
    <DashboardShell>
      <DashboardPageHeader label="Planner" title="Study Planner" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
        <DashboardDetailModal
          actions={[
            { label: 'Start Focus Timer', variant: 'primary' },
            { label: 'Reschedule Task' },
          ]}
          meta={[
            { label: 'Time Slot', value: selectedTask.time },
            { label: 'Status', value: selectedTask.status },
            { label: 'Session Type', value: 'Deep Work' },
            { label: 'Duration', value: '60 min' },
          ]}
          onClose={() => setSelectedTask(null)}
          subtitle="Planner Task Breakdown"
          title={selectedTask.title}
        >
          <p>
            Overview: This study block is set for {selectedTask.time} and is currently marked as {selectedTask.status.toLowerCase()}.
          </p>
          <p>Planner analysis: {getPlannerInsight(selectedTask)}</p>
          <p>
            Suggested next step: Break the session into 25-minute focus intervals and assign a clear success goal for each interval.
          </p>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}

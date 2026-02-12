import { useState } from 'react'
import { DashboardDetailModal } from '../components/dashboard/DashboardDetailModal'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { assignments } from '../data/mockData'
import type { Assignment } from '../types'

export const AssignmentsPage = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)

  return (
    <DashboardShell>
      <section className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Assignments</p>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Assignment Tracker</h2>
      </section>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {assignments.map((item) => (
          <article
            className="dark-card cursor-pointer rounded-2xl p-5 transition hover:border-violet-300/30"
            key={`${item.title}-${item.due}`}
            onClick={() => setSelectedAssignment(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setSelectedAssignment(item)
            }}
            role="button"
            tabIndex={0}
          >
            <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-violet-100/70">Due: {item.due}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-violet-200/80">{item.status}</p>
          </article>
        ))}
      </div>

      {selectedAssignment ? (
        <DashboardDetailModal onClose={() => setSelectedAssignment(null)} title={selectedAssignment.title}>
          <p>Due: {selectedAssignment.due}</p>
          <p>Status: {selectedAssignment.status}</p>
          <p>Tip: Break this assignment into smaller subtasks and time blocks.</p>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}

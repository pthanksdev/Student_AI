import { useState } from 'react'
import { DashboardDetailModal } from '../components/dashboard/DashboardDetailModal'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { assignments } from '../data/mockData'
import type { Assignment } from '../types'

const getAssignmentInsight = (assignment: Assignment) => {
  if (assignment.status === 'Submitted') return 'This assignment is completed. Review feedback once available and note improvement points.'
  if (assignment.status === 'In Progress') return 'Work is underway. Focus on finishing the highest-value section first.'
  return 'This assignment has not been started yet. Begin with outline and resource gathering.'
}

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
        <DashboardDetailModal
          actions={[
            { label: 'Open Assignment', variant: 'primary' },
            { label: 'Mark Next Milestone' },
          ]}
          meta={[
            { label: 'Due Date', value: selectedAssignment.due },
            { label: 'Status', value: selectedAssignment.status },
            { label: 'Priority', value: 'High' },
            { label: 'Estimated Time', value: '90 min' },
          ]}
          onClose={() => setSelectedAssignment(null)}
          subtitle='Assignment Progress Detail'
          title={selectedAssignment.title}
        >
          <p>
            Overview: This assignment is due {selectedAssignment.due} and is currently marked as {selectedAssignment.status.toLowerCase()}.
          </p>
          <p>Progress analysis: {getAssignmentInsight(selectedAssignment)}</p>
          <p>
            Suggested next step: Define the final deliverable, split into subtasks, and complete the first milestone today.
          </p>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}


import { DashboardShell } from '../components/dashboard/DashboardShell'

const items = [
  { title: 'Linear Algebra worksheet', due: 'Tomorrow', status: 'In Progress' },
  { title: 'Biology chapter quiz', due: 'Friday', status: 'Not Started' },
  { title: 'History timeline summary', due: 'Sunday', status: 'Submitted' },
]

export const AssignmentsPage = () => (
  <DashboardShell>
    <section className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Assignments</p>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Assignment Tracker</h2>
    </section>
    <div className="space-y-4">
      {items.map((item) => (
        <article className="dark-card rounded-2xl p-5" key={item.title}>
          <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-violet-100/70">Due: {item.due}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-violet-200/80">{item.status}</p>
        </article>
      ))}
    </div>
  </DashboardShell>
)

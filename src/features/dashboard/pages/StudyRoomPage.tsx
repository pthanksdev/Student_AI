import { Users } from 'lucide-react'
import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'

const rooms = [
  { name: 'Biology Finals Group', members: 8, mode: 'Live now' },
  { name: 'Math Problem Solvers', members: 5, mode: 'Scheduled 7:30 PM' },
  { name: 'History Review Circle', members: 11, mode: 'Weekly Thursday' },
]

export const StudyRoomPage = () => (
  <DashboardShell>
    <DashboardPageHeader label="Study Room" title="Collaborative Sessions" />
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {rooms.map((room) => (
        <article className="dark-card rounded-2xl p-5" key={room.name}>
          <h3 className="font-display text-lg font-semibold text-white">{room.name}</h3>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-violet-100/70">
            <Users className="h-4 w-4" />
            {room.members} members
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-violet-200/80">{room.mode}</p>
          <button className="mt-5 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white" type="button">Join room</button>
        </article>
      ))}
    </div>
  </DashboardShell>
)


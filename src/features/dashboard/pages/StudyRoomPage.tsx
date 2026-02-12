import { useMemo, useState } from 'react'
import { Activity, BookOpen, Clock3, Flame, Users, Video } from 'lucide-react'
import { DashboardDetailModal } from '@features/dashboard/components/DashboardDetailModal'
import { DashboardPageHeader } from '@features/dashboard/components/DashboardPageHeader'
import { DashboardShell } from '@features/dashboard/components/DashboardShell'
import { studyRooms } from '@shared/data/mockData'
import type { StudyRoom } from '@shared/types'

const roomFilters = ['All', 'Live', 'Starting Soon', 'Scheduled'] as const

const getRoomStatusTone = (status: StudyRoom['status']) => {
  if (status === 'Live') return 'bg-emerald-400/20 text-emerald-100'
  if (status === 'Starting Soon') return 'bg-amber-400/20 text-amber-100'
  return 'bg-violet-300/20 text-violet-100'
}

export const StudyRoomPage = () => {
  const [selectedRoom, setSelectedRoom] = useState<StudyRoom | null>(null)
  const [activeFilter, setActiveFilter] = useState<(typeof roomFilters)[number]>('All')

  const filteredRooms = useMemo(() => {
    if (activeFilter === 'All') return studyRooms
    return studyRooms.filter((room) => room.status === activeFilter)
  }, [activeFilter])

  const roomStats = useMemo(() => {
    const liveCount = studyRooms.filter((room) => room.status === 'Live').length
    const upcomingCount = studyRooms.filter((room) => room.status !== 'Live').length
    const activeMembers = studyRooms.reduce((sum, room) => sum + room.members, 0)

    return { liveCount, upcomingCount, activeMembers }
  }, [])

  return (
    <DashboardShell>
      <DashboardPageHeader label="Study Room" title="Collaborative Sessions" />

      <section className="mb-5 grid gap-4 md:grid-cols-3">
        <article className="dark-card rounded-2xl p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-100/60">Live Rooms</p>
          <p className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-white">
            <Flame className="h-5 w-5 text-emerald-300" />
            {roomStats.liveCount}
          </p>
        </article>
        <article className="dark-card rounded-2xl p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-100/60">Active Members</p>
          <p className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-white">
            <Users className="h-5 w-5 text-sky-200" />
            {roomStats.activeMembers}
          </p>
        </article>
        <article className="dark-card rounded-2xl p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-100/60">Upcoming Sessions</p>
          <p className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-white">
            <Clock3 className="h-5 w-5 text-amber-200" />
            {roomStats.upcomingCount}
          </p>
        </article>
      </section>

      <section className="mb-5 flex flex-wrap gap-2">
        {roomFilters.map((filter) => (
          <button
            className={
              activeFilter === filter
                ? 'rounded-lg bg-brand-gradient px-3 py-2 text-sm font-semibold text-white'
                : 'rounded-lg border border-violet-300/20 px-3 py-2 text-sm font-semibold text-violet-100/75 hover:border-violet-300/35 hover:text-violet-100'
            }
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredRooms.map((room) => (
          <article
            className="dark-card cursor-pointer rounded-2xl p-5 transition hover:border-violet-300/35"
            key={room.id}
            onClick={() => setSelectedRoom(room)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setSelectedRoom(room)
            }}
            role="button"
            tabIndex={0}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-white">{room.name}</h3>
              <span className={`rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${getRoomStatusTone(room.status)}`}>
                {room.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-violet-100/70">{room.topic}</p>
            <p className="mt-3 text-sm text-violet-100/80">{room.focus}</p>

            <div className="mt-4 grid gap-2 text-xs text-violet-100/65">
              <p className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                {room.members}/{room.maxMembers} members
              </p>
              <p className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {room.sessionTime} • {room.duration}
              </p>
              <p className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Host: {room.host}
              </p>
            </div>

            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white" type="button">
              <Video className="h-4 w-4" />
              Open Room
            </button>
          </article>
        ))}
      </section>

      {selectedRoom ? (
        <DashboardDetailModal
          actions={[
            { label: selectedRoom.status === 'Live' ? 'Join Live Session' : 'Reserve Spot', variant: 'primary' },
            { label: 'Add to Planner' },
            { label: 'Invite Study Partner' },
          ]}
          meta={[
            { label: 'Topic', value: selectedRoom.topic },
            { label: 'Level', value: selectedRoom.level },
            { label: 'Host', value: selectedRoom.host },
            { label: 'Schedule', value: `${selectedRoom.sessionTime} • ${selectedRoom.duration}` },
          ]}
          onClose={() => setSelectedRoom(null)}
          subtitle={`${selectedRoom.members}/${selectedRoom.maxMembers} participants • ${selectedRoom.focus}`}
          title={selectedRoom.name}
        >
          <p>{selectedRoom.description}</p>
          <div className="mt-3 rounded-xl bg-violet-300/7 p-3">
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100/60">
              <Activity className="h-4 w-4" />
              Session Goals
            </p>
            <ul className="space-y-1">
              {selectedRoom.goals.map((goal) => (
                <li key={goal}>- {goal}</li>
              ))}
            </ul>
          </div>
          <div className="mt-3 rounded-xl bg-violet-300/7 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100/60">Resources</p>
            <ul className="space-y-1">
              {selectedRoom.resources.map((resource) => (
                <li key={resource}>- {resource}</li>
              ))}
            </ul>
          </div>
          <div className="mt-3 rounded-xl bg-violet-300/7 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100/60">Room Etiquette</p>
            <ul className="space-y-1">
              {selectedRoom.etiquette.map((rule) => (
                <li key={rule}>- {rule}</li>
              ))}
            </ul>
          </div>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}


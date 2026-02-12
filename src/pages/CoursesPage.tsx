import { useState } from 'react'
import { BookOpen, Clock3, GraduationCap } from 'lucide-react'
import { DashboardDetailModal } from '../components/dashboard/DashboardDetailModal'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { courses } from '../data/mockData'
import type { Course } from '../types'

export const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  return (
    <DashboardShell>
      <section className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Courses</p>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">My Learning Tracks</h2>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {courses.map((course) => (
          <article
            className="dark-card cursor-pointer rounded-2xl p-5 transition hover:border-violet-300/30"
            key={course.title}
            onClick={() => setSelectedCourse(course)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setSelectedCourse(course)
            }}
            role="button"
            tabIndex={0}
          >
            <div className="mb-4 inline-flex rounded-xl bg-violet-300/15 p-3 text-violet-100">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{course.title}</h3>
            <p className="mt-1 text-sm text-violet-100/65">{course.category}</p>
            <div className="mt-4 h-2 rounded-full bg-violet-300/10">
              <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${course.progress}%` }} />
            </div>
            <p className="mt-3 text-sm text-violet-100/70">{course.progress}% completed</p>
            <div className="mt-4 flex flex-col gap-2 text-xs text-violet-100/60 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-4 w-4" />
                {course.lessonsLeft} lessons left
              </span>
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                Guided mode
              </span>
            </div>
          </article>
        ))}
      </section>

      {selectedCourse ? (
        <DashboardDetailModal onClose={() => setSelectedCourse(null)} title={selectedCourse.title}>
          <p>Category: {selectedCourse.category}</p>
          <p>Progress: {selectedCourse.progress}% completed</p>
          <p>Lessons remaining: {selectedCourse.lessonsLeft}</p>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}


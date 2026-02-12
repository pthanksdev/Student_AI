import { BookOpen, Clock3, GraduationCap } from 'lucide-react'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { courses } from '../data/mockData'

export const CoursesPage = () => (
  <DashboardShell>
    <section className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Courses</p>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">My Learning Tracks</h2>
    </section>

    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <article className="dark-card rounded-2xl p-5" key={course.title}>
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
  </DashboardShell>
)

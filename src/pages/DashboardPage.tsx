import { ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import {
  aiRecommendations,
  courses,
  dashboardMetrics,
  focusDistribution,
  performanceSeries,
  recentActivities,
  weeklyStudyData,
} from '../data/mockData'

const pieColors = ['#7c3aed', '#3b82f6', '#a78bfa', '#6366f1']

export const DashboardPage = () => (
  <DashboardShell>
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardMetrics.map((metric) => (
        <article className="dark-card-soft rounded-2xl p-4 sm:p-5" key={metric.label}>
          <p className="text-sm text-violet-100/60">{metric.label}</p>
          <p className="mt-2 font-display text-2xl font-bold text-white">{metric.value}</p>
          <p className="mt-2 text-sm font-semibold text-emerald-300">{metric.trend}</p>
        </article>
      ))}
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-3">
      <article className="dark-card rounded-2xl p-4 sm:p-5 xl:col-span-2">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="font-display text-base font-bold text-white sm:text-lg">Performance trend</h2>
          <span className="rounded-lg bg-violet-300/15 px-2 py-1 text-xs font-semibold text-violet-100">6 weeks</span>
        </div>
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceSeries}>
              <CartesianGrid stroke="#3c2d70" strokeDasharray="4 4" />
              <XAxis dataKey="week" stroke="#c7c2e6" />
              <YAxis stroke="#c7c2e6" />
              <Tooltip contentStyle={{ background: '#120f24', border: '1px solid #4f3f8a', borderRadius: '12px' }} />
              <Line dataKey="score" dot={{ r: 4 }} stroke="#a78bfa" strokeWidth={3} type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="dark-card rounded-2xl p-4 sm:p-5">
        <h2 className="font-display text-base font-bold text-white sm:text-lg">Focus split</h2>
        <div className="h-60 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={focusDistribution} dataKey="value" innerRadius={60} outerRadius={88} paddingAngle={4}>
                {focusDistribution.map((entry, index) => (
                  <Cell fill={pieColors[index % pieColors.length]} key={entry.name} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#120f24', border: '1px solid #4f3f8a', borderRadius: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-1 gap-2 text-xs text-violet-100/75 sm:grid-cols-2">
          {focusDistribution.map((item, index) => (
            <p className="flex items-center gap-2" key={item.name}>
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: pieColors[index % pieColors.length] }}
              />
              {item.name}
            </p>
          ))}
        </div>
      </article>
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-5">
      <article className="dark-card rounded-2xl p-4 sm:p-5 xl:col-span-3">
        <h2 className="mb-4 font-display text-base font-bold text-white sm:text-lg">Recent courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div className="dark-card-soft rounded-xl p-4" key={course.title}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-violet-50">{course.title}</p>
                  <p className="text-sm text-violet-100/60">
                    {course.category} - {course.lessonsLeft} lessons left
                  </p>
                </div>
                <span className="rounded-lg bg-violet-300/12 px-2 py-1 text-xs font-semibold text-violet-100">{course.progress}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-violet-300/10">
                <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${course.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="dark-card rounded-2xl p-4 sm:p-5 xl:col-span-2">
        <h2 className="mb-4 font-display text-base font-bold text-white sm:text-lg">AI recommendations</h2>
        <div className="space-y-3">
          {aiRecommendations.map((recommendation) => (
            <div className="rounded-xl border border-violet-300/15 bg-violet-300/8 p-4" key={recommendation.title}>
              <p className="font-semibold text-violet-50">{recommendation.title}</p>
              <p className="mt-1 text-sm text-violet-100/70">{recommendation.description}</p>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-violet-200" type="button">
                {recommendation.action}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </article>
    </section>

    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <article className="dark-card rounded-2xl p-4 sm:p-5">
        <h2 className="mb-4 font-display text-base font-bold text-white sm:text-lg">Study minutes this week</h2>
        <div className="h-60 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyStudyData}>
              <CartesianGrid stroke="#3c2d70" strokeDasharray="4 4" />
              <XAxis dataKey="day" stroke="#c7c2e6" />
              <YAxis stroke="#c7c2e6" />
              <Tooltip contentStyle={{ background: '#120f24', border: '1px solid #4f3f8a', borderRadius: '12px' }} />
              <Bar dataKey="minutes" fill="#7c3aed" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="dark-card rounded-2xl p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-white sm:text-lg">Quick actions</h2>
          <Link className="text-sm font-semibold text-violet-200" to="/dashboard/quizzes">
            Open builder
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { label: 'Create Quiz', icon: Sparkles, to: '/dashboard/quizzes' },
            { label: 'New Flashcards', icon: Layers, to: '/dashboard/flashcards' },
            { label: 'Open Courses', icon: BookOpen, to: '/dashboard/courses' },
          ].map((item) => (
            <Link
              className="dark-card-soft rounded-xl p-4 transition hover:border-violet-300/30"
              key={item.label}
              to={item.to}
            >
              <item.icon className="mb-3 h-5 w-5 text-violet-100" />
              <p className="text-sm font-semibold text-violet-100">{item.label}</p>
            </Link>
          ))}
        </div>

        <h3 className="mt-6 text-sm font-semibold text-violet-100/70">Recent activity</h3>
        <div className="mt-3 space-y-3">
          {recentActivities.map((activity) => (
            <div className="dark-card-soft rounded-xl p-3" key={activity.title}>
              <p className="text-sm font-semibold text-violet-50">{activity.title}</p>
              <p className="text-xs text-violet-100/60">
                {activity.time}
                {activity.score ? ` - ${activity.score}` : ''}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  </DashboardShell>
)

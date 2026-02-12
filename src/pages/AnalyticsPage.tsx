import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { performanceSeries, weeklyStudyData } from '../data/mockData'

export const AnalyticsPage = () => (
  <DashboardShell>
    <section className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Analytics</p>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Performance Insights</h2>
      <p className="mt-2 text-violet-100/70">Detailed trends from your AI-powered study sessions.</p>
    </section>

    <section className="grid gap-6 xl:grid-cols-2">
      <article className="dark-card rounded-2xl p-4 sm:p-5">
        <h3 className="mb-4 font-display text-base font-bold text-white sm:text-lg">Score consistency</h3>
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceSeries}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3c2d70" strokeDasharray="4 4" />
              <XAxis dataKey="week" stroke="#c7c2e6" />
              <YAxis stroke="#c7c2e6" />
              <Tooltip contentStyle={{ background: '#120f24', border: '1px solid #4f3f8a', borderRadius: '12px' }} />
              <Area dataKey="score" fill="url(#scoreGradient)" stroke="#a78bfa" strokeWidth={3} type="monotone" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="dark-card rounded-2xl p-4 sm:p-5">
        <h3 className="mb-4 font-display text-base font-bold text-white sm:text-lg">Daily effort heat</h3>
        <div className="space-y-4">
          {weeklyStudyData.map((item) => (
            <div className="flex items-center gap-3 sm:gap-4" key={item.day}>
              <p className="w-9 text-sm text-violet-100/70 sm:w-10">{item.day}</p>
              <div className="h-3 flex-1 rounded-full bg-violet-300/10">
                <div
                  className="h-full rounded-full bg-brand-gradient"
                  style={{ width: `${Math.min(100, (item.minutes / 110) * 100)}%` }}
                />
              </div>
              <p className="w-11 text-right text-sm font-semibold text-violet-100 sm:w-12">{item.minutes}m</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  </DashboardShell>
)

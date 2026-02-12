import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const SignInPage = () => (
  <main className="dark-grid flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
    <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-violet-300/20 bg-[#0f0a22] shadow-soft lg:grid-cols-2">
      <div className="hidden bg-brand-gradient p-10 text-white lg:block">
        <p className="text-xs uppercase tracking-[0.2em] text-white/80">Student-IA</p>
        <h1 className="mt-4 font-display text-4xl font-bold">Welcome back to your AI study hub</h1>
        <p className="mt-4 text-white/85">Track progress, generate smart quizzes, and keep your semester on target.</p>
      </div>

      <div className="p-6 sm:p-8 md:p-10">
        <Link className="font-display text-2xl font-bold text-white" to="/">
          Student<span className="gradient-text">-IA</span>
        </Link>
        <h2 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">Sign In</h2>
        <p className="mt-2 text-violet-100/70">Access your personalized learning dashboard.</p>

        <form className="mt-8 space-y-4">
          <label className="block text-sm font-semibold text-violet-100/80">
            Email
            <input className="mt-2 w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50 outline-none focus:border-violet-300/50" type="email" />
          </label>

          <label className="block text-sm font-semibold text-violet-100/80">
            Password
            <input
              className="mt-2 w-full rounded-xl border border-violet-300/20 bg-violet-300/5 px-4 py-3 text-violet-50 outline-none focus:border-violet-300/50"
              type="password"
            />
          </label>

          <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 font-semibold text-white glow-ring" type="submit">
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-5 text-sm text-violet-100/70">
          New here?{' '}
          <Link className="font-semibold text-violet-200" to="/pricing">
            Choose a plan
          </Link>
        </p>
      </div>
    </div>
  </main>
)

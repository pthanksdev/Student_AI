import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <main className="dark-grid flex min-h-screen items-center justify-center px-4 sm:px-6">
    <div className="max-w-md text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-violet-100/70">This route does not exist in Student-IA.</p>
      <Link className="mt-6 inline-flex rounded-xl bg-brand-gradient px-5 py-3 font-semibold text-white" to="/">
        Return Home
      </Link>
    </div>
  </main>
)

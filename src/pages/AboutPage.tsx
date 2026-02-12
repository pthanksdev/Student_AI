import { MarketingShell } from '../components/layout/MarketingShell'

export const AboutPage = () => (
  <MarketingShell
    subtitle="Student-IA was built to make high-quality study support accessible to every learner."
    title="About Student-IA"
  >
    <div className="grid gap-6 lg:grid-cols-3">
      <article className="dark-card rounded-2xl p-6 lg:col-span-2">
        <h2 className="font-display text-2xl font-semibold text-white">Our mission</h2>
        <p className="mt-3 text-violet-100/75">
          We combine pedagogy and AI to help students spend less time guessing what to study and more time mastering what matters.
          From daily revision to final prep, Student-IA is designed to support consistent performance improvements.
        </p>
      </article>
      <article className="dark-card-soft rounded-2xl p-6">
        <h3 className="font-display text-xl font-semibold text-white">By the numbers</h3>
        <ul className="mt-4 space-y-3 text-violet-100/75">
          <li>12,000+ active learners</li>
          <li>200+ partner campuses</li>
          <li>4.9/5 average rating</li>
        </ul>
      </article>
    </div>
  </MarketingShell>
)

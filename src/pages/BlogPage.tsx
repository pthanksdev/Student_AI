import { MarketingShell } from '../components/layout/MarketingShell'

const articles = [
  {
    title: 'How to prepare for finals with AI study loops',
    summary: 'A practical breakdown of spaced repetition + quiz cycles for final-week prep.',
  },
  {
    title: 'Flashcards vs quizzes: when to use each',
    summary: 'Choose the right modality based on objective, memory depth, and exam style.',
  },
  {
    title: 'Building study plans for overloaded semesters',
    summary: 'Use workload-aware planning to stay consistent across 4-6 courses.',
  },
]

export const BlogPage = () => (
  <MarketingShell
    subtitle="Guides and strategy articles on study systems, AI workflows, and academic productivity."
    title="Resources & Blog"
  >
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <article className="dark-card rounded-2xl p-6" key={article.title}>
          <h2 className="font-display text-xl font-semibold text-white">{article.title}</h2>
          <p className="mt-3 text-violet-100/70">{article.summary}</p>
          <button className="mt-5 text-sm font-semibold text-violet-200" type="button">
            Read article
          </button>
        </article>
      ))}
    </div>
  </MarketingShell>
)

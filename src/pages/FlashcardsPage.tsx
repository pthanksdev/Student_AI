import { Layers, Plus, Sparkles } from 'lucide-react'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { flashcardSets } from '../data/mockData'

export const FlashcardsPage = () => (
  <DashboardShell>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Flashcards</p>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">AI Flashcard Studio</h2>
      </div>
      <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white glow-ring sm:w-auto" type="button">
        <Plus className="h-4 w-4" />
        Generate Set
      </button>
    </div>

    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {flashcardSets.map((set) => (
        <article className="dark-card rounded-2xl p-5" key={set.name}>
          <div className="mb-4 inline-flex rounded-xl bg-violet-300/15 p-3 text-violet-100">
            <Layers className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">{set.name}</h3>
          <p className="mt-1 text-sm text-violet-100/65">{set.cards} cards</p>
          <div className="mt-4 rounded-xl bg-violet-300/7 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Retention</p>
            <p className="mt-1 text-xl font-bold text-white">{set.retention}</p>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-200" type="button">
            <Sparkles className="h-4 w-4" />
            Improve weak cards
          </button>
        </article>
      ))}
    </section>
  </DashboardShell>
)


import { useState } from 'react'
import { BrainCircuit, Gauge, Plus } from 'lucide-react'
import { DashboardDetailModal } from '../components/dashboard/DashboardDetailModal'
import { DashboardShell } from '../components/dashboard/DashboardShell'
import { quizzes } from '../data/mockData'
import type { Quiz } from '../types'

const parseScore = (score: string) => Number.parseInt(score.replace('%', ''), 10)

const getQuizInsight = (quiz: Quiz) => {
  const score = parseScore(quiz.score)

  if (score >= 90) return 'Strong mastery. Focus on speed and harder variants to improve exam confidence.'
  if (score >= 80) return 'Solid understanding with room to tighten consistency on medium-hard questions.'
  return 'Core concepts need reinforcement. Review fundamentals and retry with hints enabled.'
}

export const QuizzesPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null)

  return (
    <DashboardShell>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-violet-100/50">Quizzes</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">AI Quiz Builder</h2>
        </div>
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white glow-ring sm:w-auto" type="button">
          <Plus className="h-4 w-4" />
          Create Quiz
        </button>
      </div>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quizzes.map((quiz) => (
          <article
            className="dark-card cursor-pointer rounded-2xl p-5 transition hover:border-violet-300/30"
            key={quiz.title}
            onClick={() => setSelectedQuiz(quiz)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') setSelectedQuiz(quiz)
            }}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{quiz.title}</h3>
                <p className="mt-1 text-sm text-violet-100/65">
                  {quiz.questions} questions - {quiz.difficulty}
                </p>
              </div>
              <span className="rounded-lg bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">{quiz.score}</span>
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
              <button className="inline-flex items-center gap-2 rounded-lg border border-violet-300/20 px-3 py-2 text-violet-100/85" type="button">
                <BrainCircuit className="h-4 w-4" />
                Retake with AI hints
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-violet-300/20 px-3 py-2 text-violet-100/85" type="button">
                <Gauge className="h-4 w-4" />
                Raise difficulty
              </button>
            </div>
          </article>
        ))}
      </section>

      {selectedQuiz ? (
        <DashboardDetailModal
          actions={[
            { label: 'Retake Quiz', variant: 'primary' },
            { label: 'Generate Flashcards' },
          ]}
          meta={[
            { label: 'Difficulty', value: selectedQuiz.difficulty },
            { label: 'Questions', value: `${selectedQuiz.questions}` },
            { label: 'Latest Score', value: selectedQuiz.score },
            { label: 'Mode', value: 'Adaptive' },
          ]}
          onClose={() => setSelectedQuiz(null)}
          subtitle='Quiz Performance and Next Action'
          title={selectedQuiz.title}
        >
          <p>
            Overview: This is a {selectedQuiz.difficulty.toLowerCase()} difficulty quiz with {selectedQuiz.questions} questions. Your latest result is {selectedQuiz.score}.
          </p>
          <p>Performance analysis: {getQuizInsight(selectedQuiz)}</p>
          <p>
            Suggested next step: Retry the quiz in exam mode, then generate a focused flashcard set from missed topics to lock in retention.
          </p>
        </DashboardDetailModal>
      ) : null}
    </DashboardShell>
  )
}


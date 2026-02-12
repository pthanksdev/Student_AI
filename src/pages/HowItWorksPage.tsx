import { BrainCircuit, CalendarClock, CheckCircle2, Layers } from 'lucide-react'
import { MarketingShell } from '../components/layout/MarketingShell'

const steps = [
  {
    title: 'Upload your notes',
    description: 'Drop PDFs, slides, links, or pasted notes into Student-IA.',
    icon: Layers,
  },
  {
    title: 'Generate AI materials',
    description: 'Instantly create quizzes, flashcards, and topic summaries.',
    icon: BrainCircuit,
  },
  {
    title: 'Follow your plan',
    description: 'Get adaptive daily tasks based on your weak areas and deadlines.',
    icon: CalendarClock,
  },
  {
    title: 'Track and improve',
    description: 'Use analytics to measure progress and adjust study intensity.',
    icon: CheckCircle2,
  },
]

export const HowItWorksPage = () => (
  <MarketingShell
    subtitle="A streamlined 4-step workflow designed for students, tutors, and campus teams."
    title="How Student-IA Works"
  >
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <article className="dark-card rounded-2xl p-6" key={step.title}>
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/15 text-violet-100">
              <step.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-violet-100/60">Step {idx + 1}</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-2 text-violet-100/70">{step.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </MarketingShell>
)

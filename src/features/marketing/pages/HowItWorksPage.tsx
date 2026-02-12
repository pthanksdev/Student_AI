import { BrainCircuit, CalendarClock, CheckCircle2, Layers } from 'lucide-react'
import { MarketingCard } from '@shared/components/marketing/MarketingCard'
import { MarketingShell } from '@shared/components/layout/MarketingShell'

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
        <MarketingCard
          description={step.description}
          icon={<step.icon className="h-5 w-5" />}
          key={step.title}
          title={step.title}
        >
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-violet-100/60">Step {idx + 1}</p>
        </MarketingCard>
      ))}
    </div>
  </MarketingShell>
)


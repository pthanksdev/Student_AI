import { MarketingShell } from '../components/layout/MarketingShell'

const faqs = [
  {
    q: 'How accurate are AI-generated quizzes?',
    a: 'Quizzes are generated from your uploaded material and refined by your performance data.',
  },
  {
    q: 'Can I use Student-IA for group study?',
    a: 'Yes. Team plans include collaborative spaces and shared progress dashboards.',
  },
  {
    q: 'Does Student-IA support mobile learning?',
    a: 'Yes. The platform is optimized for phones, tablets, and desktop devices.',
  },
]

export const FAQPage = () => (
  <MarketingShell subtitle="Answers to common questions about features, plans, and platform setup." title="Frequently Asked Questions">
    <div className="space-y-4">
      {faqs.map((item) => (
        <article className="dark-card rounded-2xl p-6" key={item.q}>
          <h2 className="font-display text-xl font-semibold text-white">{item.q}</h2>
          <p className="mt-2 text-violet-100/70">{item.a}</p>
        </article>
      ))}
    </div>
  </MarketingShell>
)

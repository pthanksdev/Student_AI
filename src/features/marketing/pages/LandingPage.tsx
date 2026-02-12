import { ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LandingNav } from '@features/marketing/components/LandingNav'
import { GradientButton } from '@shared/components/common/GradientButton'
import { PublicFooter } from '@shared/components/layout/PublicFooter'
import { benefitCards, featureCards, pricingTiers, testimonials } from '@shared/data/mockData'
import { useRevealOnScroll } from '@shared/hooks/useRevealOnScroll'

export const LandingPage = () => {
  useRevealOnScroll()

  return (
    <div className="dark-grid text-violet-50">
      <LandingNav />

      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-24">
        <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-100">
              <Sparkles className="h-4 w-4" />
              AI-Based Study Solution
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
              AI-Powered Learning Platform for
              <span className="gradient-text"> Students</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-violet-100/75 sm:text-lg">
              Student-IA combines adaptive quizzes, smart flashcards, and a personal AI tutor into one focused workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GradientButton className="w-full glow-ring sm:w-auto" to="/dashboard">
                Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
              <Link
                className="inline-flex w-full items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/5 px-5 py-3 font-semibold text-violet-100 transition hover:bg-violet-300/10 sm:w-auto"
                to="/pricing"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-1 gap-3 text-center text-sm sm:grid-cols-3 sm:gap-4">
              <div className="dark-card-soft rounded-xl p-3">
                <p className="font-display text-xl font-bold text-white">12K+</p>
                <p className="text-violet-100/70">Students</p>
              </div>
              <div className="dark-card-soft rounded-xl p-3">
                <p className="font-display text-xl font-bold text-white">4.9</p>
                <p className="text-violet-100/70">Average Rating</p>
              </div>
              <div className="dark-card-soft rounded-xl p-3">
                <p className="font-display text-xl font-bold text-white">87%</p>
                <p className="text-violet-100/70">Goal Completion</p>
              </div>
            </div>
          </div>

          <div className="reveal dark-card rounded-3xl p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-violet-100 sm:text-base">Student Dashboard Preview</p>
              <span className="rounded-lg bg-violet-300/20 px-2 py-1 text-xs font-bold text-violet-100">Live AI</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: 'AI Quiz Confidence', value: '89%' },
                { title: 'Focus Streak', value: '14 Days' },
                { title: 'Flashcards Mastered', value: '324' },
                { title: 'Upcoming Exam Prep', value: '6 Days' },
              ].map((item) => (
                <div className="dark-card-soft rounded-xl p-4" key={item.title}>
                  <p className="text-xs uppercase tracking-[0.16em] text-violet-200/60">{item.title}</p>
                  <p className="mt-2 font-display text-lg font-bold text-white sm:text-xl">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-violet-300/15 bg-black/20 p-4">
              <p className="text-sm font-semibold text-violet-100">Today AI recommendations</p>
              <div className="mt-3 space-y-2 text-sm text-violet-100/75">
                <p>• Complete Genetics Quiz Sprint (15m)</p>
                <p>• Review 12 weak flashcards from Algebra</p>
                <p>• 20-minute guided history recap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="features">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200/70">Features</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-5xl">Everything to accelerate your study flow</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featureCards.map((feature) => (
              <article className="dark-card rounded-2xl p-6" key={feature.title}>
                <div className="mb-4 inline-flex rounded-xl bg-violet-300/15 p-3 text-violet-100">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-violet-100/70">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="benefits">
        <div className="mx-auto max-w-6xl rounded-3xl border border-violet-300/20 bg-black/20 p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Why learners prefer Student-IA</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {benefitCards.map((benefit) => (
              <article className="dark-card-soft rounded-2xl p-5" key={benefit.title}>
                <benefit.icon className="h-6 w-6 text-violet-100" />
                <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-violet-100/70">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="pricing">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200/70">Pricing</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-5xl">Simple plans for every student</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                className={`rounded-2xl p-6 ${tier.highlighted ? 'dark-card glow-ring' : 'dark-card-soft'}`}
                key={tier.name}
              >
                {tier.highlighted && (
                  <p className="mb-4 inline-flex rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold uppercase text-white">
                    Most Popular
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-white">{tier.name}</h3>
                <p className="mt-2 text-4xl font-bold text-white">{tier.monthly}</p>
                <p className="mt-2 text-sm text-violet-100/70">{tier.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-violet-100/80">
                  {tier.features.map((feature) => (
                    <li className="flex items-start gap-2" key={feature}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-200" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <GradientButton className="mt-6 w-full justify-center glow-ring" to="/signin">
                  {tier.cta}
                </GradientButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="testimonials">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-5xl">Loved by ambitious students</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article className="dark-card-soft rounded-2xl p-6" key={testimonial.name}>
                <p className="text-violet-100/80">"{testimonial.quote}"</p>
                <p className="mt-6 font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-violet-100/60">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-brand-gradient p-6 text-white sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">Try Student-IA now</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Build your smartest semester yet</h2>
            </div>
            <GradientButton className="bg-white text-violet-700 glow-ring" to="/signin">
              Join Student-IA <Zap className="ml-2 h-4 w-4" />
            </GradientButton>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}


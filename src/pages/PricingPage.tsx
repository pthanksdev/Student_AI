import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GradientButton } from '../components/common/GradientButton'
import { PublicFooter } from '../components/layout/PublicFooter'
import { LandingNav } from '../components/landing/LandingNav'
import { pricingTiers } from '../data/mockData'

export const PricingPage = () => (
  <div className="dark-grid min-h-screen text-violet-50">
    <LandingNav />
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-100/70">Pricing</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Choose your Student-IA plan</h1>
        <p className="mt-4 max-w-2xl text-violet-100/70">Scale from solo prep to campus-level learning with transparent pricing.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article className={`rounded-2xl p-6 ${tier.highlighted ? 'dark-card glow-ring' : 'dark-card-soft'}`} key={tier.name}>
              <h2 className="font-display text-2xl font-bold text-white">{tier.name}</h2>
              <p className="mt-3 text-4xl font-bold text-white">
                {tier.monthly}
                <span className="ml-1 text-sm font-medium text-violet-100/60">/month</span>
              </p>
              <p className="mt-2 text-sm text-violet-100/70">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-violet-100/85">
                {tier.features.map((feature) => (
                  <li className="flex gap-2" key={feature}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-200" />
                    {feature}
                  </li>
                ))}
              </ul>
              <GradientButton className="mt-6 w-full justify-center" to="/signin">
                {tier.cta}
              </GradientButton>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-gradient p-6 text-white sm:p-8">
          <h3 className="font-display text-xl font-bold sm:text-2xl">Need institution plans?</h3>
          <p className="mt-2 text-white/80">Talk to our team for custom onboarding and LMS integration.</p>
          <Link className="mt-4 inline-flex items-center gap-2 font-semibold" to="/contact">
            Contact Sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
    <PublicFooter />
  </div>
)

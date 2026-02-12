import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type GradientButtonProps = {
  to?: string
  children: ReactNode
  className?: string
}

export const GradientButton = ({ to, children, className = '' }: GradientButtonProps) => {
  const classes = `inline-flex items-center justify-center rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:text-base ${className}`

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  }

  return <button className={classes}>{children}</button>
}

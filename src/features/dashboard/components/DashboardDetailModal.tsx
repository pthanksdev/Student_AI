import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'

type ModalMetaItem = {
  label: string
  value: string
}

type ModalActionItem = {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

type DashboardDetailModalProps = {
  title: string
  subtitle?: string
  onClose: () => void
  children: ReactNode
  meta?: ModalMetaItem[]
  actions?: ModalActionItem[]
}

export const DashboardDetailModal = ({ title, subtitle, onClose, children, meta, actions }: DashboardDetailModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080516]/85 px-4" onClick={onClose} role="presentation">
      <div
        aria-modal="true"
        className="w-full max-w-2xl rounded-2xl border border-violet-300/20 bg-[#110b24] p-5 shadow-2xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            {subtitle ? <p className="mt-1 text-sm text-violet-100/65">{subtitle}</p> : null}
          </div>
          <button
            aria-label="Close details"
            className="rounded-lg border border-violet-300/20 p-2 text-violet-100/80 transition hover:border-violet-200/40 hover:text-violet-100"
            onClick={onClose}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {meta?.length ? (
          <div className="mb-4 grid gap-2 rounded-xl bg-violet-300/7 p-3 sm:grid-cols-2">
            {meta.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.16em] text-violet-100/50">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-violet-100">{item.value}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="space-y-2 text-sm text-violet-100/80">{children}</div>

        <div className="mt-5 flex flex-wrap justify-end gap-2">
          {actions?.map((action) => (
            <button
              className={
                action.variant === 'primary'
                  ? 'rounded-lg bg-brand-gradient px-3 py-2 text-sm font-semibold text-white'
                  : 'rounded-lg border border-violet-300/20 px-3 py-2 text-sm font-semibold text-violet-100/85'
              }
              key={action.label}
              onClick={action.onClick}
              type="button"
            >
              {action.label}
            </button>
          ))}
          <button className="rounded-lg border border-violet-300/20 px-3 py-2 text-sm font-semibold text-violet-100/85" onClick={onClose} type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

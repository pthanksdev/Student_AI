import type { ReactNode } from 'react'
import { X } from 'lucide-react'

type DashboardDetailModalProps = {
  title: string
  onClose: () => void
  children: ReactNode
}

export const DashboardDetailModal = ({ title, onClose, children }: DashboardDetailModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080516]/85 px-4" onClick={onClose} role="presentation">
    <div
      aria-modal="true"
      className="w-full max-w-xl rounded-2xl border border-violet-300/20 bg-[#110b24] p-5 shadow-2xl sm:p-6"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <button
          aria-label="Close details"
          className="rounded-lg border border-violet-300/20 p-2 text-violet-100/80 transition hover:border-violet-200/40 hover:text-violet-100"
          onClick={onClose}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2 text-sm text-violet-100/80">{children}</div>
    </div>
  </div>
)

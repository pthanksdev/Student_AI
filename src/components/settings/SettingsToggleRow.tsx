type SettingsToggleRowProps = {
  label: string
  description: string
  defaultChecked?: boolean
}

export const SettingsToggleRow = ({ label, description, defaultChecked = false }: SettingsToggleRowProps) => (
  <label className="flex items-start justify-between gap-4 rounded-xl border border-violet-300/15 p-3">
    <div>
      <p className="text-sm font-semibold text-violet-100">{label}</p>
      <p className="mt-1 text-xs text-violet-100/65">{description}</p>
    </div>
    <input className="mt-1" defaultChecked={defaultChecked} type="checkbox" />
  </label>
)

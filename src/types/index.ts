export type NavItem = {
  label: string
  path: string
}

export type Metric = {
  label: string
  value: string
  trend: string
}

export type Course = {
  title: string
  progress: number
  lessonsLeft: number
  category: string
}

export type Activity = {
  title: string
  time: string
  score?: string
}

export type Recommendation = {
  title: string
  description: string
  action: string
}

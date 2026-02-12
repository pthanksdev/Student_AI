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

export type Quiz = {
  title: string
  questions: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  score: string
}

export type FlashcardSet = {
  name: string
  cards: number
  retention: string
}

export type PlannerTask = {
  title: string
  time: string
  status: 'Scheduled' | 'Pending' | 'Completed'
}

export type Assignment = {
  title: string
  due: string
  status: 'Not Started' | 'In Progress' | 'Submitted'
}

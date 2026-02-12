import { BrainCircuit, CalendarClock, Flashlight, GraduationCap, Sparkles, Target } from 'lucide-react'
import type { Activity, Course, Metric, NavItem, Quiz, Recommendation } from '../types'

export const publicNav: NavItem[] = [
  { label: 'Features', path: '/features' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Resources', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Help Center', path: '/help' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Terms', path: '/terms' },
]

export const featureCards = [
  {
    title: 'AI Flashcards Generator',
    description: 'Turn lecture notes and PDFs into retention-focused flashcards in seconds.',
    icon: Flashlight,
  },
  {
    title: 'Smart Quiz Builder',
    description: 'Generate adaptive quizzes with instant feedback and difficulty tuning.',
    icon: BrainCircuit,
  },
  {
    title: 'Personal Study Paths',
    description: 'Get dynamic weekly plans based on your pace, gaps, and upcoming exams.',
    icon: Target,
  },
  {
    title: '24/7 AI Study Coach',
    description: 'Ask follow-up questions and get step-by-step explanations on demand.',
    icon: Sparkles,
  },
]

export const benefitCards = [
  {
    title: 'Higher Retention',
    description: 'Students report faster recall with auto-spaced repetition workflows.',
    icon: GraduationCap,
  },
  {
    title: 'Save Time',
    description: 'Reduce prep overhead with AI-generated study assets from any content.',
    icon: CalendarClock,
  },
  {
    title: 'Stay Consistent',
    description: 'Daily reminders and progress insights keep learning momentum high.',
    icon: Target,
  },
]

export const pricingTiers = [
  {
    name: 'Starter',
    monthly: '$0',
    description: 'For independent learners trying AI study tools.',
    features: ['3 AI quizzes / week', '30 flashcards / month', 'Basic analytics'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    monthly: '$19',
    description: 'Best for active students who study daily.',
    features: ['Unlimited AI quizzes', 'Unlimited flashcards', 'Personalized learning paths', 'Priority AI support'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Campus',
    monthly: '$49',
    description: 'For teams, cohorts, and tutoring programs.',
    features: ['5 team seats', 'Advanced analytics', 'Instructor dashboard', 'Export & reporting'],
    cta: 'Contact Sales',
  },
]

export const testimonials = [
  {
    quote: 'Student-IA helped me cut prep time in half before finals.',
    name: 'Maya Lin',
    role: 'Computer Science Student',
  },
  {
    quote: 'The quiz generator feels like a personal tutor that knows my weak spots.',
    name: 'Chris Walker',
    role: 'Biology Major',
  },
  {
    quote: 'Our study group improved average scores by 18% in one semester.',
    name: 'Elena Ruiz',
    role: 'Study Group Lead',
  },
]

export const dashboardMetrics: Metric[] = [
  { label: 'Weekly Focus Time', value: '16.4h', trend: '+12%' },
  { label: 'Quiz Accuracy', value: '87%', trend: '+6%' },
  { label: 'Flashcards Mastered', value: '324', trend: '+41' },
  { label: 'Streak', value: '14 days', trend: '+2 days' },
]

export const courses: Course[] = [
  { title: 'Advanced Biology', progress: 76, lessonsLeft: 4, category: 'Science' },
  { title: 'Linear Algebra', progress: 61, lessonsLeft: 7, category: 'Math' },
  { title: 'World History', progress: 83, lessonsLeft: 2, category: 'Humanities' },
  { title: 'Organic Chemistry', progress: 54, lessonsLeft: 9, category: 'Science' },
  { title: 'Data Structures', progress: 68, lessonsLeft: 5, category: 'Computer Science' },
  { title: 'Microeconomics', progress: 47, lessonsLeft: 11, category: 'Business' },
  { title: 'Academic Writing', progress: 72, lessonsLeft: 3, category: 'Language' },
  { title: 'Physics: Mechanics', progress: 59, lessonsLeft: 8, category: 'Science' },
  { title: 'Statistics I', progress: 64, lessonsLeft: 6, category: 'Math' },
  { title: 'Psychology Fundamentals', progress: 81, lessonsLeft: 2, category: 'Social Science' },
  { title: 'Intro to Philosophy', progress: 38, lessonsLeft: 12, category: 'Humanities' },
  { title: 'Web Development Basics', progress: 88, lessonsLeft: 1, category: 'Computer Science' },
]

export const recentActivities: Activity[] = [
  { title: 'Completed Quiz: Cell Structure', time: '2h ago', score: '92%' },
  { title: 'Created Flashcard Set: Matrices', time: 'Yesterday' },
  { title: 'AI Review Session: WW2 Causes', time: '2 days ago', score: '89%' },
]

export const quizzes: Quiz[] = [
  { title: 'Genetics Practice Set', questions: 20, difficulty: 'Medium', score: '91%' },
  { title: 'Vector Calculus Drill', questions: 15, difficulty: 'Hard', score: '84%' },
  { title: 'Cold War Review', questions: 25, difficulty: 'Medium', score: '88%' },
  { title: 'Photosynthesis Checkpoint', questions: 18, difficulty: 'Easy', score: '94%' },
  { title: 'Limits and Continuity Sprint', questions: 22, difficulty: 'Medium', score: '86%' },
  { title: 'Programming Basics Quiz', questions: 30, difficulty: 'Easy', score: '93%' },
  { title: 'Cell Respiration Deep Dive', questions: 16, difficulty: 'Hard', score: '79%' },
  { title: 'European History Timeline', questions: 24, difficulty: 'Medium', score: '87%' },
  { title: 'Probability Foundations', questions: 21, difficulty: 'Hard', score: '82%' },
  { title: 'Grammar and Style Review', questions: 14, difficulty: 'Easy', score: '95%' },
]

export const aiRecommendations: Recommendation[] = [
  {
    title: 'Revisit Matrix Determinants',
    description: 'Your last two quizzes showed gaps in determinant shortcuts.',
    action: 'Start 10-min review',
  },
  {
    title: 'Practice Active Recall: Mitochondria',
    description: 'Retention dropped to 73%. Suggested 12-card booster set ready.',
    action: 'Open flashcard set',
  },
  {
    title: 'Schedule History Sprint',
    description: 'Final exam in 6 days. Recommended 3 focused quiz blocks.',
    action: 'Build study plan',
  },
]

export const performanceSeries = [
  { week: 'W1', score: 61 },
  { week: 'W2', score: 67 },
  { week: 'W3', score: 72 },
  { week: 'W4', score: 74 },
  { week: 'W5', score: 80 },
  { week: 'W6', score: 87 },
]

export const focusDistribution = [
  { name: 'Quizzes', value: 38 },
  { name: 'Flashcards', value: 34 },
  { name: 'Video', value: 16 },
  { name: 'Reading', value: 12 },
]

export const weeklyStudyData = [
  { day: 'Mon', minutes: 70 },
  { day: 'Tue', minutes: 48 },
  { day: 'Wed', minutes: 84 },
  { day: 'Thu', minutes: 92 },
  { day: 'Fri', minutes: 66 },
  { day: 'Sat', minutes: 104 },
  { day: 'Sun', minutes: 72 },
]

export const dashboardNav = [
  { label: 'Overview', path: '/dashboard' },
  { label: 'Courses', path: '/dashboard/courses' },
  { label: 'Flashcards', path: '/dashboard/flashcards' },
  { label: 'Quizzes', path: '/dashboard/quizzes' },
  { label: 'Planner', path: '/dashboard/planner' },
  { label: 'Assignments', path: '/dashboard/assignments' },
  { label: 'Study Room', path: '/dashboard/study-room' },
  { label: 'Messages', path: '/dashboard/messages' },
  { label: 'Analytics', path: '/dashboard/analytics' },
  { label: 'Billing', path: '/dashboard/billing' },
  { label: 'Settings', path: '/dashboard/settings' },
]

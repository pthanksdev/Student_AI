import { BrainCircuit, CalendarClock, Flashlight, GraduationCap, Sparkles, Target } from 'lucide-react'
import type {
  Activity,
  Assignment,
  ConnectedService,
  Course,
  FlashcardSet,
  Metric,
  NavItem,
  PlannerTask,
  ProfileAchievement,
  ProfileGoal,
  ProfileOverview,
  Quiz,
  Recommendation,
  SecuritySession,
  StudyRoom,
  MessageThread,
} from '@shared/types'

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

export const flashcardSets: FlashcardSet[] = [
  { name: 'Cell Biology Essentials', cards: 42, retention: '81%' },
  { name: 'Trigonometry Identities', cards: 28, retention: '74%' },
  { name: 'French Vocabulary Unit 4', cards: 35, retention: '88%' },
  { name: 'Organic Chemistry Reactions', cards: 31, retention: '77%' },
  { name: 'US Government Terms', cards: 26, retention: '85%' },
  { name: 'Statistics Formula Bank', cards: 24, retention: '79%' },
  { name: 'Python Syntax Drills', cards: 38, retention: '90%' },
  { name: 'World Geography Capitals', cards: 52, retention: '83%' },
  { name: 'Economics Key Concepts', cards: 29, retention: '76%' },
  { name: 'Physics Constants and Units', cards: 33, retention: '82%' },
]

export const plannerTasks: PlannerTask[] = [
  { title: 'Biology review sprint', time: 'Today, 5:00 PM', status: 'Scheduled' },
  { title: 'Math flashcard session', time: 'Tomorrow, 8:00 AM', status: 'Completed' },
  { title: 'History quiz block', time: 'Friday, 6:30 PM', status: 'Pending' },
  { title: 'Linear algebra problem set', time: 'Saturday, 10:00 AM', status: 'Scheduled' },
  { title: 'Chemistry lab recap', time: 'Saturday, 3:00 PM', status: 'Pending' },
  { title: 'Programming practice challenge', time: 'Sunday, 1:00 PM', status: 'Scheduled' },
  { title: 'Essay draft outline', time: 'Monday, 8:00 PM', status: 'Completed' },
  { title: 'Physics mechanics timed quiz', time: 'Tuesday, 6:00 PM', status: 'Pending' },
]

export const assignments: Assignment[] = [
  { title: 'Linear Algebra worksheet', due: 'Tomorrow', status: 'In Progress' },
  { title: 'Biology chapter quiz', due: 'Friday', status: 'Not Started' },
  { title: 'History timeline summary', due: 'Sunday', status: 'Submitted' },
  { title: 'Chemistry lab report', due: 'Monday', status: 'In Progress' },
  { title: 'Programming mini project', due: 'Tuesday', status: 'Not Started' },
  { title: 'Economics case analysis', due: 'Wednesday', status: 'In Progress' },
  { title: 'Physics worksheet set B', due: 'Thursday', status: 'Not Started' },
  { title: 'Psychology reflection notes', due: 'Friday', status: 'Submitted' },
  { title: 'English literature response', due: 'Saturday', status: 'In Progress' },
  { title: 'Statistics practice packet', due: 'Sunday', status: 'Not Started' },
  { title: 'Web dev UI critique', due: 'Monday', status: 'Submitted' },
  { title: 'Geography map labeling', due: 'Tuesday', status: 'In Progress' },
]

export const studyRooms: StudyRoom[] = [
  {
    id: 'bio-live-lab',
    name: 'Biology Finals Sprint',
    topic: 'Cell Respiration and Genetics',
    members: 14,
    maxMembers: 20,
    status: 'Live',
    sessionTime: 'Live now',
    duration: '75 min',
    focus: 'Exam prep + concept mapping',
    level: 'Intermediate',
    host: 'Maya Lin',
    description: 'Fast-paced collaborative review with whiteboard walkthroughs, timed recall rounds, and a final mini-quiz.',
    goals: [
      'Explain each stage of cellular respiration without notes.',
      'Compare dominant/recessive inheritance with common exam traps.',
      'Complete one timed checkpoint with 85%+ accuracy.',
    ],
    resources: ['Lecture Slides 8-10', 'Genetics Cheat Sheet', 'AI Tutor Recap Prompts'],
    etiquette: ['Keep camera optional but mic muted when not speaking.', 'Use hand-raise before interrupting.', 'Post unresolved questions in chat for final Q&A.'],
  },
  {
    id: 'calc-problem-clinic',
    name: 'Calculus Problem Clinic',
    topic: 'Chain Rule and Optimization',
    members: 10,
    maxMembers: 16,
    status: 'Starting Soon',
    sessionTime: 'Starts in 20 min',
    duration: '60 min',
    focus: 'Step-by-step problem solving',
    level: 'Advanced',
    host: 'Course Mentor',
    description: 'Guided challenge session focused on high-difficulty derivatives and optimization word problems.',
    goals: [
      'Solve 6 mixed derivative problems without formula hints.',
      'Identify sign and substitution mistakes before final answer.',
      'Build a reusable optimization checklist for exams.',
    ],
    resources: ['Past Quiz Packet A', 'Optimization Checklist Template', 'Symbol Error Tracker'],
    etiquette: ['Show full working steps before sharing answers.', 'Tag each question with confidence level.', 'Keep chat discussion focused on current problem set.'],
  },
  {
    id: 'history-debate-room',
    name: 'History Debate Lab',
    topic: 'Cold War Causality',
    members: 8,
    maxMembers: 14,
    status: 'Scheduled',
    sessionTime: 'Today, 8:30 PM',
    duration: '50 min',
    focus: 'Argument structure + evidence recall',
    level: 'Mixed',
    host: 'Elena Ruiz',
    description: 'Discussion-driven study room where each member defends a position using primary-source evidence.',
    goals: [
      'Build one thesis and two evidence-backed supporting claims.',
      'Practice concise counterargument responses.',
      'Create a shared timeline of critical Cold War events.',
    ],
    resources: ['Primary Source Excerpts', 'Debate Rubric', 'Timeline Board'],
    etiquette: ['Respect speaking turns with 2-minute limits.', 'Reference evidence before opinions.', 'Capture action items in shared notes.'],
  },
  {
    id: 'chem-memory-room',
    name: 'Organic Chemistry Recall',
    topic: 'Reaction Mechanisms',
    members: 12,
    maxMembers: 18,
    status: 'Live',
    sessionTime: 'Live now',
    duration: '90 min',
    focus: 'Retention drills + mechanism tracing',
    level: 'Intermediate',
    host: 'AI Tutor',
    description: 'Memory-optimized group with spaced recall prompts, mechanism tracing, and instant correction loops.',
    goals: [
      'Recall 15 core reactions by trigger pattern.',
      'Map mechanism arrows accurately in under 2 minutes each.',
      'Reduce confusion between substitution and elimination paths.',
    ],
    resources: ['Reaction Family Matrix', 'Mechanism Flash Deck', 'Error Pattern Tracker'],
    etiquette: ['Submit answers before seeing discussion.', 'Use reaction labels consistently.', 'Mark uncertain attempts for host review.'],
  },
  {
    id: 'cs-build-room',
    name: 'Data Structures Build Room',
    topic: 'Trees, Graphs, and BFS/DFS',
    members: 9,
    maxMembers: 15,
    status: 'Scheduled',
    sessionTime: 'Tomorrow, 6:45 PM',
    duration: '80 min',
    focus: 'Code walkthrough + complexity review',
    level: 'Advanced',
    host: 'Alex D.',
    description: 'Pair-debug format focused on implementing traversals correctly and explaining time/space complexity.',
    goals: [
      'Implement DFS and BFS from scratch with edge-case handling.',
      'Explain complexity tradeoffs between representations.',
      'Complete one coding challenge in timed mode.',
    ],
    resources: ['Graph Sandbox', 'Complexity Cheatsheet', 'Interview-style Prompt Set'],
    etiquette: ['Share pseudo-code before coding.', 'Keep implementations language-agnostic first.', 'Note every failed test case and fix.'],
  },
  {
    id: 'writing-peer-review',
    name: 'Academic Writing Peer Room',
    topic: 'Argument Clarity and Citation',
    members: 7,
    maxMembers: 12,
    status: 'Starting Soon',
    sessionTime: 'Starts in 45 min',
    duration: '55 min',
    focus: 'Draft critique + rewrite',
    level: 'Beginner',
    host: 'Writing Coach',
    description: 'Supportive room for tightening thesis statements, paragraph flow, and citation quality.',
    goals: [
      'Rewrite one weak paragraph into a clear claim-evidence-analysis block.',
      'Fix citation formatting in at least 3 references.',
      'Create a final revision checklist for submission.',
    ],
    resources: ['Citation Quick Guide', 'Thesis Strength Rubric', 'Peer Review Template'],
    etiquette: ['Critique writing, not the writer.', 'Give at least one actionable improvement note.', 'Respect original author voice while suggesting edits.'],
  },
  {
    id: 'stats-speed-room',
    name: 'Statistics Speed Session',
    topic: 'Probability and Inference',
    members: 11,
    maxMembers: 16,
    status: 'Scheduled',
    sessionTime: 'Friday, 7:00 PM',
    duration: '65 min',
    focus: 'Timed quiz simulation',
    level: 'Mixed',
    host: 'AI Tutor',
    description: 'Exam-style sprint using timed rounds, immediate debrief, and confidence scoring per answer.',
    goals: [
      'Complete 20 timed questions with full method notes.',
      'Separate conceptual misses from calculation errors.',
      'Build a mistake log for next review cycle.',
    ],
    resources: ['Timed Quiz Set B', 'Confidence Tracker', 'Inference Formula Sheet'],
    etiquette: ['No answer sharing until timer ends.', 'Mark guesses honestly.', 'Use debrief time to identify root cause, not just final answer.'],
  },
  {
    id: 'language-recall-club',
    name: 'French Recall Club',
    topic: 'Vocabulary and Listening',
    members: 6,
    maxMembers: 10,
    status: 'Scheduled',
    sessionTime: 'Saturday, 10:30 AM',
    duration: '45 min',
    focus: 'Pronunciation + active recall',
    level: 'Beginner',
    host: 'Language Partner',
    description: 'Low-pressure group that alternates rapid vocabulary recall with short listening prompts and corrections.',
    goals: [
      'Recall 30 unit words in context sentences.',
      'Improve pronunciation for high-frequency terms.',
      'Finish one listening comprehension mini-round.',
    ],
    resources: ['Unit 4 Audio Clips', 'Vocabulary Cards', 'Pronunciation Notes'],
    etiquette: ['Encourage retries before giving answers.', 'Keep feedback brief and specific.', 'Use target language first when possible.'],
  },
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

export const profileOverview: ProfileOverview = {
  name: 'Alex D.',
  handle: '@alexd',
  email: 'alex.d@studentia.app',
  avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=AlexD',
  school: 'Westbridge University',
  major: 'Computer Science',
  year: '3rd Year',
  timezone: 'UTC-05:00',
  bio: 'Focused on exam readiness, stronger retention, and consistent weekly progress.',
  streak: 14,
  weeklyHours: 16.4,
  completionRate: 87,
}

export const profileGoals: ProfileGoal[] = [
  { title: 'Raise calculus score', target: '92%', current: '84%', deadline: 'Mar 10' },
  { title: 'Complete chemistry revision bank', target: '120 cards', current: '86 cards', deadline: 'Mar 02' },
  { title: 'Finish planner consistency streak', target: '21 days', current: '14 days', deadline: 'Feb 28' },
]

export const profileAchievements: ProfileAchievement[] = [
  { title: 'Deep Work Sprint', description: 'Completed 10 focused sessions in one week.', unlocked: 'Unlocked Feb 2' },
  { title: 'Quiz Climber', description: 'Improved average quiz score by 12%.', unlocked: 'Unlocked Jan 26' },
  { title: 'Retention Builder', description: 'Maintained 85%+ flashcard retention for 3 sets.', unlocked: 'Unlocked Jan 18' },
]

export const connectedServices: ConnectedService[] = [
  { name: 'Google Calendar', status: 'Connected', lastSync: '2h ago' },
  { name: 'Notion Workspace', status: 'Connected', lastSync: 'Yesterday' },
  { name: 'Campus LMS', status: 'Needs Attention', lastSync: '5 days ago' },
]

export const securitySessions: SecuritySession[] = [
  { device: 'Chrome on Windows', location: 'New York, US', lastActive: 'Now', current: true },
  { device: 'Safari on iPhone', location: 'New York, US', lastActive: 'Today, 7:14 AM' },
  { device: 'Edge on Laptop', location: 'Boston, US', lastActive: 'Yesterday, 9:42 PM' },
]

export const messageThreads: MessageThread[] = [
  {
    id: 'ai-tutor-plan',
    from: 'AI Tutor',
    preview: 'I built a 3-step revision plan for your upcoming calculus quiz.',
    time: 'Now',
    avatarUrl: 'https://api.dicebear.com/9.x/bottts/svg?seed=AITutor',
    unread: true,
    priority: 'High',
    channel: 'AI Tutor',
    messages: [
      { id: 'm1', sender: 'AI Tutor', text: 'I analyzed your recent calculus attempts and identified three high-impact gaps: chain rule under nested functions, trigonometric substitution setup, and careless sign transitions in derivative simplification.', time: '8:02 AM' },
      { id: 'm2', sender: 'You', text: 'That matches what I felt during the quiz. Can you prioritize those in a short plan?', time: '8:04 AM', fromSelf: true },
      { id: 'm3', sender: 'AI Tutor', text: 'Yes. Step 1: 12-minute concept refresh on chain rule with composite functions. Step 2: 15-minute focused drill on trig substitutions. Step 3: 10-minute error-check pass where every line rewrite is validated for sign changes.', time: '8:06 AM' },
      { id: 'm4', sender: 'AI Tutor', text: 'I also noticed that your speed drops after question 7. That usually indicates cognitive load from context switching, so I recommend grouping similar question types in one block before mixing them.', time: '8:07 AM' },
      { id: 'm5', sender: 'You', text: 'Can we make it exam-style at the end? I want pressure simulation.', time: '8:08 AM', fromSelf: true },
      { id: 'm6', sender: 'AI Tutor', text: 'Absolutely. Final phase: 18-minute mixed mini-assessment with no hints, then a 7-minute post-mortem where we map every miss to concept, process, or attention error.', time: '8:10 AM' },
      { id: 'm7', sender: 'AI Tutor', text: 'If you follow this sequence today, I project a 6-9% score lift within your next two quiz sessions, based on your current baseline and historical correction speed.', time: '8:11 AM' },
      { id: 'm8', sender: 'You', text: 'Perfect. Please generate the practice set now and add a checklist.', time: '8:12 AM', fromSelf: true },
      { id: 'm9', sender: 'AI Tutor', text: 'Generated. I attached: practice set A (24 questions), chain rule micro-cards (14 cards), and a completion checklist with timing windows and review checkpoints.', time: '8:13 AM' },
      { id: 'm10', sender: 'AI Tutor', text: "When you finish, send your score split by section and I will tune tomorrow's block automatically.", time: '8:14 AM' },
    ],
  },
  {
    id: 'maya-ch5',
    from: 'Maya Lin',
    preview: 'Can we split Chapter 5 and compare notes tonight at 8:30?',
    time: '1h ago',
    avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=MayaLin',
    unread: true,
    priority: 'Normal',
    channel: 'Peer',
    messages: [
      { id: 'm1', sender: 'Maya Lin', text: "I reviewed Chapter 5 and highlighted sections 5.2 and 5.4 because they map directly to Friday's quiz rubric.", time: '7:01 PM' },
      { id: 'm2', sender: 'You', text: 'Great. I can take 5.1 and 5.3, then we compare summaries?', time: '7:03 PM', fromSelf: true },
      { id: 'm3', sender: 'Maya Lin', text: "Yes. Let's also create 5 challenge questions each so we can test understanding instead of just reading notes.", time: '7:04 PM' },
      { id: 'm4', sender: 'You', text: 'Good idea. Should we focus on definitions first or application problems?', time: '7:05 PM', fromSelf: true },
      { id: 'm5', sender: 'Maya Lin', text: 'Application first. Definitions are easier to patch quickly, but application mistakes usually reveal deeper misunderstandings.', time: '7:06 PM' },
      { id: 'm6', sender: 'Maya Lin', text: "I can join at 8:30. I'll bring a one-page summary and a short whiteboard flow for the toughest concept transitions.", time: '7:07 PM' },
      { id: 'm7', sender: 'You', text: "Nice. I'll prep examples that mix concepts from 5.2 and 5.4, since those usually show up together.", time: '7:08 PM', fromSelf: true },
      { id: 'm8', sender: 'Maya Lin', text: "Perfect. After we finish, let's create a shared flashcard deck so we can do quick revision tomorrow morning.", time: '7:09 PM' },
      { id: 'm9', sender: 'You', text: "Deal. Send your draft when ready and I'll annotate before the session.", time: '7:10 PM', fromSelf: true },
      { id: 'm10', sender: 'Maya Lin', text: 'Sending in 20 min. This should make Friday much smoother.', time: '7:11 PM' },
    ],
  },
  {
    id: 'mentor-weekly',
    from: 'Course Mentor',
    preview: 'Great progress this week. Your quiz accuracy improved by 6%.',
    time: 'Yesterday',
    avatarUrl: 'https://api.dicebear.com/9.x/personas/svg?seed=Mentor',
    unread: false,
    priority: 'Normal',
    channel: 'Mentor',
    messages: [
      { id: 'm1', sender: 'Course Mentor', text: 'I reviewed your weekly dashboard. Strong consistency overall, with notable gains in completion rate and quiz confidence.', time: '9:12 AM' },
      { id: 'm2', sender: 'You', text: 'Thanks. Which area should I prioritize next week?', time: '9:15 AM', fromSelf: true },
      { id: 'm3', sender: 'Course Mentor', text: 'Planner execution quality. You schedule well, but rescheduling frequency is high around evening blocks. Consider shorter, protected sessions.', time: '9:17 AM' },
      { id: 'm4', sender: 'Course Mentor', text: 'Also, your assessment recovery is excellent: after sub-85 quiz results, you rebound quickly with targeted revision. Keep that cycle.', time: '9:18 AM' },
      { id: 'm5', sender: 'You', text: 'Should I reduce weekly goals to avoid overplanning?', time: '9:20 AM', fromSelf: true },
      { id: 'm6', sender: 'Course Mentor', text: 'Reduce breadth, not ambition. Keep 3 major goals but convert each into daily micro-milestones with explicit completion criteria.', time: '9:22 AM' },
      { id: 'm7', sender: 'Course Mentor', text: 'For this week: prioritize calculus error elimination, chemistry retention stability, and one full-length mixed quiz by Thursday.', time: '9:23 AM' },
      { id: 'm8', sender: 'You', text: "Understood. I'll update my planner and share tonight.", time: '9:24 AM', fromSelf: true },
      { id: 'm9', sender: 'Course Mentor', text: "Great. Send it before 8 PM and I'll give you quick feedback so you can start tomorrow with a clear plan.", time: '9:25 AM' },
    ],
  },
  {
    id: 'ai-probability',
    from: 'AI Tutor',
    preview: 'You missed two probability concepts. Want a quick 10-min booster?',
    time: 'Yesterday',
    avatarUrl: 'https://api.dicebear.com/9.x/bottts/svg?seed=AITutor',
    unread: false,
    priority: 'High',
    channel: 'AI Tutor',
    messages: [
      { id: 'm1', sender: 'AI Tutor', text: 'I detected repeated misses on probability questions involving conditional statements and event dependency assumptions.', time: '6:41 PM' },
      { id: 'm2', sender: 'You', text: 'Can we isolate exactly where I am going wrong?', time: '6:42 PM', fromSelf: true },
      { id: 'm3', sender: 'AI Tutor', text: 'Main issue: you sometimes apply independent-event formulas when the prompt implies dependence. Your setup is strong, but equation selection drifts under time pressure.', time: '6:43 PM' },
      { id: 'm4', sender: 'AI Tutor', text: 'I prepared a progression: 6 conceptual checks, 8 medium examples, then 5 exam-like mixed prompts with distractors.', time: '6:44 PM' },
      { id: 'm5', sender: 'You', text: 'Add explanation-first mode for the first half please.', time: '6:45 PM', fromSelf: true },
      { id: 'm6', sender: 'AI Tutor', text: 'Done. First 7 items now include reasoning walk-through and why alternatives are wrong. Last 12 are strict exam mode.', time: '6:46 PM' },
      { id: 'm7', sender: 'AI Tutor', text: 'After completion, we should create a 10-card retention set focused on trigger words that indicate dependence versus independence.', time: '6:47 PM' },
      { id: 'm8', sender: 'You', text: 'Great. I will complete the set in 25 minutes and send results.', time: '6:48 PM', fromSelf: true },
      { id: 'm9', sender: 'AI Tutor', text: 'Perfect. I will remain in analysis mode and generate a personalized correction report as soon as you submit.', time: '6:49 PM' },
      { id: 'm10', sender: 'AI Tutor', text: 'Reminder: focus on interpreting problem wording before touching equations. That single habit will significantly reduce avoidable errors.', time: '6:50 PM' },
    ],
  },
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
  { label: 'Profile', path: '/dashboard/profile' },
]





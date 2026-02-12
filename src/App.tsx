import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const LandingPage = lazy(() => import('./pages/LandingPage').then((m) => ({ default: m.LandingPage })))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage').then((m) => ({ default: m.FeaturesPage })))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then((m) => ({ default: m.HowItWorksPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const FAQPage = lazy(() => import('./pages/FAQPage').then((m) => ({ default: m.FAQPage })))
const HelpPage = lazy(() => import('./pages/HelpPage').then((m) => ({ default: m.HelpPage })))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })))
const PricingPage = lazy(() => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })))
const SignInPage = lazy(() => import('./pages/SignInPage').then((m) => ({ default: m.SignInPage })))

const DashboardPage = lazy(() => import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage })))
const CoursesPage = lazy(() => import('./pages/CoursesPage').then((m) => ({ default: m.CoursesPage })))
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage').then((m) => ({ default: m.FlashcardsPage })))
const QuizzesPage = lazy(() => import('./pages/QuizzesPage').then((m) => ({ default: m.QuizzesPage })))
const PlannerPage = lazy(() => import('./pages/PlannerPage').then((m) => ({ default: m.PlannerPage })))
const AssignmentsPage = lazy(() => import('./pages/AssignmentsPage').then((m) => ({ default: m.AssignmentsPage })))
const StudyRoomPage = lazy(() => import('./pages/StudyRoomPage').then((m) => ({ default: m.StudyRoomPage })))
const MessagesPage = lazy(() => import('./pages/MessagesPage').then((m) => ({ default: m.MessagesPage })))
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage').then((m) => ({ default: m.AnalyticsPage })))
const BillingPage = lazy(() => import('./pages/BillingPage').then((m) => ({ default: m.BillingPage })))
const SettingsPage = lazy(() => import('./pages/SettingsPage').then((m) => ({ default: m.SettingsPage })))
const ProfilePage = lazy(() => import('./pages/ProfilePage').then((m) => ({ default: m.ProfilePage })))

const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

const LoadingScreen = () => <div className="min-h-screen bg-[#080516]" />

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<FeaturesPage />} path="/features" />
        <Route element={<HowItWorksPage />} path="/how-it-works" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<FAQPage />} path="/faq" />
        <Route element={<HelpPage />} path="/help" />
        <Route element={<PrivacyPage />} path="/privacy" />
        <Route element={<TermsPage />} path="/terms" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<SignInPage />} path="/signin" />

        <Route element={<DashboardPage />} path="/dashboard" />
        <Route element={<CoursesPage />} path="/dashboard/courses" />
        <Route element={<FlashcardsPage />} path="/dashboard/flashcards" />
        <Route element={<QuizzesPage />} path="/dashboard/quizzes" />
        <Route element={<PlannerPage />} path="/dashboard/planner" />
        <Route element={<AssignmentsPage />} path="/dashboard/assignments" />
        <Route element={<StudyRoomPage />} path="/dashboard/study-room" />
        <Route element={<MessagesPage />} path="/dashboard/messages" />
        <Route element={<AnalyticsPage />} path="/dashboard/analytics" />
        <Route element={<BillingPage />} path="/dashboard/billing" />
        <Route element={<SettingsPage />} path="/dashboard/settings" />
        <Route element={<ProfilePage />} path="/dashboard/profile" />

        <Route element={<Navigate replace to="/dashboard" />} path="/app" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Suspense>
  )
}

export default App

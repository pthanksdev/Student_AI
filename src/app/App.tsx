import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const LandingPage = lazy(() => import('@features/marketing/pages/LandingPage').then((m) => ({ default: m.LandingPage })))
const FeaturesPage = lazy(() => import('@features/marketing/pages/FeaturesPage').then((m) => ({ default: m.FeaturesPage })))
const HowItWorksPage = lazy(() => import('@features/marketing/pages/HowItWorksPage').then((m) => ({ default: m.HowItWorksPage })))
const AboutPage = lazy(() => import('@features/marketing/pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const BlogPage = lazy(() => import('@features/marketing/pages/BlogPage').then((m) => ({ default: m.BlogPage })))
const ContactPage = lazy(() => import('@features/marketing/pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const FAQPage = lazy(() => import('@features/marketing/pages/FAQPage').then((m) => ({ default: m.FAQPage })))
const HelpPage = lazy(() => import('@features/marketing/pages/HelpPage').then((m) => ({ default: m.HelpPage })))
const PrivacyPage = lazy(() => import('@features/marketing/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('@features/marketing/pages/TermsPage').then((m) => ({ default: m.TermsPage })))
const PricingPage = lazy(() => import('@features/marketing/pages/PricingPage').then((m) => ({ default: m.PricingPage })))
const SignInPage = lazy(() => import('@features/auth/pages/SignInPage').then((m) => ({ default: m.SignInPage })))

const DashboardPage = lazy(() => import('@features/dashboard/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })))
const CoursesPage = lazy(() => import('@features/dashboard/pages/CoursesPage').then((m) => ({ default: m.CoursesPage })))
const FlashcardsPage = lazy(() => import('@features/dashboard/pages/FlashcardsPage').then((m) => ({ default: m.FlashcardsPage })))
const QuizzesPage = lazy(() => import('@features/dashboard/pages/QuizzesPage').then((m) => ({ default: m.QuizzesPage })))
const PlannerPage = lazy(() => import('@features/dashboard/pages/PlannerPage').then((m) => ({ default: m.PlannerPage })))
const AssignmentsPage = lazy(() => import('@features/dashboard/pages/AssignmentsPage').then((m) => ({ default: m.AssignmentsPage })))
const StudyRoomPage = lazy(() => import('@features/dashboard/pages/StudyRoomPage').then((m) => ({ default: m.StudyRoomPage })))
const MessagesPage = lazy(() => import('@features/dashboard/pages/MessagesPage').then((m) => ({ default: m.MessagesPage })))
const MessageThreadPage = lazy(() => import('@features/dashboard/pages/MessageThreadPage').then((m) => ({ default: m.MessageThreadPage })))
const MessageQuickReplyPage = lazy(() => import('@features/dashboard/pages/MessageQuickReplyPage').then((m) => ({ default: m.MessageQuickReplyPage })))
const AnalyticsPage = lazy(() => import('@features/dashboard/pages/AnalyticsPage').then((m) => ({ default: m.AnalyticsPage })))
const BillingPage = lazy(() => import('@features/dashboard/pages/BillingPage').then((m) => ({ default: m.BillingPage })))
const SettingsPage = lazy(() => import('@features/dashboard/pages/SettingsPage').then((m) => ({ default: m.SettingsPage })))
const ProfilePage = lazy(() => import('@features/dashboard/pages/ProfilePage').then((m) => ({ default: m.ProfilePage })))

const NotFoundPage = lazy(() => import('@features/system/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

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
        <Route element={<MessageThreadPage />} path="/dashboard/messages/thread/:threadId" />
        <Route element={<MessageQuickReplyPage />} path="/dashboard/messages/quick-reply/:threadId" />
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

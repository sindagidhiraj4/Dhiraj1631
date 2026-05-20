import {
  type ComponentType,
  startTransition,
  useEffect,
  useEffectEvent,
  useState,
  type FormEvent,
} from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  House,
  Layers3,
  LayoutGrid,
  Lightbulb,
  Mail,
  Menu,
  MoonStar,
  Send,
  Server,
  Sparkles,
  SunMedium,
  Trophy,
  UserRound,
  Waypoints,
  X,
  type LucideIcon,
} from 'lucide-react'

type ThemeMode = 'dark' | 'light'

type NavLink = {
  id: string
  label: string
}

type MetricCard = {
  value: string
  label: string
  note: string
  icon: LucideIcon
}

type SkillCard = {
  name: string
  level: number
  icon: LucideIcon
  description: string
  accent: string
}

type ProjectCard = {
  title: string
  stack: string[]
  description: string
  category: string
  gradient: string
  githubUrl: string
  demoUrl: string
}

type TimelineCard = {
  title: string
  period: string
  description: string
  icon: LucideIcon
}

type CertificationCard = {
  title: string
  issuer: string
  year: string
  summary: string
}

type ProfileCard = {
  title: string
  handle: string
  summary: string
  url: string
  icon: ComponentType<{ size?: number }>
}

type SocialLink = {
  label: string
  href: string
  icon: ComponentType<{ size?: number }>
}

const navigation: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const heroTypingWords = [
  'Building sleek full stack products',
  'Exploring AI-powered user experiences',
  'Turning ideas into production-ready interfaces',
]

const metrics: MetricCard[] = [
  {
    value: '12+',
    label: 'Projects Completed',
    note: 'End-to-end academic, AI, and product experiments',
    icon: LayoutGrid,
  },
  {
    value: '18+',
    label: 'Technologies Learned',
    note: 'Frontend, backend, deployment, and tooling stack',
    icon: Layers3,
  },
  {
    value: '8+',
    label: 'Certifications',
    note: 'Workshops, online programs, and practical training',
    icon: Award,
  },
]

const skills: SkillCard[] = [
  { name: 'HTML', level: 96, icon: House, description: 'Semantic, accessible markup systems', accent: 'from-sky-400 to-cyan-300' },
  { name: 'CSS', level: 93, icon: Sparkles, description: 'Responsive UI systems and polished motion', accent: 'from-cyan-400 to-blue-400' },
  { name: 'JavaScript', level: 92, icon: Code2, description: 'Interactive apps and application logic', accent: 'from-amber-300 to-orange-400' },
  { name: 'React', level: 90, icon: Waypoints, description: 'Component architecture with modern patterns', accent: 'from-blue-400 to-indigo-400' },
  { name: 'Node.js', level: 88, icon: Server, description: 'API workflows and server-side foundations', accent: 'from-emerald-400 to-green-500' },
  { name: 'Express.js', level: 86, icon: BriefcaseBusiness, description: 'REST APIs and backend routing layers', accent: 'from-teal-400 to-emerald-500' },
  { name: 'MongoDB', level: 84, icon: Database, description: 'Schema design and document data modeling', accent: 'from-green-400 to-lime-400' },
  { name: 'Python', level: 80, icon: BrainCircuit, description: 'Automation, scripting, and AI exploration', accent: 'from-violet-400 to-fuchsia-500' },
  { name: 'C Programming', level: 78, icon: Trophy, description: 'Core programming logic and memory basics', accent: 'from-slate-300 to-slate-500' },
  { name: 'Java', level: 77, icon: BadgeCheck, description: 'Object-oriented concepts and problem solving', accent: 'from-orange-400 to-rose-400' },
  { name: 'Git & GitHub', level: 88, icon: Code2, description: 'Version control, collaboration, and shipping', accent: 'from-zinc-300 to-zinc-500' },
  { name: 'AI Tools', level: 85, icon: Lightbulb, description: 'Rapid prototyping with intelligent systems', accent: 'from-pink-400 to-purple-500' },
]

const projects: ProjectCard[] = [
  {
    title: 'Easy Track AI',
    stack: ['React', 'Node.js', 'MongoDB', 'AI'],
    description:
      'An intelligent expense tracking platform with predictive insights, clean dashboards, and streamlined budget monitoring.',
    category: 'Expense Tracking AI Platform',
    gradient: 'from-cyan-500/30 via-blue-500/20 to-transparent',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
  {
    title: 'Smart Tracker Earn Money Platform',
    stack: ['React', 'Express', 'MongoDB', 'Analytics'],
    description:
      'A smart productivity and earning workflow platform designed to track goals, incentives, and user engagement.',
    category: 'Growth Platform',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-transparent',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
  {
    title: 'Campus AI Chatbot',
    stack: ['Python', 'NLP', 'React', 'APIs'],
    description:
      'A campus support assistant that helps students discover information, resources, and academic guidance conversationally.',
    category: 'Conversational AI',
    gradient: 'from-fuchsia-500/30 via-violet-500/20 to-transparent',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
  {
    title: 'E-commerce Website',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    description:
      'A complete commerce experience with product discovery, cart workflows, authentication, and scalable backend APIs.',
    category: 'Full Stack Product',
    gradient: 'from-amber-500/30 via-orange-500/20 to-transparent',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
  {
    title: 'Queue Management System',
    stack: ['JavaScript', 'Express', 'MongoDB', 'UI Design'],
    description:
      'A digital queue orchestration system focused on smoother footfall management, faster updates, and better service flow.',
    category: 'Operational System',
    gradient: 'from-rose-500/30 via-pink-500/20 to-transparent',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
]

const timeline: TimelineCard[] = [
  {
    title: 'BCA Student',
    period: 'Present',
    description:
      'Building a strong computer applications foundation while blending academic learning with hands-on product development.',
    icon: GraduationCap,
  },
  {
    title: 'Learning Full Stack Development',
    period: 'Ongoing',
    description:
      'Advancing through React, Node.js, Express, MongoDB, authentication systems, and modern deployment practices.',
    icon: Code2,
  },
  {
    title: 'AI Projects Experience',
    period: 'Recent Work',
    description:
      'Experimenting with practical AI features, assistant workflows, analytics, and intelligent interfaces for real use cases.',
    icon: BrainCircuit,
  },
  {
    title: 'Certifications and Workshops',
    period: 'Continuous Learning',
    description:
      'Expanding industry awareness through online certifications, portfolio projects, and technology workshops.',
    icon: Award,
  },
]

const certifications: CertificationCard[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Professional Learning Program',
    year: '2026',
    summary: 'Focused on React, Node.js, Express, APIs, authentication, and real-world web application architecture.',
  },
  {
    title: 'AI Tools & Productivity Workflows',
    issuer: 'Industry Workshop Series',
    year: '2026',
    summary: 'Applied AI-assisted workflows for ideation, content generation, automation, and product experimentation.',
  },
  {
    title: 'JavaScript Problem Solving',
    issuer: 'Developer Practice Lab',
    year: '2025',
    summary: 'Strengthened debugging, logic building, ES6 fundamentals, and browser-side application development.',
  },
]

const profileCards: ProfileCard[] = [
  {
    title: 'GitHub',
    handle: 'Code portfolio and repositories',
    summary: 'A place to showcase clean source code, experiments, and shipping discipline.',
    url: 'https://github.com/',
    icon: Code2,
  },
  {
    title: 'LinkedIn',
    handle: 'Professional presence and networking',
    summary: 'Share milestones, connect with developers, and document the learning journey.',
    url: 'https://www.linkedin.com/',
    icon: BriefcaseBusiness,
  },
  {
    title: 'LeetCode',
    handle: 'Problem solving and DSA practice',
    summary: 'Track consistency in algorithms, logic building, and coding interview preparation.',
    url: 'https://leetcode.com/',
    icon: Trophy,
  },
  {
    title: 'HackerRank',
    handle: 'Skill verification and coding challenges',
    summary: 'Demonstrate programming fluency through curated challenges and structured assessments.',
    url: 'https://www.hackerrank.com/',
    icon: Globe,
  },
]

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Sparkles },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
]

const particles = [
  { top: '8%', left: '10%', size: 8, delay: '0s', duration: '13s' },
  { top: '14%', left: '78%', size: 10, delay: '2s', duration: '15s' },
  { top: '22%', left: '42%', size: 6, delay: '1s', duration: '16s' },
  { top: '35%', left: '87%', size: 12, delay: '0s', duration: '18s' },
  { top: '44%', left: '18%', size: 9, delay: '3s', duration: '14s' },
  { top: '52%', left: '62%', size: 7, delay: '1.4s', duration: '17s' },
  { top: '66%', left: '8%', size: 11, delay: '2.5s', duration: '19s' },
  { top: '72%', left: '71%', size: 8, delay: '0.8s', duration: '13s' },
  { top: '82%', left: '30%', size: 6, delay: '2.2s', duration: '15s' },
  { top: '90%', left: '55%', size: 10, delay: '1.8s', duration: '20s' },
]

const sectionHeading: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursor, setCursor] = useState({ x: -120, y: -120 })
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const typedText = heroTypingWords[wordIndex].slice(0, charIndex)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  const updateScrollProgress = useEffectEvent(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const currentProgress =
      scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0

    setScrollProgress(currentProgress)
  })

  const updateCursorPosition = useEffectEvent((event: MouseEvent) => {
    setCursor({
      x: event.clientX,
      y: event.clientY,
    })
  })

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('mousemove', updateCursorPosition)
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [updateCursorPosition, updateScrollProgress])

  useEffect(() => {
    const activeWord = heroTypingWords[wordIndex]
    const shouldPause = !isDeleting && charIndex === activeWord.length
    const shouldSwitchWord = isDeleting && charIndex === 0

    if (shouldSwitchWord) {
      const resetTimer = window.setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((currentIndex) => (currentIndex + 1) % heroTypingWords.length)
      }, 220)

      return () => window.clearTimeout(resetTimer)
    }

    const timeout = shouldPause ? 1450 : isDeleting ? 45 : 85

    const timer = window.setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true)
        return
      }

      setCharIndex((currentIndex) =>
        isDeleting ? currentIndex - 1 : currentIndex + 1
      )
    }, timeout)

    return () => window.clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    startTransition(() => setMenuOpen(false))
  }

  const handleResumeDownload = () => {
    const resumeContent = `Dhiraj Sindagi

BCA Student | Full Stack Developer | AI Enthusiast

Core Areas:
- React.js
- Node.js
- Express.js
- MongoDB
- JavaScript
- Python
- AI Tools

Featured Projects:
- Easy Track AI
- Smart Tracker Earn Money Platform
- Campus AI Chatbot
- E-commerce Website
- Queue Management System

Summary:
Dhiraj Sindagi is focused on building premium web applications, exploring AI-powered product ideas, and growing into a high-impact software engineer.`

    const blob = new Blob([resumeContent], {
      type: 'text/plain;charset=utf-8',
    })
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = blobUrl
    link.download = 'Dhiraj-Sindagi-Resume.txt'
    link.click()
    URL.revokeObjectURL(blobUrl)
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      message: '',
    })

    window.setTimeout(() => setSubmitted(false), 3600)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={`${particle.top}-${particle.left}-${index}`}
            className="particle"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      />

      <AnimatePresence>
        {loading ? (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              className="h-20 w-20 rounded-full border border-white/20 border-t-cyan-300"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-sm uppercase tracking-[0.35em] text-white/70"
            >
              Loading premium interface
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        className="fixed left-0 top-0 z-50 h-1.5 origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 shadow-[0_0_24px_rgba(56,189,248,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="glass-card flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                DS
              </span>
              <span>
                <span className="block font-heading text-base font-semibold tracking-wide text-[var(--text-primary)]">
                  Dhiraj Sindagi
                </span>
                <span className="block text-xs uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                  Portfolio
                </span>
              </span>
            </button>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setTheme((currentTheme) =>
                    currentTheme === 'dark' ? 'light' : 'dark'
                  )
                }
                className="icon-button hidden sm:flex"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="primary-chip hidden lg:flex"
              >
                Let&apos;s Talk
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen((currentOpen) => !currentOpen)}
                className="icon-button lg:hidden"
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[color:var(--surface-strong)]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-[var(--text-primary)] transition hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setTheme((currentTheme) =>
                      currentTheme === 'dark' ? 'light' : 'dark'
                    )
                  }
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-[var(--text-primary)]"
                >
                  {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
                  Switch Theme
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section
          id="hero"
          className="mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8"
        >
          <div className="grid w-full gap-14 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-8"
            >
              <span className="section-kicker">
                <Sparkles size={16} />
                Premium software engineer portfolio
              </span>
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.38em] text-[var(--text-secondary)]">
                  Hi, I&apos;m
                </p>
                <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
                  Dhiraj
                  <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                    Sindagi
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                  BCA Student | Full Stack Developer | AI Enthusiast
                </p>
              </div>

              <div className="glass-card flex min-h-[72px] items-center rounded-3xl px-6 py-5">
                <span className="mr-4 rounded-full bg-cyan-400/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
                  Typing
                </span>
                <p className="font-heading text-lg text-[var(--text-primary)] sm:text-xl">
                  {typedText}
                  <span className="blink-caret">|</span>
                </p>
              </div>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                I build polished, intelligent digital experiences with a focus on
                clean architecture, modern UI systems, and product thinking. My
                goal is to grow into a high-impact engineer working on platforms
                that blend user experience, data, and AI.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="cta-primary"
                >
                  View Projects
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleResumeDownload}
                  className="cta-secondary"
                >
                  <Download size={18} />
                  Download Resume
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="cta-secondary"
                >
                  <Send size={18} />
                  Contact Me
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <motion.article
                    key={metric.label}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="glass-card rounded-3xl p-5"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-cyan-200">
                      <metric.icon size={20} />
                    </div>
                    <p className="font-heading text-3xl font-bold text-[var(--text-primary)]">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                      {metric.note}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="hero-orb hero-orb-left" />
              <div className="hero-orb hero-orb-right" />

              <div className="glass-card relative w-full max-w-xl overflow-hidden rounded-[2rem] p-7 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500" />
                <div className="grid gap-6">
                  <div className="rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                          Developer Identity
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--text-primary)]">
                          Building futuristic products with a clean engineering mindset
                        </h2>
                      </div>
                      <div className="pulse-badge">
                        <BrainCircuit size={18} />
                      </div>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(3,8,20,0.72),rgba(8,16,31,0.22))] p-5">
                        <div className="mb-8 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="avatar-shell">
                              <span>DS</span>
                            </div>
                            <div>
                              <p className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                                Dhiraj Sindagi
                              </p>
                              <p className="text-sm text-[var(--text-secondary)]">
                                React, backend systems, and AI workflows
                              </p>
                            </div>
                          </div>
                          <div className="grid gap-3">
                            <div className="tech-chip">Frontend Systems</div>
                            <div className="tech-chip">Scalable APIs</div>
                            <div className="tech-chip">AI Experimentation</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="glass-card rounded-[1.5rem] p-4">
                          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                            Current Focus
                          </p>
                          <p className="mt-3 text-sm leading-6 text-[var(--text-primary)]">
                            Shipping sleek full stack experiences that feel fast,
                            premium, and human-centered.
                          </p>
                        </div>
                        <div className="glass-card rounded-[1.5rem] p-4">
                          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                            Build Stack
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {['React', 'Node', 'MongoDB', 'TypeScript'].map((chip) => (
                              <span key={chip} className="status-pill">
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="glass-card rounded-[1.5rem] p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Design Language
                      </p>
                      <p className="mt-3 font-heading text-xl font-semibold text-[var(--text-primary)]">
                        Apple sharpness. Tesla restraint. SaaS precision.
                      </p>
                    </div>
                    <div className="glass-card rounded-[1.5rem] p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Development Style
                      </p>
                      <p className="mt-3 font-heading text-xl font-semibold text-[var(--text-primary)]">
                        Premium frontend thinking with production-minded structure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <UserRound size={16} />
              About Me
            </span>
            <h2 className="section-title">Crafting software with curiosity, structure, and momentum.</h2>
            <p className="section-copy">
              I&apos;m a BCA student driven by the intersection of design,
              engineering, and intelligent systems. I enjoy creating interfaces
              that feel premium and dependable while steadily deepening my backend
              and AI capabilities.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="icon-bubble">
                  <BrainCircuit size={18} />
                </span>
                <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-secondary)]">
                  Professional Introduction
                </p>
              </div>
              <div className="space-y-5 text-[15px] leading-8 text-[var(--text-secondary)] sm:text-base">
                <p>
                  My learning journey is shaped by a strong interest in web
                  development, product-quality interfaces, and practical uses of
                  AI. I like solving problems through thoughtful UI, modular code,
                  and meaningful iteration.
                </p>
                <p>
                  I&apos;m especially excited by projects where clean frontend
                  systems meet real backend logic, data flows, and intelligent
                  experiences. That combination helps me build toward becoming a
                  full stack engineer who can think both visually and technically.
                </p>
                <p>
                  Long term, I want to contribute to ambitious technology teams
                  building tools that feel elegant, fast, and genuinely useful.
                </p>
              </div>
            </motion.article>

            <div className="grid gap-6">
              {metrics.map((metric, index) => (
                <motion.article
                  key={`about-${metric.label}`}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="glass-card rounded-[2rem] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                        {metric.label}
                      </p>
                      <p className="mt-3 font-heading text-4xl font-bold text-[var(--text-primary)]">
                        {metric.value}
                      </p>
                      <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-muted)]">
                        {metric.note}
                      </p>
                    </div>
                    <span className="icon-bubble">
                      <metric.icon size={20} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <Code2 size={16} />
              Skills
            </span>
            <h2 className="section-title">A modern stack shaped by product building and consistent practice.</h2>
            <p className="section-copy">
              These are the tools and technologies I rely on while building
              responsive interfaces, backend systems, and AI-oriented experiments.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-[1.8rem] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <span className="icon-bubble">
                      <skill.icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">
                        {skill.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-6 progress-track">
                  <motion.div
                    className={`progress-fill bg-gradient-to-r ${skill.accent}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <BriefcaseBusiness size={16} />
              Projects
            </span>
            <h2 className="section-title">A curated collection of full stack and AI-driven builds.</h2>
            <p className="section-copy">
              Each project is presented like a product concept card, with focus on
              functionality, stack clarity, and interaction quality.
            </p>
          </motion.div>

          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass-card group overflow-hidden rounded-[2rem]"
              >
                <div
                  className={`project-visual bg-gradient-to-br ${project.gradient} p-6`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="status-pill">{project.category}</span>
                      <h3 className="mt-5 font-heading text-3xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="icon-bubble border-white/15 bg-white/8 text-white">
                      <Sparkles size={18} />
                    </span>
                  </div>
                  <div className="mt-12 grid grid-cols-3 gap-3">
                    {project.stack.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4 text-center text-xs uppercase tracking-[0.24em] text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="status-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-secondary"
                    >
                      <Code2 size={18} />
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-primary"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <Waypoints size={16} />
              Experience & Education
            </span>
            <h2 className="section-title">A timeline shaped by disciplined learning and hands-on execution.</h2>
            <p className="section-copy">
              My growth path combines academics, project building, technology
              exploration, and continuous industry exposure.
            </p>
          </motion.div>

          <div className="relative ml-4 border-l border-white/10 pl-8 md:ml-8 md:pl-10">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-card relative mb-6 rounded-[1.8rem] p-6 last:mb-0"
              >
                <span className="timeline-node">
                  <item.icon size={18} />
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <span className="status-pill">{item.period}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <Award size={16} />
              Certifications
            </span>
            <h2 className="section-title">Proof of learning, curiosity, and a habit of staying current.</h2>
            <p className="section-copy">
              Certifications help reinforce structured learning, but the focus is
              always on applying those concepts in practical builds.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-[2rem] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="icon-bubble">
                    <BadgeCheck size={18} />
                  </span>
                  <span className="status-pill">{item.year}</span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                  {item.issuer}
                </p>
                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {item.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="profiles" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <Code2 size={16} />
              GitHub & Coding Profiles
            </span>
            <h2 className="section-title">A visible trail of code, practice, and professional presence.</h2>
            <p className="section-copy">
              These profile cards are designed as polished entry points for
              recruiters, collaborators, and mentors to explore the journey.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {profileCards.map((profile, index) => (
              <motion.a
                key={profile.title}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-[1.8rem] p-6 no-underline"
              >
                <span className="icon-bubble">
                  <profile.icon size={20} />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-[var(--text-primary)]">
                  {profile.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  {profile.handle}
                </p>
                <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
                  {profile.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                  Explore
                  <ArrowRight size={16} />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={sectionHeading}
            className="section-header"
          >
            <span className="section-kicker">
              <Mail size={16} />
              Contact
            </span>
            <h2 className="section-title">Let&apos;s connect around product building, frontend craft, or AI ideas.</h2>
            <p className="section-copy">
              This section is designed to feel like the closing screen of a
              product launch site: clean, intentional, and easy to act on.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                    Collaboration
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-semibold text-[var(--text-primary)]">
                    Open to internships, collaborations, and ambitious learning opportunities.
                  </h3>
                </div>
                <p className="text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
                  Whether it&apos;s a student project, freelance concept, or a
                  team looking for a motivated builder, I&apos;m always interested
                  in meaningful conversations around software and growth.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-[var(--text-primary)] transition hover:bg-white/7"
                  >
                    <span className="flex items-center gap-3">
                      <span className="icon-bubble h-10 w-10 rounded-xl">
                        <social.icon size={18} />
                      </span>
                      <span className="font-medium">{social.label}</span>
                    </span>
                    <ArrowRight size={16} className="text-[var(--text-secondary)]" />
                  </a>
                ))}
              </div>
            </motion.aside>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              onSubmit={handleFormSubmit}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-3">
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((currentForm) => ({
                          ...currentForm,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Enter your name"
                      className="form-input"
                      required
                    />
                  </label>

                  <label className="space-y-3">
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((currentForm) => ({
                          ...currentForm,
                          email: event.target.value,
                        }))
                      }
                      placeholder="Enter your email"
                      className="form-input"
                      required
                    />
                  </label>
                </div>

                <label className="space-y-3">
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((currentForm) => ({
                        ...currentForm,
                        message: event.target.value,
                      }))
                    }
                    placeholder="Tell me about your idea, role, or collaboration request"
                    rows={6}
                    className="form-input min-h-[180px] resize-none"
                    required
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="cta-primary w-full sm:w-auto">
                  <Send size={18} />
                  Send Message
                </button>
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  {submitted
                    ? 'Message drafted successfully. Connect details can be wired to a backend next.'
                    : 'Currently configured as a polished frontend form ready for backend integration.'}
                </p>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-[var(--text-secondary)]">
        Designed &amp; Developed by Dhiraj Sindagi
      </footer>
    </div>
  )
}

export default App

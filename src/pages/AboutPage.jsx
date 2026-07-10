import { memo, useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconArrowLeft,
  IconCompass,
  IconBarbell,
  IconLanguage,
  IconTargetArrow,
  IconCamera,
  IconMap,
  IconMapOff,
  IconMountain,
  IconBook2,
} from '@tabler/icons-react'
import { ABOUT_STORY } from '../data/aboutStory'
import { DEVELOPER } from '../data/developer'
import MeshBackground from '../components/background/MeshBackground'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useAppNavigate } from '../context/AppRouterContext'

const IndiaTravelMap = lazy(() => import('../components/about/IndiaTravelMap'))

const PURSUIT_ICONS = {
  calisthenics: IconBarbell,
  german: IconLanguage,
  trekking: IconMountain,
  anime: IconBook2,
}

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

function SectionHeading({ icon: Icon, accent, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: `${accent}1a`, color: accent }}
      >
        <Icon size={20} />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{children}</h2>
    </div>
  )
}

function AboutPage() {
  const reducedMotion = useReducedMotion()
  const { navigate } = useAppNavigate()
  const { intro, travel, pursuits, objectives } = ABOUT_STORY
  const [activeDestination, setActiveDestination] = useState(null)
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      {!reducedMotion && <MeshBackground />}

      <main className="relative z-10 px-4 pb-20 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <IconArrowLeft size={16} />
            Back to portfolio
          </button>

          {/* Hero */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a29dff]">
              <IconCompass size={14} />
              Beyond the Code
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">About Me</h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              {intro}
            </p>
            <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:max-w-md">
              <img
                src="/images/about-forest.png"
                alt="Sahil Kumar in a forest"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          {/* Travel & Photography */}
          <motion.section {...sectionReveal} className="mb-16">
            <SectionHeading icon={IconCamera} accent="#00D9FF">
              {travel.title}
            </SectionHeading>
            <p className="mb-6 leading-relaxed text-white/55">{travel.body}</p>

            <button
              type="button"
              onClick={() => {
                setMapOpen((open) => !open)
                if (mapOpen) setActiveDestination(null)
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/10 px-5 py-2.5 text-sm font-medium text-[#00D9FF] transition-colors hover:bg-[#00D9FF]/20"
            >
              {mapOpen ? <IconMapOff size={18} /> : <IconMap size={18} />}
              {mapOpen ? 'Hide Map' : 'Show Map'}
              {!mapOpen && (
                <span className="text-xs text-[#00D9FF]/60">
                  ({travel.destinations.length} places)
                </span>
              )}
            </button>

            <AnimatePresence>
              {mapOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="mt-6"
                >
                  <Suspense
                    fallback={
                      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] text-sm text-white/40 md:h-[480px]">
                        Loading map…
                      </div>
                    }
                  >
                    <IndiaTravelMap
                      destinations={travel.destinations}
                      activeName={activeDestination}
                      onSelect={setActiveDestination}
                    />
                  </Suspense>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          {/* Beyond the Screen */}
          <motion.section {...sectionReveal} className="mb-16">
            <SectionHeading icon={IconBarbell} accent="#FF6B6B">
              {pursuits.title}
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-2">
              {pursuits.items.map((item) => {
                const Icon = PURSUIT_ICONS[item.id]
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
                  >
                    <span
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${item.accent}1a`, color: item.accent }}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Objectives */}
          <motion.section {...sectionReveal}>
            <SectionHeading icon={IconTargetArrow} accent="#6BCB77">
              {objectives.title}
            </SectionHeading>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-8 md:px-8">
              <p className="text-sm leading-relaxed text-white/70 md:text-base">{objectives.body}</p>
              <a
                href={DEVELOPER.social.email}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(108,99,255,0.35)] transition-transform hover:scale-105"
              >
                Let&apos;s connect
              </a>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

export default memo(AboutPage)

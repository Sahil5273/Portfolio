import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArchitectureFlow from './ArchitectureFlow'
import { CASE_STUDIES } from '../../data/caseStudies'

function Badge({ text, color }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium"
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
    >
      {text}
    </span>
  )
}

function SectionBlock({ title, children, accent }) {
  return (
    <div className="mb-5">
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
        {title}
      </h4>
      {children}
    </div>
  )
}

function CaseStudyCard({ study, expanded, onToggle }) {
  const { key, fullTitle, domain, accent, overview, problem, solution, tech, features, challenges, unique, future, learning } = study

  return (
    <motion.div
      layout
      className="rounded-2xl border overflow-hidden"
      style={{
        background: 'rgba(7,7,26,0.7)',
        borderColor: expanded ? `${accent}22` : 'rgba(255,255,255,0.08)',
        boxShadow: expanded ? `0 8px 32px -12px ${accent}12` : 'none',
      }}
      transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
    >
      <button
        className="w-full text-left px-7 py-6 flex items-start justify-between gap-4 group"
        onClick={() => onToggle(key)}
        aria-expanded={expanded}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: `${accent}20`, color: accent }}
            >
              Domain
            </span>
            <span className="text-[11px] text-white/40">{domain}</span>
          </div>
          <h3 className="text-lg font-bold text-white leading-tight">{fullTitle}</h3>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 flex-shrink-0 text-white/40 group-hover:text-white/70 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-8">
              <div
                className="h-px w-full mb-6"
                style={{ background: `linear-gradient(to right, ${accent}40, transparent)` }}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <SectionBlock title="Overview" accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{overview}</p>
                  </SectionBlock>

                  <SectionBlock title="Problem" accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{problem}</p>
                  </SectionBlock>

                  <SectionBlock title="Solution" accent={accent}>
                    <p className="text-sm text-white/60 leading-relaxed">{solution}</p>
                  </SectionBlock>

                  <SectionBlock title="Tech Stack" accent={accent}>
                    <div className="space-y-2">
                      {Object.entries(tech).map(([cat, items]) => (
                        <div key={cat}>
                          <span className="text-[11px] text-white/30 mr-2">{cat}:</span>
                          <span className="inline-flex flex-wrap gap-1">
                            {items.map((item) => (
                              <Badge key={item} text={item} color={accent} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Key Features" accent={accent}>
                    <ul className="space-y-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: accent }} className="mt-1 text-xs leading-none">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                </div>

                <div>
                  <SectionBlock title="Architecture" accent={accent}>
                    <div
                      className="rounded-xl border p-4"
                      style={{ background: `${accent}08`, borderColor: `${accent}20` }}
                    >
                      <ArchitectureFlow projectKey={key} color={accent} isVisible={expanded} />
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Challenges" accent={accent}>
                    <ul className="space-y-1">
                      {challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: `${accent}80` }} className="mt-0.5 text-xs">⚡</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>

                  <SectionBlock title="What Makes It Unique" accent={accent}>
                    <div className="flex flex-wrap gap-1.5">
                      {unique.map((u) => (
                        <span
                          key={u}
                          className="rounded-lg px-2.5 py-1 text-[11px] text-white/70 border"
                          style={{ borderColor: `${accent}25`, background: `${accent}10` }}
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Future Plans" accent={accent}>
                    <div className="flex flex-wrap gap-1.5">
                      {future.map((f) => (
                        <span key={f} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/40">
                          {f}
                        </span>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Key Learnings" accent={accent}>
                    <ul className="space-y-1">
                      {learning.map((l) => (
                        <li key={l} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: accent }} className="mt-1 text-xs">→</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </SectionBlock>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CaseStudiesSection() {
  const [expandedKey, setExpandedKey] = useState(null)

  const handleToggle = (key) => {
    setExpandedKey((current) => (current === key ? null : key))
  }

  return (
    <section className="relative z-10 px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
            Deep Dives
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Engineering Case Studies
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white/50 leading-relaxed">
            A detailed look at the architecture, decisions, and trade-offs behind selected projects.
          </p>
        </div>

        <div className="space-y-4">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard
              key={study.key}
              study={study}
              expanded={expandedKey === study.key}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(CaseStudiesSection)

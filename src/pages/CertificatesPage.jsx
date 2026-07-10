import { memo, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconArrowLeft, IconAward } from '@tabler/icons-react'
import {
  CERTIFICATE_CATEGORIES,
  CERTIFICATES,
  getCertificatesByCategory,
} from '../data/certificates'
import { DEVELOPER } from '../data/cards'
import MeshBackground from '../components/background/MeshBackground'
import CertificateCard from '../components/certificates/CertificateCard'
import StatCard from '../components/certificates/StatCard'
import CertificateLightbox from '../components/ui/CertificateLightbox'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useAppNavigate } from '../context/AppRouterContext'

function CertificatesPage() {
  const reducedMotion = useReducedMotion()
  const { navigate } = useAppNavigate()
  const [activeCategory, setActiveCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => getCertificatesByCategory(activeCategory),
    [activeCategory],
  )

  const stats = useMemo(
    () => ({
      total: CERTIFICATES.length,
      featured: CERTIFICATES.filter((c) => c.categories.includes('featured')).length,
      cloud: CERTIFICATES.filter((c) => c.categories.includes('cloud-ai')).length,
      verifiable: CERTIFICATES.filter((c) => c.verifyUrl).length,
    }),
    [],
  )

  return (
    <div className="relative min-h-screen">
      {!reducedMotion && <MeshBackground />}

      <main className="relative z-10 px-4 pb-20 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <IconArrowLeft size={16} />
            Back to portfolio
          </button>

          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6BCB77]/30 bg-[#6BCB77]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6BCB77]">
              <IconAward size={14} />
              Credentials Showcase
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Certifications &amp; Achievements
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              Industry-recognized certifications from Microsoft, Oracle, IBM, AWS, Google, and more —
              curated from {DEVELOPER.name}&apos;s professional credentials.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard label="Total Showcased" value={stats.total} accent="#6BCB77" />
            <StatCard label="Featured" value={stats.featured} accent="#FFD93D" />
            <StatCard label="Cloud & AI" value={stats.cloud} accent="#00D9FF" />
            <StatCard label="Verifiable" value={stats.verifiable} accent="#A855F7" />
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {CERTIFICATE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#6C63FF] text-white shadow-[0_0_24px_rgba(108,99,255,0.35)]'
                    : 'border border-white/10 bg-white/5 text-white/55 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-60">
                  ({getCertificatesByCategory(cat.id).length})
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={i}
                variant="detailed"
                onSelect={setSelected}
              />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-white/40">No certificates in this category.</div>
          )}

          <div className="mt-16 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-8 text-center">
            <p className="text-sm text-white/45">
              Showcase includes professional certifications, cloud credentials, and hackathon awards.
              Basic course completions and practice sets are excluded to highlight credentials that
              best represent industry readiness.
            </p>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selected && (
          <CertificateLightbox
            cert={selected}
            onClose={() => setSelected(null)}
            showDescription
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default memo(CertificatesPage)

import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconCertificate, IconTrophy, IconZoomIn } from '@tabler/icons-react'

const CARD_CLASS =
  'group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20'

function CertificateImage({ cert, showBadge = false }) {
  const Icon = cert.type === 'achievement' ? IconTrophy : IconCertificate

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.02]">
      <img
        src={cert.image}
        alt={cert.title}
        className="block h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      {showBadge && (
        <div className="absolute left-3 top-3">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm"
            style={{
              background: `${cert.accent}30`,
              color: cert.accent,
              border: `1px solid ${cert.accent}40`,
            }}
          >
            <Icon size={11} />
            {cert.tier === 'featured' ? 'Featured' : cert.type === 'achievement' ? 'Award' : 'Certified'}
          </span>
        </div>
      )}
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <IconZoomIn size={14} />
      </div>
    </div>
  )
}

function CertificateFooter({ cert, showVerifyHint = false }) {
  return (
    <div className="border-t border-white/8 px-5 py-4">
      <p className="text-sm font-semibold leading-snug text-white">{cert.title}</p>
      <p className="mt-1 text-xs text-white/45">{cert.issuer}</p>
      <p className="mt-1 text-xs text-white/35">{cert.subtitle}</p>
      {showVerifyHint && cert.verifyUrl && (
        <span className="mt-2 inline-block text-[11px] font-medium" style={{ color: cert.accent }}>
          Verifiable credential
        </span>
      )}
    </div>
  )
}

function CertificateCard({ cert, onSelect, variant = 'simple', index = 0 }) {
  const content = (
    <>
      <CertificateImage cert={cert} showBadge={variant === 'detailed'} />
      <CertificateFooter cert={cert} showVerifyHint={variant === 'detailed'} />
    </>
  )

  if (variant === 'detailed') {
    return (
      <motion.button
        type="button"
        onClick={() => onSelect(cert)}
        className={CARD_CLASS}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
      >
        {content}
      </motion.button>
    )
  }

  return (
    <button type="button" onClick={() => onSelect(cert)} className={CARD_CLASS}>
      {content}
    </button>
  )
}

export default memo(CertificateCard)

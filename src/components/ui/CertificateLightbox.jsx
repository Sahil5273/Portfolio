import { memo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconExternalLink, IconX } from '@tabler/icons-react'

function CertificateLightbox({ cert, onClose, showDescription = false }) {
  if (!cert) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[4000] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <IconX size={18} />
          </button>
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c18] shadow-2xl">
            <img src={cert.image} alt={cert.title} className="block w-full" decoding="async" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-white">{cert.title}</h3>
            <p className="mt-1 text-sm text-white/50">
              {cert.issuer} · {cert.subtitle}
            </p>
            {showDescription && cert.description && (
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                {cert.description}
              </p>
            )}
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${showDescription ? 'mt-4 inline-flex items-center gap-1.5' : 'mt-3 inline-block'} text-sm font-medium text-[#8b85ff] hover:underline`}
              >
                Verify credential
                {showDescription && <IconExternalLink size={14} />}
                {!showDescription && ' →'}
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default memo(CertificateLightbox)

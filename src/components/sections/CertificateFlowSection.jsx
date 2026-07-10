import { memo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { IconArrowRight } from '@tabler/icons-react'
import { CERTIFICATES, FEATURED_CERTIFICATES } from '../../data/certificates'
import { useAppNavigate } from '../../context/AppRouterContext'
import CertificateCard from '../certificates/CertificateCard'
import CertificateLightbox from '../ui/CertificateLightbox'

function CertificateFlowSection() {
  const [selected, setSelected] = useState(null)
  const { navigate } = useAppNavigate()

  return (
    <section id="certificates" className="relative z-10 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/35">Credentials</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Certifications &amp; Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
            Featured industry certifications and hackathon awards. Click any certificate to view full size.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURED_CERTIFICATES.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              variant="simple"
              onSelect={setSelected}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => navigate('/certificates')}
            className="inline-flex items-center gap-2 rounded-full border border-[#6BCB77]/40 bg-[#6BCB77]/10 px-6 py-3 text-sm font-semibold text-[#6BCB77] transition-all hover:bg-[#6BCB77]/20"
          >
            View all {CERTIFICATES.length} certificates
            <IconArrowRight size={16} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertificateLightbox cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default memo(CertificateFlowSection)

import { lazy, Suspense, useState, useCallback, useEffect } from 'react'

import { CARDS, DEVELOPER } from '../data/cards'
import { useBreakpoint } from '../hooks/useMediaQuery'
import { useReducedMotion } from '../hooks/useReducedMotion'

import ExpandedOverlay from '../components/cards/ExpandedOverlay'
import TabletGrid from '../components/layout/TabletGrid'
import MobileCarousel from '../components/layout/MobileCarousel'
import PortfolioCard from '../components/cards/PortfolioCard'
import OpenToWorkWidget from '../components/sections/OpenToWorkWidget'
import MeshBackground from '../components/background/MeshBackground'

const CertificateFlowSection = lazy(() => import('../components/sections/CertificateFlowSection'))
const CaseStudiesSection = lazy(() => import('../components/sections/CaseStudiesSection'))

function HomePage({ onCardClick, pendingSection, onPendingSectionHandled }) {
  const { isMobile, isTablet, isDesktop } = useBreakpoint()
  const reducedMotion = useReducedMotion()

  const [hoverId, setHoverId] = useState(null)
  const [activeId, setActiveId] = useState(null)

  const handleHover = useCallback((id) => setHoverId(id), [])
  const handleLeave = useCallback(() => setHoverId(null), [])

  const handleClick = useCallback(
    (id) => {
      setActiveId(id)
      onCardClick?.(id)
    },
    [onCardClick],
  )

  const handleClose = useCallback(() => setActiveId(null), [])

  useEffect(() => {
    if (!pendingSection) return

    if (pendingSection === 'certificates') {
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })
      onPendingSectionHandled?.()
      return
    }

    const index = CARDS.findIndex((c) => c.id === pendingSection || c.navId === pendingSection)
    if (index >= 0) {
      const cardId = CARDS[index].id
      queueMicrotask(() => handleClick(cardId))
    }
    onPendingSectionHandled?.()
  }, [pendingSection, handleClick, onPendingSectionHandled])

  return (
    <>
      {!reducedMotion && <MeshBackground />}

      <main className="relative z-10">
        <section className="px-6 pb-4 pt-28 md:px-8 md:pt-32">
          <div className="mx-auto max-w-5xl text-center hero-reveal">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/35">
              AI/ML Engineer &amp; Full-Stack Developer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              {DEVELOPER.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              {DEVELOPER.shortBio}
            </p>
          </div>
        </section>

        {(isTablet || isDesktop) && !reducedMotion && (
          <TabletGrid
            hoverId={hoverId}
            onHover={handleHover}
            onLeave={handleLeave}
            onClick={handleClick}
          />
        )}

        {isMobile && <MobileCarousel onClick={handleClick} cardsVisible />}

        {reducedMotion && (
          <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CARDS.map((card, i) => (
              <PortfolioCard
                key={card.id}
                card={card}
                index={i}
                onClick={handleClick}
                animateIn={false}
                layoutMode={isMobile ? 'mobile' : 'tablet'}
              />
            ))}
          </div>
        )}

        <OpenToWorkWidget />

        <Suspense fallback={null}>
          <CertificateFlowSection />
          <CaseStudiesSection />
        </Suspense>
      </main>

      {activeId && <ExpandedOverlay activeId={activeId} onClose={handleClose} />}
    </>
  )
}

export default HomePage

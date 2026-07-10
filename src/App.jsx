import { useState, useCallback, lazy, Suspense } from 'react'

import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import { useAppRouter } from './hooks/useAppRouter'
import { useNavbarScroll } from './hooks/useNavbarScroll'
import { AppRouterContext } from './context/AppRouterContext'
import { CARDS } from './data/cards'

const CertificatesPage = lazy(() => import('./pages/CertificatesPage'))

function App() {
  const router = useAppRouter()
  const { page, navigate } = router
  const [activeSection, setActiveSection] = useState('about')
  const [pendingSection, setPendingSection] = useState(null)
  const scrolled = useNavbarScroll()

  const handleNavClick = useCallback(
    (id) => {
      if (id === 'certificates') {
        setActiveSection(id)
        navigate('/certificates')
        return
      }

      if (page !== 'home') {
        setPendingSection(id)
        setActiveSection(id)
        navigate('/')
        return
      }

      setActiveSection(id)
      const index = CARDS.findIndex((c) => c.id === id || c.navId === id)
      if (index >= 0) {
        setPendingSection(CARDS[index].id)
      }
    },
    [page, navigate],
  )

  const handleCardClick = useCallback((id) => {
    setActiveSection(id)
  }, [])

  return (
    <AppRouterContext.Provider value={router}>
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        scrolled={scrolled}
      />

      {page === 'certificates' ? (
        <Suspense fallback={null}>
          <CertificatesPage />
        </Suspense>
      ) : (
        <HomePage
          onCardClick={handleCardClick}
          pendingSection={pendingSection}
          onPendingSectionHandled={() => setPendingSection(null)}
        />
      )}
    </AppRouterContext.Provider>
  )
}

export default App

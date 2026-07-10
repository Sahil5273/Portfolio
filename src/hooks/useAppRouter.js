import { useState, useEffect, useCallback } from 'react'

function normalizePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return path
}

const PATH_TO_PAGE = {
  '/certificates': 'certificates',
  '/about': 'about',
}

export function getPageFromPath(pathname = window.location.pathname) {
  return PATH_TO_PAGE[normalizePath(pathname)] ?? 'home'
}

export function useAppRouter() {
  const [page, setPage] = useState(() => getPageFromPath())

  useEffect(() => {
    const syncPage = () => setPage(getPageFromPath())
    window.addEventListener('popstate', syncPage)
    return () => window.removeEventListener('popstate', syncPage)
  }, [])

  const navigate = useCallback((path) => {
    const nextPath = path.startsWith('/') ? path : `/${path}`
    if (normalizePath(window.location.pathname) === normalizePath(nextPath)) {
      setPage(getPageFromPath(nextPath))
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    window.history.pushState({}, '', nextPath)
    setPage(getPageFromPath(nextPath))
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return { page, navigate }
}

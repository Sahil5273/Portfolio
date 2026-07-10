import { createContext, useContext } from 'react'

export const AppRouterContext = createContext(null)

export function useAppNavigate() {
  const ctx = useContext(AppRouterContext)
  if (!ctx) {
    throw new Error('useAppNavigate must be used within AppRouterContext.Provider')
  }
  return ctx
}

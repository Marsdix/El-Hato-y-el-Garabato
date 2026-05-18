import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const SectionContext = createContext(null)

export function SectionProvider({ children }) {
  const [sections, setSections] = useState([])

  const registerSections = useCallback((arr) => {
    setSections(arr)
    return () => setSections([])
  }, [])

  return (
    <SectionContext.Provider value={{ sections, registerSections }}>
      {children}
    </SectionContext.Provider>
  )
}

export function useSections() {
  return useContext(SectionContext).sections
}

export function useRegisterSections(arr) {
  const { registerSections } = useContext(SectionContext)
  useEffect(() => {
    const cleanup = registerSections(arr)
    return cleanup
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

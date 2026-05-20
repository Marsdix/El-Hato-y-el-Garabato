import { useState, useEffect, useRef } from 'react'
import { client } from '../lib/sanityClient'

/**
 * Fetches data from Sanity and falls back to initialData if:
 *   - the fetch fails, or
 *   - the result is empty (Sanity dataset not yet populated).
 *
 * Uses initialData as the immediate state (zero loading flash).
 * The query is stored in a ref so the effect does not re-run on re-renders.
 */
export function useSanityFetch(query, initialData) {
  const [data, setData] = useState(initialData)
  const queryRef = useRef(query)

  useEffect(() => {
    client.fetch(queryRef.current)
      .then(result => {
        const hasData = Array.isArray(result)
          ? result.length > 0
          : result && typeof result === 'object' && Object.values(result).some(v =>
              Array.isArray(v) ? v.length > 0 : Boolean(v)
            )
        if (hasData) setData(result)
      })
      .catch(() => {}) // silently fall back to initialData
  }, [])

  return data
}

import { useState, useEffect, useRef } from 'react'
import { client } from '../lib/sanityClient'

export function useSanityFetch(query, initialData) {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(true)
  const queryRef = useRef(query)

  useEffect(() => {
    if (import.meta.env.DEV) console.log('[Sanity] fetching…', queryRef.current.slice(0, 60))
    client.fetch(queryRef.current)
      .then(result => {
        if (import.meta.env.DEV) console.log('[Sanity] result:', result)
        const hasData = Array.isArray(result)
          ? result.length > 0
          : result && typeof result === 'object' && Object.values(result).some(v =>
              Array.isArray(v) ? v.length > 0 : Boolean(v)
            )
        if (hasData) setData(result)
        else if (import.meta.env.DEV) console.warn('[Sanity] no data / empty result')
      })
      .catch(err => { if (import.meta.env.DEV) console.warn('[Sanity] error:', err) })
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}

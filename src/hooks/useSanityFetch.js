import { useState, useEffect, useRef } from 'react'
import { client } from '../lib/sanityClient'

export function useSanityFetch(query, initialData) {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(true)
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
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}

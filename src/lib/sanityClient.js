import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? 'rw1g8gn6',
  dataset:   import.meta.env.VITE_SANITY_DATASET    ?? 'production',
  useCdn:    !import.meta.env.DEV,
  apiVersion: '2024-01-01',
})

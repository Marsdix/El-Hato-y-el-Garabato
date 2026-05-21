// Elimina los campos cata y analitica que se guardaron como null.
// Ejecutar desde studio/:
//   SANITY_AUTH_TOKEN=sk... node scripts/fix-nulls.mjs

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rw1g8gn6',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token:     process.env.SANITY_AUTH_TOKEN,
  useCdn:    false,
})

const IDS_CON_NULL = [
  'vino-de-buena-jera-2022',
  'vino-eclectico-lias-2023',
  'vino-eclectico-barrica-2023',
  'vino-li-2022',
  'vino-otro-cuento-2023',
  'vino-sin-blanca-2018',
]

async function fix() {
  for (const id of IDS_CON_NULL) {
    try {
      await client.patch(id).unset(['cata', 'analitica']).commit()
      console.log(`✓ ${id} — campos null eliminados`)
    } catch (err) {
      console.error(`✗ ${id}:`, err.message)
    }
  }
  console.log('\nListo.')
}

fix()

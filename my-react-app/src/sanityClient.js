import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'jfw0onb6', 
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
})

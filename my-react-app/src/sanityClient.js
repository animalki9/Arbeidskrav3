import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'jfw0onb6',         
  dataset: 'production',         
  apiVersion: '2023-01-01', 
  useCdn: false,
});

export default sanityClient;

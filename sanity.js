import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';
const client = sanityClient({
  projectId: 'g6wazjfs',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-07',
});
const builder = imageBuilder(client);
export const urlFor = source => builder.image(source);
console.log('11 ', builder);
console.log('12 ', urlFor);
export default client;

//sanity cors add http://localhost:3000

// sanity cors add http://localhost:3333/

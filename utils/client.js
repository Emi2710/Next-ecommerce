import sanityClient from '@sanity/client';
import config from './config';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
});
export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

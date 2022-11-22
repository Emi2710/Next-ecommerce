import sanityClient from '@sanity/client';
import config from './config';
import imageUrlBuilder from '@sanity/image-url';
import { createClient, createPreviewSubscriptionHook } from 'next-sanity'



const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
});
export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
})

export const getClient = (usePreview) => (usePreview ? previewClient : client)

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-13',
  useCdn: true,
});

// Set up image builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// Example query function
export async function getPosts() {
  const posts = await client.fetch(`
        *[_type == "post"] {
          title,
          slug,
          mainImage,
          description,
          duration,
          price
        }
      `);

  return posts;
}

// Example function to get a single tour by slug
export async function getTourBySlug() {
  return await client.fetch(`
      *[_type == "tour" && slug.current == $slug][0]
    `, { slug })
}
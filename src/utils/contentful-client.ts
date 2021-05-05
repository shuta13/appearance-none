import { createClient } from 'contentful';
import { Slug } from '../types/contentful-types';

export const getBlogPost = async () => {
  const spaceId = process.env.SPACE_ID!;
  const accessToken = process.env.DELIVERY_KEY!;
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const entries = await client.getEntries<Slug>({ order: '-sys.createdAt' });

  if (entries) return entries;
  throw new Error();
};

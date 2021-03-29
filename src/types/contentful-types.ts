import { TagsMap } from '../config';

export type Slug = {
  title: string;
  body: string;
  slug: string;
};

export type Metadata = {
  tags: {
    sys: {
      id: keyof typeof TagsMap;
    };
  }[];
};

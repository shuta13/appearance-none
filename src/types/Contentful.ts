export type ResultItemType = {
  metadata: { tags: { sys: { [key: string]: string } }[] };
  sys: { [key: string]: any };
  fields: { title: string; body: any; slug: string };
};

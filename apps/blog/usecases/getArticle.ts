import repo from '~/repositories/article';

export function getArticle() {
  return {
    async invoke(params: { id: string }) {
      const result = await repo.getArticle(params);
      return result;
    },
  };
}

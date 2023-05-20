import model from '~/models/articles';
import repo from '~/repositories/article';

export function getArticles() {
  return {
    async invoke({ tag }: { tag: string }) {
      const result = await repo.getArticles({
        tag: tag,
      });
      return result.map(model.transform);
    },
  };
}
export type GetArticlesResults = Awaited<
  ReturnType<ReturnType<typeof getArticles>['invoke']>
>;

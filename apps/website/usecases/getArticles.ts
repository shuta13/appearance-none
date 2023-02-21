import model from '~/models/articles';
import repo from '~/repositories/article';

export function getArticles() {
  return {
    async invoke() {
      const result = await repo.getArticles();
      return result.map(model.transform);
    },
  };
}

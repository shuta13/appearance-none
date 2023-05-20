import repo from '~/repositories/article';

export function getChildren() {
  return {
    async invoke(params: { id: string; size?: number }) {
      const result = await repo.getChildren(params);
      return result;
    },
  };
}

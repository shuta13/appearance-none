import repo from '~/repositories/article';

export function getNotionMD() {
  return {
    async invoke(params: { id: string }) {
      const result = await repo.getNotionMD(params);
      return result;
    },
  };
}

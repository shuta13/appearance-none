import useSWR from 'swr';
import { GetArticlesResults } from '~/usecases/getArticles';

export const useArticles = (query: { tag: string }) => {
  const queryString = new URLSearchParams(query).toString();
  return useSWR(
    () => '/api/articles?' + queryString,
    async (url) => {
      const data = await fetch(url);
      const res: GetArticlesResults = await data.json();
      return res;
    },
    {
      revalidateOnFocus: false,
    }
  );
};

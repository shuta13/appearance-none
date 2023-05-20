import { NextApiHandler } from 'next';
import { getArticles } from '~/usecases/getArticles';

const handler: NextApiHandler = async (req, res) => {
  const { tag } = req.query;
  const data = await getArticles()
    .invoke({ tag: tag as string })
    .catch((e: Error) => {
      return e;
    });
  const statusCode = data instanceof Error ? 400 : 200;
  return res.status(statusCode).json(data);
};

export default handler;

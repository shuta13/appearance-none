import type { NextPage } from 'next';
interface Props {
  statusCode: number | undefined;
  message: string;
}

const BlogError: NextPage<Props> = (props) => {
  const { statusCode, message } = props;
  return <p>{statusCode && `Error - ${statusCode} ${message}`}</p>;
};

BlogError.getInitialProps = ({ res, err }) => {
  if (res)
    return { statusCode: res.statusCode, message: 'Sorry, something wrong' };
  else if (err) return { statusCode: err.statusCode, message: err.message };
  else return { statusCode: 400, message: 'Bad request' };
};

export default BlogError;

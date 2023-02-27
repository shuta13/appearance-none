import ReactDOMServer from 'react-dom/server';
import { UnsupportedBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import {
  isBlockObject,
  renderer,
  BlockObjectResponse,
} from 'utils/notion-block-renderer';

type ArticleBodyModel = Readonly<{
  content: BlockObjectResponse;
  htmlStr: string;
}>;

namespace ArticleBodyModel {
  export function transform(result: BlockObjectResponse): ArticleBodyModel {
    if (isBlockObject(result)) {
      return {
        content: result,
        htmlStr: ReactDOMServer.renderToString(renderer(result)),
      };
    }
    return {
      content: {
        type: 'unsupported',
      } as unknown as UnsupportedBlockObjectResponse,
      htmlStr: '',
    };
  }
}

export default ArticleBodyModel;

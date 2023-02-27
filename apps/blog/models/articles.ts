import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ToDoBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import {
  isBlockObject,
  isBulletListItem,
  isNumberedListItem,
  isTodo,
} from 'utils/notion-block-renderer';
import { Articles } from '~/repositories/article';
import ArticleBodyModel from './articleBody';

type ArticlesModel = Readonly<Articles[number]>;

namespace ArticlesModel {
  export function transform(result: Articles[number]): ArticlesModel {
    return {
      head: result.head,
      body: normalizeList(result.body),
    };
  }

  function normalizeList(body: Articles[number]['body']) {
    const bulletedListItems: {
      item: BulletedListItemBlockObjectResponse;
      index: number;
    }[] = [];
    const numberedListItems: {
      item: NumberedListItemBlockObjectResponse;
      index: number;
    }[] = [];
    const todoListItems: {
      item: ToDoBlockObjectResponse;
      index: number;
    }[] = [];

    body.forEach((item, index) => {
      if (isBlockObject(item.content)) {
        if (isBulletListItem(item.content)) {
          bulletedListItems.push({
            item: item.content,
            index,
          });
        }
        if (isNumberedListItem(item.content)) {
          numberedListItems.push({
            item: item.content,
            index,
          });
        }
        if (isTodo(item.content)) {
          todoListItems.push({
            item: item.content,
            index,
          });
        }
      }
    });

    (
      [
        { type: 'bulleted_list', listItems: bulletedListItems },
        { type: 'numbered_list', listItems: numberedListItems },
        { type: 'todo_list', listItems: todoListItems },
      ] as const
    ).forEach(({ type, listItems }) => {
      // @ts-expect-error
      groupByNumbering(listItems).forEach((items) => {
        const first = items[0];
        const last = items[items.length - 1];
        const content = ArticleBodyModel.transform({
          type,
          // @ts-expect-error
          items: items.map((value) => value.item),
        });
        if (last.index - first.index > 0) {
          body.splice(first.index, last.index - first.index + 1, content);
        }
      });
    });

    return body;
  }

  function groupByNumbering<T extends Record<string, any>>(arr: T[]) {
    return arr.reduce((pValue, cValue) => {
      const lastSubArray = pValue[pValue.length - 1];

      if (
        !lastSubArray ||
        lastSubArray[lastSubArray.length - 1].index !== cValue.index - 1
      ) {
        pValue.push([]);
      }

      pValue[pValue.length - 1].push(cValue);

      return pValue;
    }, [] as T[][]);
  }
}

export default ArticlesModel;

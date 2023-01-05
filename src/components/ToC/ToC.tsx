import React from 'react';
import styles from './ToC.module.scss';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import { remark } from 'remark';
import { Entries } from '~/usecases/getBlogData';

const createHeadingNodes = (content: Entries[number]['body']['content']) => {
  /** @todo fix */
  const mdast = (content && remark().parse(content.toString())) ?? '';

  if (typeof mdast !== 'string') {
    const headingNodes: { depth: number; value: string }[] = [];
    visit(mdast, 'heading', (child) => {
      const headingNode = {
        depth: child.depth as number,
        // @ts-expect-error Children should have value.
        value: (child.children as Array<Node>)[0].value as string,
      };
      headingNodes.push(headingNode);
    });
    return headingNodes;
  }
};

const renderToC = (depth: number, value: string) => {
  switch (depth) {
    case 2:
      return (
        <li className={styles.li_text}>
          <a href={`#${value}`}>{value}</a>
        </li>
      );
    case 3:
      return (
        <ul>
          <li className={styles.li_text}>
            <a href={`#${value}`}>{value}</a>
          </li>
        </ul>
      );
  }
};

export const ToC: React.FC<{ body: Entries[number]['body'] }> = ({ body }) => {
  return (
    <ul className={styles.wrap}>
      {createHeadingNodes(body.content)?.map((node, i) => (
        <React.Fragment key={i}>
          {renderToC(node.depth, node.value)}
        </React.Fragment>
      ))}
    </ul>
  );
};

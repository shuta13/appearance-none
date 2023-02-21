import React from 'react';
import { visit } from 'unist-util-visit';
import { Articles } from '~/repositories/article';
import { fromHtml } from 'hast-util-from-html';
import { Text } from 'hast';

const createHeadingNodes = (content: string) => {
  const hast = fromHtml(content);
  const headingNodes: { depth: number; value: string }[] = [];
  visit(hast, 'element', (child) => {
    const { tagName, children } = child;
    if (/^h[0-9]$/.test(tagName)) {
      const headingNode = {
        depth: parseInt(tagName[1]),
        value: children
          .filter((item): item is Text => item.type === 'text')
          .map((item) => item.value)
          .join(''),
      };
      headingNodes.push(headingNode);
    }
  });
  return headingNodes;
};

const renderToC = (depth: number, value: string) => {
  if (depth === 1) {
    return (
      <li>
        <a href={`#${value}`}>{value}</a>
      </li>
    );
  } else {
    return (
      <ul>
        <li className="ml-4">
          <a href={`#${value}`}>{value}</a>
        </li>
      </ul>
    );
  }
};

/**
 * @description Notion APIがToCに対応するまでの暫定コンポーネント。
 */
export const ToC: React.FC<{ body: Articles[number]['body'] }> = ({ body }) => {
  const html = body.map((value) => value.htmlStr).join('');
  return (
    <div className="space-y-2">
      <h1>目次</h1>
      <ul className="space-y-2">
        {createHeadingNodes(html)?.map((node, i) => (
          <React.Fragment key={i}>
            {renderToC(node.depth, node.value)}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

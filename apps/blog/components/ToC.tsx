import React from 'react';
import { visit } from 'unist-util-visit';
import { Articles } from '~/repositories/article';
import { fromHtml } from 'hast-util-from-html';
import { ElementContent } from 'hast';

const findTextNode = (nodes: ElementContent | ElementContent[]): string => {
  if (Array.isArray(nodes)) {
    for (const node of nodes) {
      return findTextNode(node);
    }
  } else {
    if (nodes.type === 'element') {
      return findTextNode(nodes.children);
    } else if (nodes.type === 'text') {
      return nodes.value;
    } else {
      return '';
    }
  }
  return '';
};

const createHeadingNodes = (content: string) => {
  const hast = fromHtml(content);
  const headingNodes: { depth: number; value: string }[] = [];
  visit(hast, 'element', (child) => {
    const { tagName, children } = child;
    if (/^h[0-9]$/.test(tagName)) {
      const headingNode = {
        depth: parseInt(tagName[1]),
        value: findTextNode(children),
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
        <a href={`#${value}`}># {value}</a>
      </li>
    );
  } else if (depth === 2) {
    return (
      <ul>
        <li className="ml-4">
          <a href={`#${value}`}>## {value}</a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li className="ml-4">
          <a href={`#${value}`}>### {value}</a>
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
    <details className="space-y-2" open={true}>
      <summary className="cursor-pointer">
        <h2 className="inline">目次</h2>
      </summary>
      <ul className="space-y-2 pl-4">
        {createHeadingNodes(html)?.map((node, i) => (
          <React.Fragment key={i}>
            {renderToC(node.depth, node.value)}
          </React.Fragment>
        ))}
      </ul>
    </details>
  );
};

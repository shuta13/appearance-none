import React from 'react';
import styles from './ToC.module.scss';
type Props = { nodes: Array<{ depth: number; value: string }> };

// const HoToC: React.FC = () => {};

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

export const ToC: React.FC<Props> = (props) => {
  const { nodes } = props;
  return (
    <ul className={styles.wrap}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          {renderToC(node.depth, node.value)}
        </React.Fragment>
      ))}
    </ul>
  );
};

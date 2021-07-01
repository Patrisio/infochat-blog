import React from 'react';

import styles from './tags.module.css';

interface Item {
  id: string,
  value: string,
}

interface Tags {
  items: Item[],
  classNames?: string,
  onClick: (id: string) => void,
}

export default function Tags({ items, onClick, classNames }: Tags) {
  return (
    <div className={styles.tagsContainer}>
      {
        items.map(({ id, value }) => {
          return (
            <div
              key={id}
              className={`
                ${styles.tag}
                ${classNames}
              `}
              onClick={() => onClick(id)}
            >
              { value }
            </div>
          );
        })
      }
    </div>
  );
}
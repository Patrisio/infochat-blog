import React from 'react';

import Title from '../Typography/Title/Title';
import Tags from '../Tags/Tags';

import { categories } from '../../lib/constants';
import styles from './BlogContentFooter.module.css';

export default function BlogContentFooter() {
  const goToSelectedCategory = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.blogContentFooter}>
      <div className={styles.blogContentFooterTitle}>
        <Title level='2' weight='bold' classNames={styles.footerTitle}>Рубрики</Title>
      </div>

      <Tags
        items={categories}
        onClick={goToSelectedCategory}
      />
    </div>
  );
} 
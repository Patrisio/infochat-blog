import React from 'react';
import { useRouter } from 'next/router';

import Title from '../Typography/Title/Title';
import Tags from '../Tags/Tags';

import { categories } from '../../lib/constants';
import styles from './BlogContentFooter.module.css';

export default function BlogContentFooter() {
  const router = useRouter();

  const goToSelectedCategory = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
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
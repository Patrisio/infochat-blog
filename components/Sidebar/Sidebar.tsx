import React from 'react';
import { useRouter } from 'next/router';
import Title from '../Typography/Title/Title';
import Tags from '../Tags/Tags';

import styles from './sidebar.module.css';
import { categories } from '../../lib/constants';

export default function Sidebar() {
  const router = useRouter();

  const goToSelectedCategory = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.categoriesTitle}>
        <Title level='2' weight='bold' classNames={styles.footerTitle}>Рубрики</Title>
      </div>

      <Tags
        items={categories}
        onClick={goToSelectedCategory}
        classNames={styles.tag}
      />
    </div>
  );
}
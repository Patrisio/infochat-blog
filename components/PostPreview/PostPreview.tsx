import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import Title from '../../components/Typography/Title/Title';

import styles from './postPreview.module.css';
import { PostData } from '../../lib/posts';

export default function PostPreview({ image, title, excerpt, slug }: PostData) {
  const imagePath = `/images/posts/${image}`;

  return (
    <Link href={`/posts/${slug}`}>
      <article className={styles.postPreviewContainer}>
        <div className={styles.postPreviewImageContainer}>
          <Image
            src={imagePath}
            width={340}
            height={250}
            className={styles.postPreviewImage}
          />
        </div>
        <Title level='1' weight='bold' classNames={styles.postPreviewTitle}>{title}</Title>
        <p className={styles.postPreviewExcerpt}>{excerpt}</p>
      </article>
    </Link>
  );
}
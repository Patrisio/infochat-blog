import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import Title from '../Typography/Title/Title';
import Sidebar from '../Sidebar/Sidebar';

import styles from './detailedPostContent.module.css';
import { PostData } from '../../lib/posts';

interface DetailedPostContentProps {
  post: PostData,
}

export default function DetailedPostContent({ post }: DetailedPostContentProps) {
  const { image, title, date, content } = post;
  const imagePath = `/images/posts/${image}`;
  console.log(post);
  return (
    <div className={styles.detailedPostContentContainer}>
      <div className={styles.mainContent}>
        <Image
          src={imagePath}
          alt={image}
          width={750}
          height={360}
          className={styles.image}
        />

        <Title level='1' weight='bold' classNames={styles.posTitle}>{title}</Title>

        { content && <ReactMarkdown>{content}</ReactMarkdown> }
      </div>

      <Sidebar />
    </div>
  );
}
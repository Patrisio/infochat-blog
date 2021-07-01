import React from 'react';

import PostPreview from '../PostPreview/PostPreview';

import styles from './blogContentPosts.module.css';
import { PostData } from '../../lib/posts';

interface BlogContentPosts {
  posts: PostData[],
}

export default function BlogContentPosts({ posts }: BlogContentPosts) {
  return (
    <div className={styles.blogContentPostsContainer}>
      {
        posts.map((post, idx) => {
          return (
            <PostPreview
              key={idx}
              {...post}
            />
          );
        })
      }
    </div>
  );
}
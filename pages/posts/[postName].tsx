import React from 'react';

import BlogContentHeader from '../../components/BlogContentHeader/BlogContentHeader';
import BlogContentFooter from '../../components/BlogContentFooter/BlogContentFooter';
import DetailedPostContent from '../../components/DetailedPostContent/DetailedPostContent';

import styles from '../../styles/DetailedPost.module.css';
import { getPostsFiles, getPostData, PostData } from '../../lib/posts';

interface DetailedPostProps {
  post: PostData,
}

export default function DetailedPost({ post }: DetailedPostProps) {
  return (
    <div className={styles.detailedPostContainer}>
      <BlogContentHeader />
      <DetailedPostContent post={post}/>
      <BlogContentFooter />
    </div>
  );
}

export function getStaticProps(context: any) {
  const { params } = context;
  const { postName } = params;
  
  const postData = getPostData(postName);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename: string) => filename.replace(/\.md$/, ''));
  const paths = slugs.map(postName => ({
    params: { postName },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
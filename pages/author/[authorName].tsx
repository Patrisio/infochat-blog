import React from 'react';

import BlogContentHeader from '../../components/BlogContentHeader/BlogContentHeader';
import BlogContentFooter from '../../components/BlogContentFooter/BlogContentFooter';
import BlogContentPosts from '../../components/BlogContentPosts/BlogContentPosts';

import styles from '../../styles/FilteredPostsByAuthor.module.css';
import { getPostsByAuthor, PostData } from '../../lib/posts';
import { authors } from '../../lib/constants';

interface FilteredPostsByAuthorProps {
  posts: PostData[],
}

export default function FilteredPostsByAuthor({ posts }: FilteredPostsByAuthorProps) {
  return (
    <div className={styles.detailedPostContainer}>
      <BlogContentHeader />
      <BlogContentPosts posts={posts} />
      <BlogContentFooter />
    </div>
  );
}

export function getStaticProps({ params }: any) {
  const { authorName } = params;
  const allPosts = getPostsByAuthor(authorName);

  return {
    props: {
      posts: allPosts,
    },
  };
}

export function getStaticPaths() {
  const slugs = authors.map((author: { id: string, value: string }) => author.id);
  const paths = slugs.map(authorName => ({
    params: { authorName },
  }));

  return {
    paths,
    fallback: false,
  };
}
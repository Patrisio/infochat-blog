import React from 'react';

import BlogContentHeader from '../../components/BlogContentHeader/BlogContentHeader';
import BlogContentFooter from '../../components/BlogContentFooter/BlogContentFooter';
import BlogContentPosts from '../../components/BlogContentPosts/BlogContentPosts';

import styles from '../../styles/FilteredPosts.module.css';
import { getPostsByCategory, PostData } from '../../lib/posts';
import { categories } from '../../lib/constants';

interface Home {
  posts: PostData[],
}

export default function FilteredPosts({ posts }: Home) {
  return (
    <div className={styles.detailedPostContainer}>
      <BlogContentHeader />
      <BlogContentPosts posts={posts}/>
      <BlogContentFooter />
    </div>
  );
}

export function getStaticProps({ params }: any) {
  const { categoryType } = params;
  const allPosts = getPostsByCategory(categoryType);
  console.log(allPosts, 'allPosts');

  return {
    props: {
      posts: allPosts,
    },
  };
}

export function getStaticPaths() {
  const slugs = categories.map((category: { id: string, value: string }) => category.id);
  const paths = slugs.map(categoryType => ({
    params: { categoryType },
  }));

  return {
    paths,
    fallback: false,
  };
}
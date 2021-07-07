import Head from 'next/head';
import Image from 'next/image';

import BlogContentHeader from '../components/BlogContentHeader/BlogContentHeader';
import BlogContentFooter from '../components/BlogContentFooter/BlogContentFooter';
import BlogContentPosts from '../components/BlogContentPosts/BlogContentPosts';

import styles from '../styles/Home.module.css';
import { getAllPosts, PostData } from '../lib/posts';

interface Home {
  posts: PostData[],
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  console.log(allPosts);
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default function Home({ posts }: Home) {
  return (
    <div className={styles.container}>
      <BlogContentHeader />
      <BlogContentPosts posts={posts}/>
      <BlogContentFooter />
    </div>
  )
}

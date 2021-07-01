import Head from 'next/head';
import Image from 'next/image';

import BlogContentHeader from '../components/BlogContentHeader/BlogContentHeader';
import BlogContentFooter from '../components/BlogContentFooter/BlogContentFooter';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogContentHeader />
      <BlogContentFooter />
    </div>
  )
}

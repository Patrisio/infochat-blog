import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/images/logo.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link
        href='/'
      >
        <Image
          src={logo}
          alt='logo'
          width={200}
          height={54}
        />
      </Link>

      <a
        target='_blank'
        href='https://infochat.com'
        className={styles.headerLink}
      >
        Приложение
      </a>
    </div>
  );
}
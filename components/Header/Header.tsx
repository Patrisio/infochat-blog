import React from 'react';
import Image from 'next/image'

import logo from '../../public/images/logo.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <a
        target='_blank'
        href='https://infochat.com'
      >
        <Image
          src={logo}
          alt='logo'
          width={200}
          height={54}
        />
      </a>

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
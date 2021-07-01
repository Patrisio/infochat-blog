import React from 'react';
import Image from 'next/image'

import logo from '../../public/images/logo.png';
import styles from './footer.module.css';

export default function Header() {
  return (
    <div className={styles.footerContainer}>
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
    </div>
  );
}
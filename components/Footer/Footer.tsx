import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/images/logo.png';
import styles from './footer.module.css';

export default function Header() {
  return (
    <div className={styles.footerContainer}>
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
    </div>
  );
}
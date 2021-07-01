import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactElement,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  );
}
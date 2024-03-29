// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="font-serif">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

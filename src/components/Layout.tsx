import React from 'react';
import Header from './navigation/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative pt-12 px-4">
        {children}
      </main>
    </div>
  );
}
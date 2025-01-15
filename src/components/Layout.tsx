import React from 'react';
import Header from './navigation/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="relative px-4 pt-14 md:pt-16 md:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
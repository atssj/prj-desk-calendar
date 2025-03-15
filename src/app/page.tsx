"use client";

import React, { JSX } from 'react';
import InfiniteCanvas from '@/components/InfiniteCanvas';
import Header from '@/components/Header';

export default function Home(): JSX.Element {
  return (
    <div className="h-screen overflow-hidden">
      <InfiniteCanvas />
      <Header />
      <div className="relative h-full w-full">
        
      </div>
    </div>
  );
}

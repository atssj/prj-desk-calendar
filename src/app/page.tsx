"use client";

import React, { JSX } from 'react';
import InfiniteCanvas from '@/components/InfiniteCanvas';

export default function Home(): JSX.Element {
  return (
    <div className="h-screen overflow-hidden">
      <InfiniteCanvas />
    </div>
  );
}

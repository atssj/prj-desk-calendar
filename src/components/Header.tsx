"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, ArrowUpCircle } from 'lucide-react';

import Logo from '@/components/ui/Logo';
import ToolSelector from '@/components/ToolSelector';
import Button from '@/components/ui/Button';
import ProfileMenu from '@/components/ProfileMenu';

const Header: React.FC = () => {
  const [activeTool, setActiveTool] = useState<"select" | "hand">("select");

  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white sticky top-0 z-[100] shadow-sm">
      <div className="flex items-center gap-4">
        <Logo size="lg" />
        <ToolSelector activeTool={activeTool} setActiveTool={setActiveTool} />
      </div>
      <div className="flex items-center space-x-4">
        <Button 
          size="md" 
          variant="outline" 
          leftIcon={<Share2 size={14} />}
        >
          Share
        </Button>
        <Link href="/upgrade">
          <Button 
            size="md"
            variant="default"
            className="bg-indigo-500 hover:bg-indigo-600 text-white"
            leftIcon={<ArrowUpCircle size={14} />}
          >
            Upgrade
          </Button>
        </Link>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;

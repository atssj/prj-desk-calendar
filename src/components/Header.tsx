"use client";

import React from 'react';
import { Share2 } from 'lucide-react';

import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import ProfileMenu from '@/components/ProfileMenu';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white sticky top-0 z-[100] shadow-sm">
      <div className="flex items-center gap-4">
        <Logo size="lg" />
      </div>
      <div className="flex items-center space-x-4">
        <Button 
          size="md" 
          variant="default"
          className="bg-indigo-500 hover:bg-indigo-600 text-white"
          leftIcon={<Share2 size={14} />}
        >
          Share
        </Button>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;

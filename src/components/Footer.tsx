import React from 'react';
import { Paintbrush } from 'lucide-react';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/Button';

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
      {/* Design Button */}
      <Button
        onClick={() => {/* TODO: Implement design action */}}
        className={cn(
          "rounded-full bg-blue-600 text-white mb-4",
          "hover:bg-blue-700 active:bg-blue-800"
        )}
        size="lg"
        leftIcon={<Paintbrush className="h-5 w-5" />}
      >
        <span className="font-medium">Design</span>
      </Button>
    </div>
  );
};

export default Footer;

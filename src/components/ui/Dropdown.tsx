import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface DropdownProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

const Dropdown = ({ isOpen, children, className }: DropdownProps): React.ReactElement | null => {
  if (!isOpen) return null;
  
  return (
    <div 
      className={cn(
        "absolute bottom-full right-0 mb-2 w-full rounded-lg bg-white shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Dropdown;

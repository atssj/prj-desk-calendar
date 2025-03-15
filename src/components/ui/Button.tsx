import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'default',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  fullWidth = false,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        // Base styles
        "flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
        // Variant styles
        variant === 'default' && "bg-white shadow-sm hover:bg-slate-100",
        variant === 'outline' && "border border-gray-200 hover:bg-gray-100",
        variant === 'icon' && "p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900",
        variant === 'text' && "hover:bg-gray-100",
        // Size styles
        size === 'sm' && "text-xs px-2 py-1 gap-1",
        size === 'md' && "text-sm px-4 py-2 gap-2",
        size === 'lg' && "text-base px-6 py-3 gap-3",
        // Width
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children && <span className={cn(variant === 'icon' ? "sr-only" : "")}>{children}</span>}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

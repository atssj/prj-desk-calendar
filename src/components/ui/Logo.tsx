import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 56,
  };

  const imageSize = sizes[size];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Calendar Designer Logo"
          width={imageSize}
          height={imageSize}
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;

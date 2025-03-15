import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import Link from 'next/link';

const ProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = "user@example.com"; // Replace with actual user email

  return (
    <div className="relative inline-block">
      <button
        title="Profile"
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
      >
        <User size={32} className="bg-gray-100 rounded-full p-2 hover:bg-gray-200" />
      </button>
      
      <div className={`absolute right-0 top-full mt-6 w-56 bg-white rounded-md shadow-lg py-1 z-50
        transform transition-all duration-200 ease-out origin-top-right
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
          {email}
        </div>
        <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Profile
        </Link>
        <button
          onClick={() => {/* Add logout handler */}}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <LogOut size={14} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;

import React, { useState, useRef, useEffect } from "react";
import { MousePointer, Hand, ChevronDown } from "lucide-react";

interface ToolSelectorProps {
  activeTool: "select" | "hand";
  setActiveTool: (tool: "select" | "hand") => void;
}

const ToolSelector: React.FC<ToolSelectorProps> = ({ activeTool, setActiveTool }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = [
    {
      value: "select",
      label: "Select",
      icon: <MousePointer size={16} className="mr-2" />,
    },
    {
      value: "hand",
      label: "Hand",
      icon: <Hand size={16} className="mr-2" />,
    },
  ];

  const activeOption = options.find((option) => option.value === activeTool);

  return (
    <nav ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex justify-between w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center">
          {activeOption?.icon}
          <span>{activeOption?.label}</span>
        </div>
        <ChevronDown size={20} />
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => {
                  setActiveTool(option.value as "select" | "hand");
                  setOpen(false);
                }}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.icon}
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default ToolSelector;

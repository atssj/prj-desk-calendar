import React, { memo, useMemo } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { cn } from '@/utils/cn';
import Button from './ui/Button';
import Dropdown from './ui/Dropdown';

interface YearSelectorProps {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  yearOpen: boolean;
  setYearOpen: (open: boolean) => void;
}

const YearSelector: React.FC<YearSelectorProps> = memo(({ 
  selectedYear, 
  setSelectedYear, 
  yearOpen, 
  setYearOpen 
}: YearSelectorProps) => {
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return [currentYear, currentYear + 1];
  }, []);

  return (
    <div className="relative">
      <Button
        onClick={() => setYearOpen(!yearOpen)}
        aria-haspopup="listbox"
        aria-expanded={yearOpen}
        aria-label="Select year"
      >
        <Calendar className="h-5 w-5" aria-hidden="true" />
        <span>Year {selectedYear}</span>
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", yearOpen && "rotate-180")}
          aria-hidden="true"
        />
      </Button>

      <Dropdown isOpen={yearOpen}>
        {years.map((year) => (
          <Button
            key={year}
            variant="outline"
            className={cn(
              "w-full text-left",
              selectedYear === year && "bg-slate-100 font-medium"
            )}
            onClick={() => {
              setSelectedYear(year);
              setYearOpen(false);
            }}
            role="option"
            aria-selected={selectedYear === year}
          >
            {year}
          </Button>
        ))}
      </Dropdown>
    </div>
  );
});

YearSelector.displayName = 'YearSelector';

export default YearSelector;
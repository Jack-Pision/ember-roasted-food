'use client';

import { categories, CategoryId } from '@/data/menu';

interface CategoryFilterProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="sticky top-[72px] z-40 bg-[#F5F0E8] border-b border-[#EDE4D3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-1 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`relative px-4 py-2 text-[11px] font-medium tracking-[0.22em] uppercase whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'text-[#C8602A]'
                  : 'text-[#1A1410]/60 hover:text-[#1A1410]'
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8602A]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

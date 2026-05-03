'use client';

import { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Toast() {
  const { lastAddedItem, clearLastAdded } = useCartStore();

  useEffect(() => {
    if (lastAddedItem) {
      const timer = setTimeout(() => {
        clearLastAdded();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem, clearLastAdded]);

  if (!lastAddedItem) return null;

  return (
    <div className="fixed top-20 right-6 z-[60] animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-3 bg-[#1A1410] text-white px-4 py-3 rounded-[6px] shadow-lg">
        <div className="w-5 h-5 bg-[#3D6B41] rounded-full flex items-center justify-center">
          <Check size={12} strokeWidth={2} />
        </div>
        <span className="text-[14px] font-medium">
          {lastAddedItem} added
        </span>
        <button
          onClick={clearLastAdded}
          className="ml-2 text-white/60 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

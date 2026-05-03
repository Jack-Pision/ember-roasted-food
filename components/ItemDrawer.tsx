'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { getDietaryTagStyle } from '@/data/menu';

export default function ItemDrawer() {
  const {
    isItemDrawerOpen,
    closeItemDrawer,
    selectedDish,
    addItem,
  } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => {
    closeItemDrawer();
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedDish) {
      addItem(selectedDish, quantity);
      handleClose();
    }
  };

  const decrementQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQty = () => {
    setQuantity(quantity + 1);
  };

  return (
    <AnimatePresence>
      {isItemDrawerOpen && selectedDish && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#1A1410]/60 z-[70]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[480px] bg-[#F5F0E8] z-[80] overflow-y-auto"
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#F5F0E8]/90 rounded-full flex items-center justify-center text-[#1A1410] hover:bg-[#F5F0E8] transition-colors"
                aria-label="Close"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  fill
                  className="object-cover"
                  sizes="480px"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#8C7355]">
                  {selectedDish.category}
                </span>

                {/* Name */}
                <h2 className="font-[var(--font-playfair)] text-[32px] font-bold text-[#1A1410] mt-2 mb-3">
                  {selectedDish.name}
                </h2>

                {/* Description */}
                <p className="font-[var(--font-fraunces)] italic text-[16px] text-[#8C7355] leading-relaxed mb-4">
                  {selectedDish.description}
                </p>

                {/* Tags */}
                {selectedDish.tags.length > 0 && (
                  <div className="flex gap-2 mb-6">
                    {selectedDish.tags.map((tag) => {
                      const style = getDietaryTagStyle(tag);
                      return (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-3 py-1 text-[11px] font-medium uppercase tracking-wider rounded-full ${style.bg} ${style.text}`}
                        >
                          {style.label} {tag}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Price */}
                <div className="text-[24px] font-normal text-[#C8602A] mb-6">
                  ${selectedDish.price.toFixed(2)}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[14px] font-medium text-[#1A1410]">Quantity</span>
                  <div className="flex items-center gap-3 bg-[#EDE4D3] rounded-[4px] px-3 py-2">
                    <button
                      onClick={decrementQty}
                      disabled={quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center text-[#1A1410] hover:text-[#C8602A] disabled:opacity-40 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} strokeWidth={1.5} />
                    </button>
                    <span className="w-8 text-center text-[16px] font-medium text-[#1A1410]">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQty}
                      className="w-8 h-8 flex items-center justify-center text-[#1A1410] hover:text-[#C8602A] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* Add Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-[#C8602A] text-white text-[14px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors"
                >
                  Add to Order — ${(selectedDish.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

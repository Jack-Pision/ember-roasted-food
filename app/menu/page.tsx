'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from '@/components/CategoryFilter';
import MenuCard from '@/components/MenuCard';
import ItemDrawer from '@/components/ItemDrawer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import ScrollReveal from '@/components/ScrollReveal';
import { getItemsByCategory, categories, CategoryId, Dish } from '@/data/menu';

function MenuContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [displayedItems, setDisplayedItems] = useState<Dish[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle URL category param
  useEffect(() => {
    const categoryParam = searchParams.get('category') as CategoryId;
    if (categoryParam && categories.some((c) => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Handle category change with animation
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setDisplayedItems(getItemsByCategory(activeCategory));
      setIsAnimating(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (category: CategoryId) => {
    setActiveCategory(category);
  };

  // Get category display name
  const getCategoryTitle = (id: CategoryId) => {
    const cat = categories.find((c) => c.id === id);
    return cat ? cat.label : 'ALL';
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-[#F5F0E8] pt-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <ScrollReveal>
            <h1 className="font-[var(--font-playfair)] text-[40px] sm:text-[52px] font-bold text-[#1A1410]">
              Menu
            </h1>
            <p className="font-[var(--font-fraunces)] italic text-[16px] text-[#8C7355] mt-2 max-w-md">
              Fire-roasted daily. Every dish cooked to order over open flame.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Sticky Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Menu Content */}
      <div className="bg-[#F5F0E8] min-h-screen pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          {/* Section Title with Rule */}
          {activeCategory !== 'all' && (
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-[var(--font-playfair)] text-[28px] font-bold text-[#1A1410]">
                  {getCategoryTitle(activeCategory)}
                </h2>
                <div className="flex-1 h-[1px] bg-[#EDE4D3]" />
              </div>
            </ScrollReveal>
          )}

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimating ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedItems.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <MenuCard dish={dish} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {!isAnimating && displayedItems.length === 0 && (
            <div className="text-center py-20">
              <p className="font-[var(--font-fraunces)] italic text-[18px] text-[#8C7355]">
                No items in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Drawers */}
      <ItemDrawer />
      <CartDrawer />
      <Toast />
    </>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#F5F0E8] min-h-screen pt-[72px] flex items-center justify-center">
        <div className="text-[#8C7355] font-[var(--font-fraunces)] italic">Loading menu...</div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}

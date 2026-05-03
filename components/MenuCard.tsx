'use client';

import Image from 'next/image';
import { Dish, getDietaryTagStyle } from '@/data/menu';
import { useCartStore } from '@/store/cartStore';

interface MenuCardProps {
  dish: Dish;
  onClick?: () => void;
  showAddButton?: boolean;
}

export default function MenuCard({ dish, onClick, showAddButton = true }: MenuCardProps) {
  const { openItemDrawer } = useCartStore();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openItemDrawer(dish);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-[#EDE4D3] rounded-[6px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,20,16,0.10)] hover:border hover:border-[#C8602A]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Dish Name */}
        <h3 className="text-[17px] font-medium tracking-[0.08em] uppercase text-[#1A1410] mb-2">
          {dish.name}
        </h3>

        {/* Description */}
        <p className="font-[var(--font-fraunces)] italic text-[14px] text-[#8C7355] leading-relaxed mb-3 line-clamp-2">
          {dish.description}
        </p>

        {/* Tags & Price Row */}
        <div className="flex items-center justify-between">
          {/* Dietary Tags */}
          <div className="flex gap-1.5">
            {dish.tags.map((tag) => {
              const style = getDietaryTagStyle(tag);
              return (
                <span
                  key={tag}
                  className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full ${style.bg} ${style.text}`}
                >
                  {style.label}
                </span>
              );
            })}
          </div>

          {/* Price */}
          <span className="text-[15px] font-normal text-[#C8602A]">
            ${dish.price.toFixed(2)}
          </span>
        </div>

        {/* Add Button - appears on hover */}
        {showAddButton && (
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full py-2.5 bg-[#C8602A] text-white text-[12px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors">
              Add to Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

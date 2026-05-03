'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getTodaySpecial } from '@/data/menu';
import ScrollReveal from './ScrollReveal';

export default function TodaySpecial() {
  const special = getTodaySpecial();

  if (!special) return null;

  return (
    <section className="bg-[#F5F0E8] py-12 border-y border-[#EDE4D3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Badge & Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Gold Badge */}
              <span className="inline-block px-4 py-1.5 bg-[#B8922A]/10 text-[#B8922A] text-[11px] font-medium tracking-[0.22em] uppercase rounded-full mb-4">
                TODAY&apos;S SPECIAL
              </span>

              {/* Dish Name */}
              <h2 className="font-[var(--font-playfair)] text-[36px] font-bold text-[#1A1410] mb-3">
                {special.name}
              </h2>

              {/* Description */}
              <p className="font-[var(--font-fraunces)] italic text-[16px] text-[#8C7355] mb-4 max-w-md mx-auto lg:mx-0">
                {special.description}
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <span className="text-[20px] font-normal text-[#C8602A]">
                  ${special.price.toFixed(2)}
                </span>
                <Link
                  href="/menu"
                  className="inline-flex items-center px-5 py-2.5 bg-[#C8602A] text-white text-[12px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-[400px] aspect-square rounded-[6px] overflow-hidden">
              <Image
                src={special.image}
                alt={special.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

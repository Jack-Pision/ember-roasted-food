'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TodaySpecial from '@/components/TodaySpecial';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import MenuCard from '@/components/MenuCard';
import { getFeaturedItems } from '@/data/menu';

export default function Home() {
  const featuredItems = getFeaturedItems();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#2B2018] flex flex-col justify-center overflow-hidden pt-[72px]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
          {/* Hero Content */}
          <div className="relative flex flex-col items-center">
            {/* Headline - Split Layout */}
            <div className="w-full flex justify-between items-center mb-4">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-[var(--font-playfair)] text-[44px] sm:text-[68px] lg:text-[96px] font-black text-[#F5F0E8] leading-[0.92] tracking-[-0.02em]"
              >
                FIRE
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-[var(--font-playfair)] text-[44px] sm:text-[68px] lg:text-[96px] font-black text-[#F5F0E8] leading-[0.92] tracking-[-0.02em]"
              >
                ROASTED.
              </motion.h1>
            </div>

            {/* Hero Image - Centered overlapping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[500px] aspect-square -my-8 z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2018] via-transparent to-[#2B2018]/50 z-10 rounded-full" />
              <Image
                src="/images/hero-bowl.png"
                alt="Fire-roasted bowl with fresh ingredients"
                fill
                className="object-cover rounded-full"
                priority
                sizes="(max-width: 768px) 300px, 500px"
              />
            </motion.div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="font-[var(--font-fraunces)] italic text-[16px] sm:text-[18px] text-[#F5F0E8]/70 mt-6 mb-8"
            >
              Daily menu. Fresh fire. No shortcuts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/menu"
                className="px-8 py-3.5 border border-[#F5F0E8]/40 text-[#F5F0E8] text-[13px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#F5F0E8]/10 transition-colors text-center"
              >
                View Menu
              </Link>
              <Link
                href="/menu"
                className="px-8 py-3.5 bg-[#C8602A] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors text-center"
              >
                Order Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Solid bottom edge for clean transition */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F5F0E8]" />
      </section>

      {/* TODAY'S SPECIAL */}
      <TodaySpecial />

      {/* CATEGORY PREVIEW */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Bowls', href: '/menu?category=bowl', image: '/images/cat-bowls.png' },
                { name: 'Wraps', href: '/menu?category=wrap', image: '/images/cat-wraps.png' },
                { name: 'Sides', href: '/menu?category=side', image: '/images/cat-sides.png' },
              ].map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative aspect-[3/4] md:aspect-[4/5] rounded-[6px] overflow-hidden"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2018]/80 via-[#2B2018]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="font-[var(--font-playfair)] text-[36px] md:text-[44px] font-bold text-[#F5F0E8] transition-transform duration-300 group-hover:-translate-y-1">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* FEATURED ITEMS */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-[var(--font-playfair)] text-[32px] sm:text-[40px] font-bold text-[#1A1410]">
                Featured
              </h2>
              <Link
                href="/menu"
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#C8602A] hover:underline"
              >
                View All
              </Link>
            </div>
          </ScrollReveal>

          {/* Horizontal Scroll Container */}
          <div className="relative -mx-6 lg:-mx-12">
            <div className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-12 scrollbar-hide snap-x snap-mandatory">
              {featuredItems.map((dish, index) => (
                <div
                  key={dish.id}
                  className="snap-start flex-shrink-0 w-[280px] sm:w-[300px]"
                >
                  <ScrollReveal delay={index * 30}>
                    <MenuCard dish={dish} showAddButton={false} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED CTA */}
      <section className="bg-[#2B2018] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-[var(--font-playfair)] text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-[#F5F0E8] mb-8">
              Ready when you are.
            </h2>
            <Link
              href="/menu"
              className="inline-flex items-center px-10 py-4 bg-[#C8602A] text-white text-[14px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors"
            >
              Order Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

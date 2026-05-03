'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function StoryPage() {
  const pillars = [
    {
      number: '01',
      title: 'The Fire',
      description: 'Every dish starts with live flame. No gas, no shortcuts. Just wood, charcoal, and patience.',
    },
    {
      number: '02',
      title: 'The Freshness',
      description: 'Markets at dawn. Produce within hours, not days. What doesn\'t sell today becomes tomorrow\'s specials.',
    },
    {
      number: '03',
      title: 'The People',
      description: 'Cooks who care. Staff who remember your name. Regulars who become family.',
    },
  ];

  return (
    <>
      {/* Full-Width Hero */}
      <section className="pt-[72px] bg-[#2B2018] min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        {/* Decorative flame elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C8602A] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B8922A] rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center py-16">
          <ScrollReveal>
            {/* Small label */}
            <p className="text-[12px] font-medium tracking-[0.25em] uppercase text-[#B8922A] mb-6">
              Our Story
            </p>
            
            {/* Main headline */}
            <h1 className="font-[var(--font-playfair)] text-[48px] sm:text-[64px] lg:text-[96px] font-bold text-[#F5F0E8] leading-[0.9] tracking-[-0.02em] mb-8">
              Built on Fire.
            </h1>
            
            {/* Subtitle */}
            <p className="font-[var(--font-fraunces)] italic text-[18px] sm:text-[22px] text-[#F5F0E8]/60 max-w-xl mx-auto">
              Every dish tells a story of flame, patience, and the pursuit of flavor.
            </p>
            
            {/* Decorative line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-[#C8602A]" />
              <div className="w-2 h-2 bg-[#C8602A] rotate-45" />
              <div className="w-16 h-[1px] bg-[#C8602A]" />
            </div>
          </ScrollReveal>
        </div>
        
        {/* Solid bottom edge for clean transition */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F5F0E8]" />
      </section>

      {/* Origin Paragraph */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Pull Quote */}
            <ScrollReveal>
              <blockquote className="font-[var(--font-fraunces)] italic text-[22px] sm:text-[24px] text-[#1A1410] leading-relaxed">
                &ldquo;We started with a grill in a parking lot and a belief that food tastes better when it&apos;s cooked over fire.&rdquo;
              </blockquote>
            </ScrollReveal>

            {/* Body Copy */}
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <p className="text-[15px] font-light text-[#5c5449] leading-[1.7] max-w-[56ch]">
                  EMBER began in 2023 as a weekend pop-up at the edge of the farmers market. Three friends, one charcoal grill, and a line that kept getting longer. People came for the char, stayed for the flavor.
                </p>
                <p className="text-[15px] font-light text-[#5c5449] leading-[1.7] max-w-[56ch]">
                  We never planned to open a restaurant. But the fire had other ideas. Today we&apos;re still cooking over flame, still buying from the same farmers, still chasing that perfect char on every plate.
                </p>
                <p className="text-[15px] font-light text-[#5c5449] leading-[1.7] max-w-[56ch]">
                  No investors. No expansion plans. Just fire, food, and the people who make it matter.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-[#F5F0E8] py-20 border-t border-[#EDE4D3]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.number} delay={index * 100}>
                <div className="relative">
                  {/* Large Background Number */}
                  <span className="absolute -top-6 -left-2 font-[var(--font-playfair)] text-[100px] font-bold text-[#EDE4D3] leading-none select-none">
                    {pillar.number}
                  </span>
                  
                  {/* Content */}
                  <div className="relative pt-8">
                    <h3 className="font-[var(--font-playfair)] text-[24px] font-bold text-[#1A1410] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] font-light text-[#5c5449] leading-[1.6]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Strip - 3 images */}
      <section className="relative">
        <div className="flex flex-wrap lg:flex-nowrap">
          {[
            '/images/story-1.png',
            '/images/story-2.png',
            '/images/story-3.png',
          ].map((src, index) => (
            <div
              key={index}
              className="w-1/2 lg:w-1/3 aspect-square relative overflow-hidden"
            >
              <Image
                src={src}
                alt={`Story image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Closing Dark Band */}
      <section className="bg-[#2B2018] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-[var(--font-playfair)] text-[36px] sm:text-[48px] font-bold text-[#F5F0E8] mb-8">
              Come hungry.
            </h2>
            <Link
              href="/menu"
              className="inline-flex items-center px-8 py-3.5 border border-[#F5F0E8]/40 text-[#F5F0E8] text-[13px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#F5F0E8]/10 transition-colors"
            >
              See the Menu &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

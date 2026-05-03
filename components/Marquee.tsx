'use client';

export default function Marquee() {
  const text = 'EMBER · FIRE ROASTED · FRESH DAILY · ';

  return (
    <div className="bg-[#2B2018] py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {/* Repeat text multiple times for seamless loop */}
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-[14px] font-medium tracking-[0.22em] uppercase text-[#F5F0E8]/60 mx-2"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

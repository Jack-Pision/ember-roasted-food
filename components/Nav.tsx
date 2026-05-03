'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { getTotalItems, openCart } = useCartStore();
  const cartCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/menu', label: 'MENU' },
    { href: '/story', label: 'STORY' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F5F0E8] transition-all duration-300 ${
        isScrolled ? 'border-b border-[#EDE4D3]' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-[var(--font-playfair)] text-[24px] font-bold text-[#1A1410] tracking-tight"
          >
            EMBER
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-medium tracking-[0.18em] uppercase transition-colors ${
                  pathname === link.href
                    ? 'text-[#C8602A]'
                    : 'text-[#1A1410] hover:text-[#C8602A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#1A1410] hover:text-[#C8602A] transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C8602A] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Button */}
            <Link
              href="/menu"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#C8602A] text-white text-[12px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    openCart,
    items,
    updateQuantity,
    removeItem,
    getTotalPrice,
    clearCart,
    lastAddedItem,
  } = useCartStore();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Pulse animation when item is added
  useEffect(() => {
    if (lastAddedItem) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 300);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem, items.length]);

  const handlePlaceOrder = () => {
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      setShowSuccess(false);
      closeCart();
    }, 2000);
  };

  const total = getTotalPrice();

  return (
    <>
      {/* Floating Cart Button */}
      <AnimatePresence>
        {!isCartOpen && items.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={openCart}
            className={`fixed bottom-6 right-6 z-[60] w-14 h-14 bg-[#C8602A] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#a34d20] transition-colors ${
              isPulsing ? 'animate-cart-pulse' : ''
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#1A1410] text-white text-[11px] font-medium rounded-full flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeCart}
              className="fixed inset-0 bg-[#1A1410]/60 z-[70]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#F5F0E8] z-[80] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#EDE4D3]">
                <h2 className="font-[var(--font-playfair)] text-[24px] font-bold text-[#1A1410]">
                  Your Order
                </h2>
                <button
                  onClick={closeCart}
                  className="w-10 h-10 flex items-center justify-center text-[#1A1410] hover:text-[#C8602A] transition-colors"
                  aria-label="Close"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag size={48} strokeWidth={1} className="mx-auto text-[#8C7355]/40 mb-4" />
                    <p className="font-[var(--font-fraunces)] italic text-[16px] text-[#8C7355]">
                      Your cart is empty
                    </p>
                    <p className="text-[14px] text-[#8C7355]/60 mt-2">
                      Add some fire-roasted goodness!
                    </p>
                  </div>
                ) : showSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#3D6B41] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-[var(--font-playfair)] text-[20px] font-bold text-[#1A1410] mb-2">
                      Order Placed!
                    </p>
                    <p className="font-[var(--font-fraunces)] italic text-[14px] text-[#8C7355]">
                      Thanks for choosing EMBER
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.dish.id}
                        className="flex gap-4 bg-[#EDE4D3] rounded-[6px] p-4"
                      >
                        {/* Item Info */}
                        <div className="flex-1">
                          <h3 className="text-[15px] font-medium text-[#1A1410] mb-1">
                            {item.dish.name}
                          </h3>
                          <p className="text-[13px] text-[#8C7355] mb-2">
                            ${item.dish.price.toFixed(2)} each
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-[#F5F0E8] rounded text-[#1A1410] hover:text-[#C8602A] transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus size={14} strokeWidth={1.5} />
                            </button>
                            <span className="w-8 text-center text-[14px] font-medium text-[#1A1410]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-[#F5F0E8] rounded text-[#1A1410] hover:text-[#C8602A] transition-colors"
                              aria-label="Increase"
                            >
                              <Plus size={14} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>

                        {/* Subtotal & Remove */}
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeItem(item.dish.id)}
                            className="text-[#8C7355] hover:text-[#C8602A] transition-colors"
                            aria-label="Remove item"
                          >
                            <X size={16} strokeWidth={1.5} />
                          </button>
                          <span className="text-[15px] font-medium text-[#C8602A]">
                            ${(item.dish.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && !showSuccess && (
                <div className="p-6 border-t border-[#EDE4D3] bg-[#F5F0E8]">
                  {/* Total */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[16px] font-medium text-[#1A1410]">Total</span>
                    <span className="text-[24px] font-normal text-[#C8602A]">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full py-4 bg-[#C8602A] text-white text-[14px] font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#a34d20] transition-colors"
                  >
                    Place Order
                  </button>

                  <p className="text-center text-[12px] text-[#8C7355]/60 mt-3">
                    Portfolio demo — no real checkout
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

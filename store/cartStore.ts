import { create } from 'zustand';
import { Dish } from '@/data/menu';

export interface CartItem {
  dish: Dish;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  isItemDrawerOpen: boolean;
  selectedDish: Dish | null;
  lastAddedItem: string | null;
  addItem: (dish: Dish, quantity?: number) => void;
  removeItem: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  openCart: () => void;
  closeCart: () => void;
  openItemDrawer: (dish: Dish) => void;
  closeItemDrawer: () => void;
  clearLastAdded: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isCartOpen: false,
  isItemDrawerOpen: false,
  selectedDish: null,
  lastAddedItem: null,

  addItem: (dish, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.dish.id === dish.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.dish.id === dish.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          lastAddedItem: dish.name,
        };
      }
      return {
        items: [...state.items, { dish, quantity }],
        lastAddedItem: dish.name,
      };
    });
  },

  removeItem: (dishId) => {
    set((state) => ({
      items: state.items.filter((item) => item.dish.id !== dishId),
    }));
  },

  updateQuantity: (dishId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(dishId);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.dish.price * item.quantity,
      0
    );
  },

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  openItemDrawer: (dish) => set({ isItemDrawerOpen: true, selectedDish: dish }),
  closeItemDrawer: () => set({ isItemDrawerOpen: false, selectedDish: null }),

  clearLastAdded: () => set({ lastAddedItem: null }),
}));

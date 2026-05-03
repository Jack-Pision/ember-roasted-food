export interface Dish {
  id: string;
  name: string;
  category: 'bowl' | 'wrap' | 'side';
  description: string;
  price: number;
  image: string;
  tags: ('vegan' | 'vegetarian' | 'spicy' | 'gluten-free')[];
  isTodaySpecial: boolean;
  isFeatured: boolean;
}

export const menuItems: Dish[] = [
  // BOWLS
  {
    id: 'ember-roast-bowl',
    name: 'Ember Roast Bowl',
    category: 'bowl',
    description: 'Fire-kissed vegetables, quinoa, harissa drizzle, toasted seeds.',
    price: 14.90,
    image: '/images/ember-roast-bowl.png',
    tags: ['vegan', 'gluten-free'],
    isTodaySpecial: true,
    isFeatured: true,
  },
  {
    id: 'charred-veggie-bowl',
    name: 'Charred Veggie Bowl',
    category: 'bowl',
    description: 'Seasonal roasted vegetables, tahini, pickled onions, herbs.',
    price: 12.50,
    image: '/images/charred-veggie-bowl.png',
    tags: ['vegan', 'gluten-free'],
    isTodaySpecial: false,
    isFeatured: true,
  },
  {
    id: 'spicy-chicken-bowl',
    name: 'Spicy Chicken Bowl',
    category: 'bowl',
    description: 'Marinated grilled chicken, smoky paprika, avocado, lime crema.',
    price: 15.50,
    image: '/images/spicy-chicken-bowl.png',
    tags: ['spicy', 'gluten-free'],
    isTodaySpecial: false,
    isFeatured: true,
  },
  // WRAPS
  {
    id: 'smoked-beef-wrap',
    name: 'Smoked Beef Wrap',
    category: 'wrap',
    description: 'Slow-smoked brisket, caramelized onions, chimichurri, warm flatbread.',
    price: 13.00,
    image: '/images/smoked-beef-wrap.png',
    tags: [],
    isTodaySpecial: false,
    isFeatured: true,
  },
  {
    id: 'grilled-halloumi-wrap',
    name: 'Grilled Halloumi Wrap',
    category: 'wrap',
    description: 'Charred halloumi, roasted peppers, mint yogurt, fresh flatbread.',
    price: 11.50,
    image: '/images/grilled-halloumi-wrap.png',
    tags: ['vegetarian'],
    isTodaySpecial: false,
    isFeatured: false,
  },
  // SIDES
  {
    id: 'ember-fries',
    name: 'Ember Fries',
    category: 'side',
    description: 'Twice-cooked potatoes, smoked paprika, sea salt, harissa aioli.',
    price: 5.50,
    image: '/images/ember-fries.png',
    tags: ['vegan', 'gluten-free'],
    isTodaySpecial: false,
    isFeatured: false,
  },
];

export const getTodaySpecial = (): Dish | undefined => {
  return menuItems.find(item => item.isTodaySpecial);
};

export const getFeaturedItems = (): Dish[] => {
  return menuItems.filter(item => item.isFeatured);
};

export const getItemsByCategory = (category: Dish['category'] | 'all'): Dish[] => {
  if (category === 'all') return menuItems;
  return menuItems.filter(item => item.category === category);
};

export const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'bowl', label: 'BOWLS' },
  { id: 'wrap', label: 'WRAPS' },
  { id: 'side', label: 'SIDES' },
] as const;

export type CategoryId = typeof categories[number]['id'];

export const getDietaryTagStyle = (tag: string): { bg: string; text: string; label: string } => {
  switch (tag) {
    case 'vegan':
    case 'vegetarian':
      return { bg: 'bg-[#3D6B41]', text: 'text-white', label: tag === 'vegan' ? 'V' : 'VG' };
    case 'spicy':
      return { bg: 'bg-[#C8602A]', text: 'text-white', label: '🌶' };
    case 'gluten-free':
      return { bg: 'bg-[#8C7355]', text: 'text-white', label: 'GF' };
    default:
      return { bg: 'bg-[#8C7355]', text: 'text-white', label: tag };
  }
};

import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Wrap Dress',
    price: 76,
    imageUrl: 'https://picsum.photos/seed/wrapdress/600/800',
    description: 'A timeless wrap dress for any occasion.',
    category: 'Dress',
  },
  {
    id: 2,
    name: 'Classic Blouse',
    price: 45,
    imageUrl: 'https://picsum.photos/seed/blouse/600/800',
    description: 'An elegant and versatile classic blouse.',
    category: 'Tops',
  },
  {
    id: 3,
    name: 'Denim Jacket',
    price: 57,
    imageUrl: 'https://picsum.photos/seed/denimjacket/600/800',
    description: 'A staple denim jacket for a casual look.',
    category: 'Outerwear',
  },
  {
    id: 4,
    name: 'Cozy Hoodie',
    price: 80,
    imageUrl: 'https://picsum.photos/seed/hoodie/600/800',
    description: 'A comfortable and stylish oversized hoodie.',
    category: 'Tops',
  },
  {
    id: 5,
    name: 'Polo Dress',
    price: 56,
    imageUrl: 'https://picsum.photos/seed/polodress/600/800',
    description: 'A sporty yet chic polo dress.',
    category: 'Dress',
  },
  {
    id: 6,
    name: 'Long Shirt',
    price: 42,
    imageUrl: 'https://picsum.photos/seed/longshirt/600/800',
    description: 'A minimalist long shirt, perfect for layering.',
    category: 'Tops',
  },
  {
    id: 7,
    name: 'Chic Blazer',
    price: 150,
    imageUrl: 'https://picsum.photos/seed/blazer/600/800',
    description: 'A tailored blazer for a sophisticated look.',
    category: 'Outerwear',
  },
  {
    id: 8,
    name: 'Printed Long Dress',
    price: 132,
    imageUrl: 'https://picsum.photos/seed/longdress/600/800',
    description: 'A beautiful long dress with a delicate print.',
    category: 'Dress',
  },
    {
    id: 9,
    name: 'Grey Jas',
    price: 111,
    imageUrl: 'https://picsum.photos/seed/jas/600/800',
    description: 'A versatile and modern grey jas jacket.',
    category: 'Outerwear',
  },
  {
    id: 10,
    name: 'High-Waist Trousers',
    price: 88,
    imageUrl: 'https://picsum.photos/seed/trousers/600/800',
    description: 'Flattering high-waist trousers in a neutral tone.',
    category: 'Bottoms',
  },
  {
    id: 11,
    name: 'Silk Camisole',
    price: 35,
    imageUrl: 'https://picsum.photos/seed/camisole/600/800',
    description: 'A luxurious silk camisole for day or night.',
    category: 'Tops',
  },
  {
    id: 12,
    name: 'A-Line Skirt',
    price: 65,
    imageUrl: 'https://picsum.photos/seed/skirt/600/800',
    description: 'A classic A-line skirt with a modern twist.',
    category: 'Bottoms',
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate network delay
  });
};
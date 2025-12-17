import AirForce from '../assets/CardImages/AirForce.png';
import OnitsukaTiger from '../assets/CardImages/OnitsukaTiger.png';
import Converse from '../assets/CardImages/Converse.png';
import Samba from '../assets/CardImages/Samba.png';
import NB9060 from '../assets/CardImages/NB9060-.png';
import PumaPalermo from '../assets/CardImages/palermo.png';

export const allProducts = [
  // Nike Products
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: '4999.00',
    category: 'Nike',
    imageUrl: AirForce,
    description: 'The legendary Nike Air Force 1. Born on the basketball court in 1982, the AF1 was the first basketball shoe to feature Nike Air.',
    rating: 4.8,
    reviews: 245,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 2,
    name: 'Nike Cortez',
    price: '5499.00',
    category: 'Nike',
    imageUrl: AirForce,
    description: 'Classic Nike Cortez with superior comfort and style.',
    rating: 4.6,
    reviews: 182,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 3,
    name: 'Nike Blazer Mid',
    price: '6499.00',
    category: 'Nike',
    imageUrl: AirForce,
    description: 'Premium leather Nike Blazer for timeless style.',
    rating: 4.7,
    reviews: 198,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },

  // Adidas Products
  {
    id: 4,
    name: 'Adidas Samba',
    price: '9999.00',
    category: 'Adidas',
    imageUrl: Samba,
    description: 'The iconic Adidas Samba. Originally designed for indoor soccer, now a global lifestyle icon.',
    rating: 4.9,
    reviews: 521,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 5,
    name: 'Adidas Stan Smith',
    price: '8499.00',
    category: 'Adidas',
    imageUrl: Samba,
    description: 'The legendary Adidas Stan Smith with minimalist design.',
    rating: 4.7,
    reviews: 412,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 6,
    name: 'Adidas ZX 500',
    price: '7999.00',
    category: 'Adidas',
    imageUrl: Samba,
    description: 'Retro running silhouette with modern comfort.',
    rating: 4.5,
    reviews: 289,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },

  // Converse Products
  {
    id: 7,
    name: 'Converse Chuck Taylor All Star',
    price: '6999.00',
    category: 'Converse',
    imageUrl: Converse,
    description: 'The original and most iconic basketball shoe of all time.',
    rating: 4.8,
    reviews: 687,
    sizes: ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },
  {
    id: 8,
    name: 'Converse One Star',
    price: '5999.00',
    category: 'Converse',
    imageUrl: Converse,
    description: 'Suede low-top Converse with vintage appeal.',
    rating: 4.6,
    reviews: 234,
    sizes: ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },

  // New Balance Products
  {
    id: 9,
    name: 'New Balance 9060',
    price: '7999.00',
    category: 'New Balance',
    imageUrl: NB9060,
    description: 'Modern running shoe with ultimate comfort and stability.',
    rating: 4.7,
    reviews: 356,
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },
  {
    id: 10,
    name: 'New Balance 574',
    price: '6499.00',
    category: 'New Balance',
    imageUrl: NB9060,
    description: 'Classic retro silhouette with timeless design.',
    rating: 4.8,
    reviews: 543,
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },
  {
    id: 11,
    name: 'New Balance 990v5',
    price: '12999.00',
    category: 'New Balance',
    imageUrl: NB9060,
    description: 'Premium American-made running shoe.',
    rating: 4.9,
    reviews: 421,
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },

  // Puma Products
  {
    id: 12,
    name: 'Puma Palermo',
    price: '4499.00',
    category: 'Puma',
    imageUrl: PumaPalermo,
    description: 'Vintage soccer shoe turned lifestyle staple.',
    rating: 4.6,
    reviews: 178,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 13,
    name: 'Puma Suede Classic',
    price: '4999.00',
    category: 'Puma',
    imageUrl: PumaPalermo,
    description: 'Timeless Puma Suede in classic silhouette.',
    rating: 4.7,
    reviews: 267,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 14,
    name: 'Puma RS-X',
    price: '5499.00',
    category: 'Puma',
    imageUrl: PumaPalermo,
    description: 'Retro running style with bold design.',
    rating: 4.5,
    reviews: 142,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },

  // Asics Products
  {
    id: 15,
    name: 'Asics Gel-Lyte III',
    price: '8999.00',
    category: 'Asics',
    imageUrl: OnitsukaTiger,
    description: 'Split tongue running classic with exceptional comfort.',
    rating: 4.8,
    reviews: 312,
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },
  {
    id: 16,
    name: 'Asics Gel-Kayano',
    price: '10999.00',
    category: 'Asics',
    imageUrl: OnitsukaTiger,
    description: 'Premium stability running shoe.',
    rating: 4.9,
    reviews: 198,
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    inStock: true
  },

  // Onitsuka Tiger Products
  {
    id: 17,
    name: 'Onitsuka Tiger Mexico 66',
    price: '10999.00',
    category: 'Onitsuka Tiger',
    imageUrl: OnitsukaTiger,
    description: 'Heritage running shoe with vintage aesthetic.',
    rating: 4.7,
    reviews: 289,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  },
  {
    id: 18,
    name: 'Onitsuka Tiger Ultimate 81',
    price: '9499.00',
    category: 'Onitsuka Tiger',
    imageUrl: OnitsukaTiger,
    description: 'Bold retro silhouette with modern appeal.',
    rating: 4.6,
    reviews: 156,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  }
];

export const bestSellerProducts = [
  allProducts[0],  // Nike Air Force 1
  allProducts[3],  // Adidas Samba
  allProducts[6],  // Converse Chuck Taylor
  allProducts[8],  // New Balance 9060
  allProducts[11], // Puma Palermo
  allProducts[16]  // Onitsuka Tiger Mexico 66
];

export const categories = ['Nike', 'Adidas', 'Converse', 'New Balance', 'Puma', 'Asics', 'Onitsuka Tiger'];

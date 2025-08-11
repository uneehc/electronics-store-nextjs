export const mockProducts = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 324,
    inStock: true,
    description: 'The most advanced iPhone yet with incredible camera system and performance.',
    isWishlisted: false,
    specifications: {
      Display: '6.7-inch Super Retina XDR display with ProMotion',
      Chip: 'A16 Bionic chip',
      Camera: 'Pro camera system: 48MP Main, 12MP Ultra Wide, 12MP Telephoto'
    },
    category: 'smartphones',
    brand: 'Apple'
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2399,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 156,
    inStock: true,
    description: 'The ultimate pro laptop, delivering game-changing performance and a stunning Liquid Retina XDR display.',
    isWishlisted: true,
    specifications: {
      Display: '16.2-inch Liquid Retina XDR display',
      Chip: 'Apple M2 Pro chip',
      Memory: '16GB unified memory',
      Storage: '512GB SSD'
    },
    category: 'laptops',
    brand: 'Apple'
  },
  {
    id: 3,
    name: 'iPad Air',
    price: 599,
    originalPrice: 649,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 89,
    inStock: false,
    description: 'Powerful. Colorful. Wonderful. The iPad Air does more than a computer in simpler, more magical ways.',
    isWishlisted: false,
    specifications: {
      Display: '10.9-inch Liquid Retina display',
      Chip: 'Apple M1 chip',
      Storage: '64GB'
    },
    category: 'tablets',
    brand: 'Apple'
  },
  {
    id: 4,
    name: 'Sony WH-1000XM4',
    price: 279,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 267,
    inStock: true,
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology and Edge-AI, co-developed with Sony Music Studios Tokyo.',
    isWishlisted: false,
    specifications: {
      Type: 'Over-ear',
      Connectivity: 'Bluetooth 5.0, NFC',
      'Battery Life': 'Up to 30 hours'
    },
    category: 'headphones',
    brand: 'Sony'
  },
  {
    id: 5,
    name: 'Samsung Galaxy S23',
    price: 899,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 143,
    inStock: true,
    description: 'Capture and share every moment with a pro-grade camera and a stunningly bright display.',
    isWishlisted: false,
    specifications: {
      Display: '6.1-inch Dynamic AMOLED 2X',
      Processor: 'Snapdragon 8 Gen 2 for Galaxy',
      Camera: '50MP Wide, 10MP Telephoto, 12MP Ultrawide'
    },
    category: 'smartphones',
    brand: 'Samsung'
  },
  {
    id: 6,
    name: 'Dell XPS 13',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 98,
    inStock: true,
    description: 'A 13-inch laptop designed with precision-engineered details, from stunning materials to minimal footprint.',
    isWishlisted: true,
    specifications: {
      Display: '13.4-inch FHD+ (1920 x 1200) InfinityEdge',
      Processor: '12th Gen Intel Core i7',
      Memory: '16GB LPDDR5',
      Storage: '512GB PCIe NVMe SSD'
    },
    category: 'laptops',
    brand: 'Dell'
  },
  {
    id: 7,
    name: 'Canon EOS R5',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 67,
    inStock: true,
    description: 'A professional full-frame mirrorless camera offering photographers and filmmakers high-resolution stills and 8K video.',
    isWishlisted: false,
    specifications: {
      Sensor: 'Full-Frame CMOS',
      Megapixels: '45MP',
      Video: '8K RAW, 4K/120p',
      'Image Stabilization': '5-axis In-Body'
    },
    category: 'cameras',
    brand: 'Canon'
  },
  {
    id: 8,
    name: 'Nintendo Switch OLED',
    price: 349,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 234,
    inStock: true,
    description: 'Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch™ – OLED Model system.',
    isWishlisted: false,
    specifications: {
      Screen: '7-inch OLED 720p',
      Storage: '64GB internal',
      'TV output': 'Up to 1080p via HDMI in TV mode',
      'Battery life': 'Approx. 4.5 - 9 hours'
    },
    category: 'gaming',
    brand: 'Nintendo'
  }
]
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
  },
  {
    id: 9,
    name: 'Google Pixel 8 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbf1?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 199,
    inStock: true,
    description: 'The most powerful, personal, and secure Pixel phone yet, with an amazing camera and Google AI.',
    isWishlisted: true,
    specifications: {
      Display: '6.7-inch Super Actua LTPO OLED',
      Chip: 'Google Tensor G3',
      Camera: '50 MP Octa PD wide, 48 MP Quad PD ultrawide, 48 MP Quad PD telephoto'
    },
    category: 'smartphones',
    brand: 'Google'
  },
  {
    id: 10,
    name: 'PlayStation 5',
    price: 499,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 450,
    inStock: false,
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio.',
    isWishlisted: true,
    specifications: {
      CPU: 'x86-64-AMD Ryzen “Zen 2”',
      GPU: 'AMD Radeon RDNA 2-based graphics engine',
      Storage: '825GB Custom SSD',
      'Max Resolution': '8K'
    },
    category: 'gaming',
    brand: 'Sony'
  },
  {
    id: 11,
    name: 'Bose QuietComfort 45',
    price: 329,
    image: 'https://images.unsplash.com/photo-1605334915647-84852a4e21aa?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 188,
    inStock: true,
    description: 'The perfect balance of quiet, comfort, and sound. World-class noise cancellation and a refined design.',
    isWishlisted: false,
    specifications: {
      Type: 'Over-ear',
      Connectivity: 'Bluetooth 5.1',
      'Battery Life': 'Up to 24 hours',
      'Noise Cancelling': 'Acoustic Noise Cancelling'
    },
    category: 'headphones',
    brand: 'Bose'
  },
  {
    id: 12,
    name: 'LG C2 Series 65-Inch OLED TV',
    price: 1699,
    originalPrice: 2099,
    image: 'https://images.unsplash.com/photo-1593784953935-86b262af4287?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 95,
    inStock: true,
    description: 'An acclaimed OLED TV with self-lit pixels, delivering perfect black, intense color, and a stunningly slim design.',
    isWishlisted: false,
    specifications: {
      'Screen Size': '65 inches',
      Technology: 'OLED evo',
      'Refresh Rate': '120Hz',
      Processor: 'α9 Gen 5 AI Processor 4K'
    },
    category: 'tvs',
    brand: 'LG'
  },
  {
    id: 13,
    name: 'Apple Watch Ultra',
    price: 799,
    image: 'https://images.unsplash.com/photo-1579586337278-35d9addb7f7d?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 112,
    inStock: true,
    description: 'The most rugged and capable Apple Watch ever, designed for exploration, adventure, and endurance.',
    isWishlisted: true,
    specifications: {
      Case: '49mm titanium',
      'Water Resistance': '100m',
      'Special Features': 'Precision dual-frequency GPS, Depth gauge, Siren'
    },
    category: 'smartwatches',
    brand: 'Apple'
  },
  {
    id: 14,
    name: 'Microsoft Surface Laptop 5',
    price: 999,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 73,
    inStock: true,
    description: 'Blazing-fast, sophisticated, and super-portable with an incredible keyboard and touchscreen.',
    isWishlisted: false,
    specifications: {
      Display: '13.5” PixelSense Display',
      Processor: '12th Gen Intel Core i5',
      Memory: '8GB LPDDR5x RAM',
      Storage: '256GB SSD'
    },
    category: 'laptops',
    brand: 'Microsoft'
  },
  {
    id: 15,
    name: 'GoPro HERO11 Black',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1518715079205-199b4d8a1435?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 130,
    inStock: true,
    description: 'Get incredible highlight videos sent to your phone automatically. Everything starts with HERO11 Black—the most powerful GoPro yet.',
    isWishlisted: false,
    specifications: {
      Video: '5.3K60 + 4K120',
      Photo: '27MP',
      'Image Stabilization': 'HyperSmooth 5.0',
      Waterproof: '33ft (10m)'
    },
    category: 'cameras',
    brand: 'GoPro'
  },
  {
    id: 16,
    name: 'Dyson V15 Detect Cordless Vacuum',
    price: 749,
    image: 'https://images.unsplash.com/photo-1579566346927-160917c33089?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 82,
    inStock: true,
    description: 'Dyson’s most powerful, intelligent cordless vacuum with a laser that reveals microscopic dust.',
    isWishlisted: true,
    specifications: {
      'Run Time': 'Up to 60 minutes',
      'Bin Volume': '0.2 gallon',
      'Filtration': 'Advanced, whole-machine filtration'
    },
    category: 'home-appliances',
    brand: 'Dyson'
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S8 Ultra',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 91,
    inStock: true,
    description: 'The first-ever Ultra tablet from Samsung. Break the rules of work and play with an epic 14.6-inch screen.',
    isWishlisted: false,
    specifications: {
      Display: '14.6" Super AMOLED, 120Hz',
      Processor: 'Qualcomm Snapdragon 8 Gen 1',
      Storage: '128GB',
      Pen: 'S Pen included'
    },
    category: 'tablets',
    brand: 'Samsung'
  },
  {
    id: 18,
    name: 'Logitech MX Master 3S',
    price: 99,
    image: 'https://images.unsplash.com/photo-1615666793923-9365c7674266?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 310,
    inStock: true,
    description: 'An iconic mouse remastered. Experience ultimate comfort, performance, and flow with quiet clicks and an 8K DPI sensor.',
    isWishlisted: false,
    specifications: {
      Sensor: 'Darkfield high precision',
      DPI: '200-8000 DPI',
      Connectivity: 'Bluetooth, Logi Bolt USB Receiver',
      'Customization': '7 buttons'
    },
    category: 'accessories',
    brand: 'Logitech'
  },
  {
    id: 19,
    name: 'NVIDIA GeForce RTX 4090',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1591435552999-6a31062b324a?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 205,
    inStock: true,
    description: 'The ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.',
    isWishlisted: true,
    specifications: {
      Memory: '24 GB GDDR6X',
      'Boost Clock': '2.52 GHz',
      Architecture: 'Ada Lovelace'
    },
    category: 'pc-components',
    brand: 'NVIDIA'
  },
  {
    id: 20,
    name: 'Sonos Arc Soundbar',
    price: 899,
    image: 'https://images.unsplash.com/photo-1627889610530-b520d6f96b27?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 140,
    inStock: true,
    description: 'The premium smart soundbar for TV, movies, music, gaming, and more. Bring all your entertainment to life with the brilliantly realistic sound of Arc, featuring Dolby Atmos.',
    isWishlisted: false,
    specifications: {
      Amplifiers: 'Eleven Class-D digital amplifiers',
      'Voice Control': 'Amazon Alexa and Google Assistant',
      Connectivity: 'HDMI eARC, Optical Audio, Wi-Fi'
    },
    category: 'home-theater',
    brand: 'Sonos'
  },
  {
    id: 21,
    name: 'Xbox Series X',
    price: 499,
    image: 'https://images.unsplash.com/photo-1621259182962-43153571d18f?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 398,
    inStock: true,
    description: 'The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power.',
    isWishlisted: false,
    specifications: {
      CPU: '8X Cores @ 3.8 GHz Custom Zen 2',
      GPU: '12 TFLOPS, 52 CUs @ 1.825 GHz Custom RDNA 2',
      Storage: '1TB Custom NVME SSD',
      'Performance Target': '4K at 60 FPS, up to 120 FPS'
    },
    category: 'gaming',
    brand: 'Microsoft'
  },
  {
    id: 22,
    name: 'Apple AirPods Pro (2nd generation)',
    price: 249,
    image: 'https://images.unsplash.com/photo-1603252109612-24fa3d9874c7?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 412,
    inStock: true,
    description: 'Rebuilt from the sound up. AirPods Pro feature up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio.',
    isWishlisted: true,
    specifications: {
      'Noise Control': 'Active Noise Cancellation, Adaptive Transparency',
      Chip: 'H2 chip',
      'Battery Life': 'Up to 6 hours of listening time',
      'Case': 'MagSafe Charging Case with speaker'
    },
    category: 'headphones',
    brand: 'Apple'
  },
  {
    id: 23,
    name: 'Sony Alpha a7 IV',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1596707010994-278a5592a8b3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 88,
    inStock: true,
    description: 'Beyond basic. The a7 IV is the hybrid camera that takes "basic" to a whole new level for stills and movies.',
    isWishlisted: false,
    specifications: {
      Sensor: '33.0MP Full-frame Exmor R CMOS sensor',
      Processor: 'BIONZ XR image processing engine',
      Video: '4K 60p, 10-bit 4:2:2 recording',
      AF: 'Real-time Eye AF for humans, animals, birds'
    },
    category: 'cameras',
    brand: 'Sony'
  },
  {
    id: 24,
    name: 'MacBook Air M2',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1627572237937-27b0a791a852?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 215,
    inStock: true,
    description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency.',
    isWishlisted: false,
    specifications: {
      Display: '13.6-inch Liquid Retina display',
      Chip: 'Apple M2 chip',
      Memory: '8GB unified memory',
      Storage: '256GB SSD'
    },
    category: 'laptops',
    brand: 'Apple'
  },
  {
    id: 25,
    name: 'Samsung Galaxy Watch 6',
    price: 299,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 99,
    inStock: true,
    description: 'Start your everyday wellness journey. Larger screen, personalized heart rate zones, and advanced sleep coaching.',
    isWishlisted: false,
    specifications: {
      Display: 'Sapphire Crystal Glass',
      'Health Sensors': 'Bioelectrical Impedance Analysis Sensor, Optical Heart Rate Sensor',
      'Material': 'Armor Aluminum',
      'Battery': 'Up to 40 hours'
    },
    category: 'smartwatches',
    brand: 'Samsung'
  },
  {
    id: 26,
    name: 'iRobot Roomba j7+',
    price: 799,
    image: 'https://images.unsplash.com/photo-1614859424742-c84333649712?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 65,
    inStock: true,
    description: 'The robot vacuum that identifies and avoids obstacles like pet waste and charging cords. Empties itself for up to 60 days.',
    isWishlisted: false,
    specifications: {
      'Navigation': 'PrecisionVision Navigation',
      'Disposal': 'Clean Base Automatic Dirt Disposal',
      'Smart Features': 'P.O.O.P. (Pet Owner Official Promise)',
      'Control': 'Voice Assistant & Imprint Link'
    },
    category: 'home-appliances',
    brand: 'iRobot'
  },
  {
    id: 27,
    name: 'ASUS ROG Zephyrus G14',
    price: 1649,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 115,
    inStock: true,
    description: 'Dynamic and ready to travel, the pioneering ROG Zephyrus G14 is the world’s most powerful 14-inch gaming laptop.',
    isWishlisted: true,
    specifications: {
      Display: '14-inch QHD 120Hz',
      Processor: 'AMD Ryzen 9',
      Graphics: 'NVIDIA GeForce RTX 3060',
      Memory: '16GB DDR4'
    },
    category: 'laptops',
    brand: 'ASUS'
  },
  {
    id: 28,
    name: 'OnePlus 11',
    price: 699,
    image: 'https://images.unsplash.com/photo-1651613543615-57f49635b750?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 102,
    inStock: true,
    description: 'The Shape of Power. Flagship performance with a Snapdragon 8 Gen 2 processor and 3rd Gen Hasselblad Camera for Mobile.',
    isWishlisted: false,
    specifications: {
      Display: '6.7" 120 Hz 2K Super Fluid AMOLED',
      Processor: 'Snapdragon 8 Gen 2',
      RAM: '16GB LPDDR5X',
      Charging: '100W SUPERVOOC'
    },
    category: 'smartphones',
    brand: 'OnePlus'
  },
  {
    id: 29,
    name: 'Fitbit Charge 5',
    price: 149,
    originalPrice: 179,
    image: 'https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 250,
    inStock: true,
    description: 'Optimize your routine with Daily Readiness, a score that reveals if you’re ready to work out or should prioritize recovery.',
    isWishlisted: false,
    specifications: {
      'Features': 'ECG App, EDA Scan App for Stress Management',
      GPS: 'Built-in GPS',
      'Battery Life': 'Up to 7 days',
      Display: 'Color AMOLED'
    },
    category: 'smartwatches',
    brand: 'Fitbit'
  },
  {
    id: 30,
    name: 'Nespresso VertuoPlus Coffee and Espresso Machine',
    price: 159,
    image: 'https://images.unsplash.com/photo-1563865428-5a034267732a?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 290,
    inStock: true,
    description: 'Nespresso\'s Centrifusion technology uses barcodes to deliver the best in-cup results including the perfect crema for large coffee cup sizes.',
    isWishlisted: false,
    specifications: {
      'Cup Sizes': '5 (Espresso, Double Espresso, Gran Lungo, Coffee, Alto)',
      'Heat-up time': '20-25 seconds',
      'Water Tank': '40 oz',
      'Used capsule container': '10 large capsules'
    },
    category: 'home-appliances',
    brand: 'Nespresso'
  },
  {
    id: 31,
    name: 'Dell UltraSharp U2723QE Monitor',
    price: 579,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 83,
    inStock: true,
    description: 'A 27-inch 4K UHD monitor with stunning color and contrast that features groundbreaking IPS Black technology and a connectivity hub.',
    isWishlisted: false,
    specifications: {
      Size: '27-inch',
      Resolution: '4K 3840x2160',
      Panel: 'IPS Black Technology',
      Ports: 'DisplayPort, HDMI, USB-C Hub'
    },
    category: 'monitors',
    brand: 'Dell'
  },
  {
    id: 32,
    name: 'Keychron K2 Mechanical Keyboard',
    price: 99,
    image: 'https://images.unsplash.com/photo-1618384887924-2c98d6eda8e3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 180,
    inStock: true,
    description: 'A 75% layout wireless mechanical keyboard. It’s a great solution to fulfill your typing need in a compact design.',
    isWishlisted: true,
    specifications: {
      Layout: '75%',
      'Keycaps': 'Double-shot ABS',
      Backlight: 'RGB',
      Connectivity: 'Bluetooth 5.1, USB Type-C'
    },
    category: 'accessories',
    brand: 'Keychron'
  },
  {
    id: 33,
    name: 'Meta Quest 3',
    price: 499,
    image: 'https://images.unsplash.com/photo-1634821633426-4b2b11568a85?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 150,
    inStock: true,
    description: 'Breakthrough mixed reality. A redesigned headset with more power, higher resolution displays, and groundbreaking passthrough.',
    isWishlisted: true,
    specifications: {
      Resolution: '2064x2208 pixels per eye',
      Processor: 'Snapdragon XR2 Gen 2',
      RAM: '8GB',
      'Passthrough': 'Full-color'
    },
    category: 'gaming',
    brand: 'Meta'
  },
  {
    id: 34,
    name: 'Garmin Fenix 7',
    price: 699,
    image: 'https://images.unsplash.com/photo-1530518771942-3868a2f4c28f?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 78,
    inStock: true,
    description: 'The ultimate multisport GPS watch, with a rugged design, advanced training features, and 24/7 health monitoring.',
    isWishlisted: false,
    specifications: {
      Lens: 'Power Sapphire',
      Bezel: 'Titanium',
      'Battery Life': 'Up to 22 days with solar',
      'Navigation': 'Multi-band GNSS with SatIQ'
    },
    category: 'smartwatches',
    brand: 'Garmin'
  },
  {
    id: 35,
    name: 'Intel Core i9-13900K CPU',
    price: 589,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6e74ca3ea7?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 134,
    inStock: true,
    description: 'Push your in-game performance and creative pursuits with Intel\'s flagship desktop processor.',
    isWishlisted: true,
    specifications: {
      Cores: '24 (8 P-cores + 16 E-cores)',
      Threads: '32',
      'Max Turbo Frequency': '5.8 GHz',
      Socket: 'LGA 1700'
    },
    category: 'pc-components',
    brand: 'Intel'
  },
  {
    id: 36,
    name: 'Amazon Fire HD 10 Tablet',
    price: 149,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
    rating: 3,
    reviews: 540,
    inStock: true,
    description: 'Vibrant 10.1” 1080p Full HD display and powerful performance thanks to 3 GB of RAM and an octa-core processor.',
    isWishlisted: false,
    specifications: {
      Display: '10.1" 1080p Full HD',
      Storage: '32GB (expandable by up to 1 TB)',
      RAM: '3 GB',
      'Battery Life': 'Up to 12 hours'
    },
    category: 'tablets',
    brand: 'Amazon'
  },
  {
    id: 37,
    name: 'Razer Blade 15',
    price: 2499,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 99,
    inStock: true,
    description: 'The ultimate gaming laptop with a powerful NVIDIA GeForce RTX 30-series GPU and a stunning QHD 240Hz display.',
    isWishlisted: true,
    specifications: {
      Display: '15.6" QHD 240Hz',
      Processor: 'Intel Core i7',
      Graphics: 'NVIDIA GeForce RTX 3070 Ti',
      Storage: '1TB SSD'
    },
    category: 'laptops',
    brand: 'Razer'
  },
  {
    id: 38,
    name: 'Blue Yeti USB Microphone',
    price: 129,
    image: 'https://images.unsplash.com/photo-1616429399918-d4b9f873b5ce?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 350,
    inStock: true,
    description: 'The world\'s #1 USB microphone, creating unparalleled recordings with your computer using Blue\'s proprietary tri-capsule technology.',
    isWishlisted: false,
    specifications: {
      'Polar Patterns': 'Cardioid, Bidirectional, Omnidirectional, Stereo',
      'Sample Rate': '48 kHz',
      'Bit Rate': '16-bit',
      'Compatibility': 'Mac and Windows'
    },
    category: 'accessories',
    brand: 'Blue'
  },
  {
    id: 39,
    name: 'TCL 6-Series R655 QLED TV',
    price: 949,
    image: 'https://images.unsplash.com/photo-1628779238951-42171d2b2729?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 121,
    inStock: true,
    description: 'Stunning 4K picture quality with Mini-LED technology provides striking brightness and contrast for a truly cinematic experience.',
    isWishlisted: false,
    specifications: {
      'Screen Size': '65 inches',
      Technology: 'QLED with Mini-LED',
      'Refresh Rate': '120Hz (Variable Refresh Rate)',
      'Smart OS': 'Roku TV'
    },
    category: 'tvs',
    brand: 'TCL'
  },
  {
    id: 40,
    name: 'Sennheiser Momentum 4',
    price: 349,
    image: 'https://images.unsplash.com/photo-1596707010994-278a5592a8b3?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 92,
    inStock: true,
    description: 'Sennheiser’s Signature Sound, Adaptive Noise Cancellation, and an incredible 60-hour battery life.',
    isWishlisted: false,
    specifications: {
      Type: 'Over-ear',
      Connectivity: 'Bluetooth 5.2',
      'Battery Life': 'Up to 60 hours',
      'Codecs': 'SBC, AAC, aptX, aptX adaptive'
    },
    category: 'headphones',
    brand: 'Sennheiser'
  },
  {
    id: 41,
    name: 'Samsung 980 Pro SSD 1TB',
    price: 109,
    originalPrice: 139,
    image: 'https://images.unsplash.com/photo-1589578235532-613c796504a3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 450,
    inStock: true,
    description: 'Unleash the power of the Samsung PCIe 4.0 NVMe SSD 980 PRO for next-level computing.',
    isWishlisted: true,
    specifications: {
      Capacity: '1TB',
      Interface: 'PCIe Gen 4.0 x4, NVMe 1.3c',
      'Read Speed': 'Up to 7,000 MB/s',
      'Write Speed': 'Up to 5,000 MB/s'
    },
    category: 'pc-components',
    brand: 'Samsung'
  },
  {
    id: 42,
    name: 'KitchenAid Artisan Stand Mixer',
    price: 449,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a7151?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 310,
    inStock: true,
    description: 'The iconic stand mixer, built to last. A powerful motor and a 5-quart stainless steel bowl for all your baking needs.',
    isWishlisted: true,
    specifications: {
      Capacity: '5 Quart',
      Speeds: '10',
      'Included Attachments': 'Flat Beater, Dough Hook, Wire Whip',
      'Colors': 'Over 20 available'
    },
    category: 'home-appliances',
    brand: 'KitchenAid'
  },
  {
    id: 43,
    name: 'Nikon Z6 II Mirrorless Camera',
    price: 1996,
    image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 55,
    inStock: true,
    description: 'The multimedia powerhouse. A full-frame mirrorless camera that excels in both speed, resolution and low-light performance.',
    isWishlisted: false,
    specifications: {
      Sensor: '24.5MP Full-Frame CMOS',
      Processors: 'Dual EXPEED 6',
      Video: '4K UHD 60p',
      'Card Slots': 'Dual (CFexpress/XQD and SD)'
    },
    category: 'cameras',
    brand: 'Nikon'
  },
  {
    id: 44,
    name: 'HP Spectre x360 14',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 81,
    inStock: false,
    description: 'A stunning 2-in-1 laptop with a gem-cut design, OLED display, and powerful performance for creators.',
    isWishlisted: false,
    specifications: {
      Display: '13.5" 3K2K OLED touch display',
      Processor: 'Intel Core i7',
      Memory: '16GB RAM',
      Storage: '1TB SSD'
    },
    category: 'laptops',
    brand: 'HP'
  },
  {
    id: 45,
    name: 'Valve Steam Deck',
    price: 399,
    image: 'https://images.unsplash.com/photo-1645572213279-b11c01b739e1?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 210,
    inStock: true,
    description: 'Your PC games, on the go. A powerful, portable PC gaming device designed for comfort and a console-like experience.',
    isWishlisted: true,
    specifications: {
      APU: 'AMD Aerith',
      RAM: '16 GB LPDDR5',
      Storage: '64GB eMMC (base model)',
      Display: '7" 1280 x 800px LCD'
    },
    category: 'gaming',
    brand: 'Valve'
  },
  {
    id: 46,
    name: 'Logitech C920 Pro HD Webcam',
    price: 79,
    image: 'https://images.unsplash.com/photo-1608713010428-11a525b6a735?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 620,
    inStock: true,
    description: 'Full HD 1080p video calling and recording. Make a strong impression in your video conference calls with a diagonal, fixed 78° field of view.',
    isWishlisted: false,
    specifications: {
      Resolution: '1080p/30fps - 720p/30fps',
      'Focus type': 'Autofocus',
      Microphone: 'Built-in stereo mic',
      'Field of View': '78°'
    },
    category: 'accessories',
    brand: 'Logitech'
  },
  {
    id: 47,
    name: 'Apple TV 4K',
    price: 129,
    image: 'https://images.unsplash.com/photo-1595738220269-b861a4259e89?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 195,
    inStock: true,
    description: 'The future of television. The Apple TV 4K brings the best of TV together with your favorite Apple devices and services.',
    isWishlisted: false,
    specifications: {
      Chip: 'A15 Bionic',
      Resolution: '4K Dolby Vision and HDR10+',
      Remote: 'Siri Remote (3rd generation)',
      Connectivity: 'Wi-Fi 6, HDMI 2.1'
    },
    category: 'home-theater',
    brand: 'Apple'
  },
  {
    id: 48,
    name: 'DJI Mavic 3 Pro Drone',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1527977966376-94a8625445a6?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 45,
    inStock: true,
    description: 'Inspiration in Focus. The Mavic 3 Pro features a triple-camera system, including a Hasselblad main camera, for flagship imaging.',
    isWishlisted: true,
    specifications: {
      'Main Camera': '4/3 CMOS Hasselblad Camera',
      'Tele Cameras': '70mm and 166mm',
      'Flight Time': '43-min max',
      Transmission: '15km FHD Video Transmission'
    },
    category: 'cameras',
    brand: 'DJI'
  },
  {
    id: 49,
    name: 'Oura Ring Gen3',
    price: 299,
    image: 'https://images.unsplash.com/photo-1618249411982-62a2656378e0?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 110,
    inStock: true,
    description: 'A smart ring that tracks your sleep, activity, recovery, temperature, heart rate, stress, and more.',
    isWishlisted: false,
    specifications: {
      Material: 'Durable titanium',
      Sensors: 'Research-grade, NTC temperature, infrared',
      'Battery Life': 'Up to 7 days',
      'Water Resistance': 'Up to 100m'
    },
    category: 'smartwatches',
    brand: 'Oura'
  },
  {
    id: 50,
    name: 'Jabra Elite 7 Pro Earbuds',
    price: 199,
    image: 'https://images.unsplash.com/photo-1629367494143-61a6e9a013b9?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 135,
    inStock: true,
    description: 'Engineered for the ultimate call and music experience, with Jabra MultiSensor Voice™ technology.',
    isWishlisted: false,
    specifications: {
      'Noise Cancellation': 'Adjustable ANC',
      'Battery Life': 'Up to 8 hours (30 with case)',
      'Special Feature': 'Jabra MultiSensor Voice™',
      'IP Rating': 'IP57'
    },
    category: 'headphones',
    brand: 'Jabra'
  },
  {
    id: 51,
    name: 'Lenovo Yoga 9i 14"',
    price: 1449,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 68,
    inStock: true,
    description: 'A premium 2-in-1 laptop that combines sleek design, a rotating soundbar with Dolby Atmos, and a vibrant OLED display.',
    isWishlisted: false,
    specifications: {
      Display: '14" 2.8K OLED 90Hz',
      Processor: '13th Gen Intel Core i7',
      Memory: '16GB LPDDR5',
      Storage: '512GB SSD'
    },
    category: 'laptops',
    brand: 'Lenovo'
  },
  {
    id: 52,
    name: 'Instant Pot Duo Crisp 11-in-1',
    price: 199,
    image: 'https://images.unsplash.com/photo-1607968543336-3c270b21727c?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 480,
    inStock: true,
    description: 'The one-pot wonder that does it all. A pressure cooker, air fryer, slow cooker, steamer, sous vide, and more.',
    isWishlisted: false,
    specifications: {
      Capacity: '8 Quart',
      Functions: '11-in-1',
      'Special Lid': 'Air Fryer Lid',
      Safety: '10+ built-in safety features'
    },
    category: 'home-appliances',
    brand: 'Instant Pot'
  },
  {
    id: 53,
    name: 'AMD Ryzen 9 7950X CPU',
    price: 549,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1618587002039-698a88c227f5?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 155,
    inStock: true,
    description: 'The ultimate processor for gamers and creators. With 16 cores and 32 threads, dominate your competition.',
    isWishlisted: true,
    specifications: {
      Cores: '16',
      Threads: '32',
      'Max. Boost Clock': 'Up to 5.7GHz',
      Socket: 'AM5'
    },
    category: 'pc-components',
    brand: 'AMD'
  },
  {
    id: 54,
    name: 'Sony A95K QD-OLED TV',
    price: 2799,
    image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 65,
    inStock: true,
    description: 'Experience a new level of realism with Sony\'s groundbreaking QD-OLED panel, delivering unprecedented color and contrast.',
    isWishlisted: false,
    specifications: {
      'Screen Size': '65 inches',
      Technology: 'QD-OLED',
      Processor: 'Cognitive Processor XR',
      'Sound': 'Acoustic Surface Audio+'
    },
    category: 'tvs',
    brand: 'Sony'
  },
  {
    id: 55,
    name: 'Microsoft Surface Pro 9',
    price: 999,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 95,
    inStock: true,
    description: 'The 2-in-1 that’s a laptop and a tablet. A high-resolution touchscreen, powerful processors, and an iconic kickstand.',
    isWishlisted: false,
    specifications: {
      Display: '13” PixelSense Flow Display',
      Processor: '12th Gen Intel Core i5 or Microsoft SQ 3',
      'Ports': '2 x USB-C with USB 4.0/Thunderbolt 4',
      Pen: 'Surface Slim Pen 2 (sold separately)'
    },
    category: 'tablets',
    brand: 'Microsoft'
  },
  {
    id: 56,
    name: 'Alienware AW3423DW Monitor',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1586242645391-2396f455d355?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 102,
    inStock: true,
    description: 'The world’s first Quantum Dot OLED gaming monitor. Experience incredible brightness and a wide color gamut for unreal realism.',
    isWishlisted: true,
    specifications: {
      Size: '34-inch Ultrawide',
      Resolution: '3440 x 1440',
      'Refresh Rate': '175Hz',
      Panel: 'QD-OLED'
    },
    category: 'monitors',
    brand: 'Alienware'
  },
  {
    id: 57,
    name: 'SteelSeries Arctis Nova Pro',
    price: 349,
    image: 'https://images.unsplash.com/photo-1635307222415-39d1b7d34125?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 118,
    inStock: true,
    description: 'Reach almighty audio levels with the Nova Pro Acoustic System and premium high-fidelity drivers, with 360° Spatial Audio.',
    isWishlisted: false,
    specifications: {
      Audio: 'High Fidelity, 360° Spatial',
      'Noise Cancellation': 'Fully retractable ClearCast Gen 2 mic',
      DAC: 'GameDAC Gen 2',
      'Compatibility': 'PC, PlayStation, Switch'
    },
    category: 'headphones',
    brand: 'SteelSeries'
  },
  {
    id: 58,
    name: 'Seagate BarraCuda 4TB HDD',
    price: 89,
    image: 'https://images.unsplash.com/photo-1531498163558-8831935515b6?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 320,
    inStock: true,
    description: 'Versatile, fast, and dependable, the BarraCuda drive is a cost-effective way to handle all your PC needs.',
    isWishlisted: false,
    specifications: {
      Capacity: '4TB',
      Interface: 'SATA 6Gb/s',
      'Form Factor': '3.5 Inch',
      'Cache': '256 MB'
    },
    category: 'pc-components',
    brand: 'Seagate'
  },
  {
    id: 59,
    name: 'Philips Hue Starter Kit',
    price: 199,
    image: 'https://images.unsplash.com/photo-1588821323335-d2d88d3d9e8c?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 245,
    inStock: true,
    description: 'The perfect way to start with smart lighting. Control your lights from anywhere, create routines, and set the mood with millions of colors.',
    isWishlisted: false,
    specifications: {
      'Bulb Type': 'A19',
      'Color': 'White and Color Ambiance',
      'Contents': '4 Bulbs + Hue Bridge',
      'Control': 'App, Voice (Alexa, Google, Apple HomeKit)'
    },
    category: 'smart-home',
    brand: 'Philips'
  },
  {
    id: 60,
    name: 'Fujifilm X-T5 Mirrorless Camera',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1516806041772-863a35b0b3e5?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 70,
    inStock: true,
    description: 'A classic, dial-based design with cutting-edge technology. Features a high-resolution 40.2MP sensor and powerful in-body image stabilization.',
    isWishlisted: true,
    specifications: {
      Sensor: '40.2MP APS-C X-Trans CMOS 5 HR BSI',
      Video: '6.2K at 30 fps',
      Stabilization: '7-Stop In-Body Image Stabilization',
      Viewfinder: '3.69m-Dot OLED EVF'
    },
    category: 'cameras',
    brand: 'Fujifilm'
  },
  {
    id: 61,
    name: 'Google Pixel Watch',
    price: 349,
    image: 'https://images.unsplash.com/photo-1559485055-a007f352ce7a?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 125,
    inStock: true,
    description: 'Help by Google, health by Fitbit. The first smartwatch to deliver the best of Google and Fitbit.',
    isWishlisted: false,
    specifications: {
      Material: 'Custom 3D Corning Gorilla Glass 5',
      OS: 'Wear OS 3.5',
      Integration: 'Fitbit health and fitness',
      'Emergency': 'Emergency SOS and fall detection'
    },
    category: 'smartwatches',
    brand: 'Google'
  },
  {
    id: 62,
    name: 'BenQ TK700STi 4K Gaming Projector',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 58,
    inStock: true,
    description: 'Game with the lights on. A short-throw projector with 4K resolution, 3000 lumens, and an ultra-low input lag for responsive gaming.',
    isWishlisted: false,
    specifications: {
      Resolution: '4K UHD (3840 x 2160)',
      Brightness: '3000 ANSI Lumens',
      'Input Lag': '16ms (4K@60Hz)',
      'Smart Features': 'Android TV included'
    },
    category: 'home-theater',
    brand: 'BenQ'
  },
  {
    id: 63,
    name: 'Breville Barista Express Espresso Machine',
    price: 749,
    image: 'https://images.unsplash.com/photo-1594408453889-81a17a783474?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 320,
    inStock: true,
    description: 'Create third wave specialty coffee at home. The all-in-one espresso machine with an integrated grinder to go from beans to espresso in under a minute.',
    isWishlisted: true,
    specifications: {
      Grinder: 'Integrated conical burr grinder',
      'Heating System': 'ThermoCoil',
      'Pressure': '15 Bar Italian Pump',
      'Milk Frothing': 'Manual microfoam milk texturing'
    },
    category: 'home-appliances',
    brand: 'Breville'
  },
  {
    id: 64,
    name: 'Corsair Vengeance DDR5 32GB (2x16GB)',
    price: 114,
    image: 'https://images.unsplash.com/photo-1542978728-444d3b668f44?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 190,
    inStock: true,
    description: 'Push the limits of your system like never before with DDR5 memory, unlocking even faster frequencies, greater capacities, and better performance.',
    isWishlisted: true,
    specifications: {
      Capacity: '32GB (2 x 16GB)',
      Type: 'DDR5',
      Speed: '5600MHz',
      'Heat Spreader': 'Anodized Aluminum'
    },
    category: 'pc-components',
    brand: 'Corsair'
  },
  {
    id: 65,
    name: 'Roku Ultra',
    price: 99,
    image: 'https://images.unsplash.com/photo-1614849286592-2273e5a23999?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 340,
    inStock: true,
    description: 'Roku\'s most powerful player ever. Enjoy a seamless streaming experience with a lightning-fast interface and our best Wi-Fi.',
    isWishlisted: false,
    specifications: {
      'Streaming': '4K, HDR, Dolby Vision',
      Remote: 'Voice Remote Pro with lost remote finder',
      Audio: 'Dolby Atmos',
      Connectivity: 'Dual-band Wi-Fi, Ethernet'
    },
    category: 'home-theater',
    brand: 'Roku'
  },
  {
    id: 66,
    name: 'Beats Studio Pro',
    price: 349,
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 105,
    inStock: true,
    description: 'Immersive listening. An iconic design with fully adaptive Active Noise Cancelling, Personalized Spatial Audio, and lossless audio.',
    isWishlisted: false,
    specifications: {
      Type: 'Over-ear',
      Connectivity: 'Bluetooth 5.3, USB-C, 3.5mm',
      'Battery Life': 'Up to 40 hours',
      'Features': 'Personalized Spatial Audio with Dynamic Head Tracking'
    },
    category: 'headphones',
    brand: 'Beats'
  },
  {
    id: 67,
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    price: 1749,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 72,
    inStock: true,
    description: 'The ultimate business laptop. Ultralight, ultrapowerful, and ultra-durable with a stunning design.',
    isWishlisted: true,
    specifications: {
      Display: '14" 2.8K OLED',
      Processor: '13th Gen Intel Core i7 vPro',
      Memory: '32GB LPDDR5',
      Storage: '1TB PCIe Gen4 SSD'
    },
    category: 'laptops',
    brand: 'Lenovo'
  },
  {
    id: 68,
    name: 'Razer Huntsman V2 Analog Keyboard',
    price: 249,
    image: 'https://images.unsplash.com/photo-1595044485365-b6d376a7493c?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 94,
    inStock: true,
    description: 'Enter a higher dimension of control with the Razer Huntsman V2 Analog—our first analog optical gaming keyboard.',
    isWishlisted: true,
    specifications: {
      'Switch Type': 'Razer™ Analog Optical Switches',
      Lighting: 'Razer Chroma™ RGB',
      'Wrist Rest': 'Plush leatherette magnetic wrist rest',
      'Keycaps': 'Doubleshot PBT'
    },
    category: 'accessories',
    brand: 'Razer'
  },
  {
    id: 69,
    name: 'Samsung Galaxy Z Fold 5',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1627964955179-a784149b8c08?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 130,
    inStock: true,
    description: 'The ultimate productivity powerhouse with a massive screen that fits in your pocket. Unfold an immersive experience.',
    isWishlisted: true,
    specifications: {
      'Main Display': '7.6" Dynamic AMOLED 2X, 120Hz',
      'Cover Display': '6.2" Dynamic AMOLED 2X',
      Processor: 'Snapdragon 8 Gen 2 for Galaxy',
      'S Pen Support': 'Yes'
    },
    category: 'smartphones',
    brand: 'Samsung'
  },
  {
    id: 70,
    name: 'Herman Miller Aeron Chair',
    price: 1645,
    image: 'https://images.unsplash.com/photo-1603217969333-35649a3779e3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 150,
    inStock: true,
    description: 'The benchmark for ergonomic seating since its debut. Its innovative design and support for a range of postures, activities, and body types have made and kept it an icon.',
    isWishlisted: true,
    specifications: {
      Material: '8Z Pellicle elastomeric suspension',
      'Support': 'PostureFit SL back support',
      'Tilt': 'Harmonic 2 Tilt',
      'Adjustments': 'Fully adjustable arms'
    },
    category: 'office',
    brand: 'Herman Miller'
  },
  {
    id: 71,
    name: 'NVIDIA Shield TV Pro',
    price: 199,
    image: 'https://images.unsplash.com/photo-1540304319881-63878b273183?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 215,
    inStock: true,
    description: 'The ultimate streaming media player for the modern living room. Upscale HD video to 4K with the power of AI.',
    isWishlisted: false,
    specifications: {
      Processor: 'NVIDIA Tegra X1+',
      'Features': 'AI Upscaling, Dolby Vision, Dolby Atmos',
      'Gaming': 'GeForce NOW cloud gaming',
      Storage: '16GB (expandable)'
    },
    category: 'home-theater',
    brand: 'NVIDIA'
  },
  {
    id: 72,
    name: 'Logitech G Pro X Superlight Mouse',
    price: 159,
    image: 'https://images.unsplash.com/photo-1629429408210-c4c0699e954c?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 280,
    inStock: true,
    description: 'Meticulously designed in collaboration with many of the world’s leading pros. Engineered to win, it\'s the pinnacle of our continued pursuit for the highest levels of performance.',
    isWishlisted: true,
    specifications: {
      Weight: '<63 grams',
      Sensor: 'HERO 25K',
      Connectivity: 'LIGHTSPEED Wireless',
      'Battery Life': 'Up to 70 hours'
    },
    category: 'accessories',
    brand: 'Logitech'
  },
  {
    id: 73,
    name: 'iPhone 14',
    price: 799,
    image: 'https://images.unsplash.com/photo-1664478546384-219d1502447d?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 210,
    inStock: true,
    description: 'A huge leap in low-light photos. A magical new safety feature. And a super-powerful chip.',
    isWishlisted: false,
    specifications: {
      Display: '6.1-inch Super Retina XDR display',
      Chip: 'A15 Bionic chip',
      Camera: 'Advanced dual-camera system: 12MP Main, 12MP Ultra Wide'
    },
    category: 'smartphones',
    brand: 'Apple'
  },
  {
    id: 74,
    name: 'Vitamix Explorian Blender',
    price: 349,
    image: 'https://images.unsplash.com/photo-1583524590553-93cde7954932?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 205,
    inStock: true,
    description: 'A universal tool that helps you create healthy, whole-food recipes at home. From appetizers to dessert, the 64-ounce container is ideal for blending medium to large batches.',
    isWishlisted: false,
    specifications: {
      Speeds: 'Variable Speed Control',
      Motor: '2.0 HP',
      Container: '64-ounce Low-Profile',
      'Features': 'Pulse, Self-Cleaning'
    },
    category: 'home-appliances',
    brand: 'Vitamix'
  },
  {
    id: 75,
    name: 'Elgato Stream Deck MK.2',
    price: 149,
    image: 'https://images.unsplash.com/photo-1596707010994-278a5592a8b3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 188,
    inStock: true,
    description: 'Your streaming and content creation command center. 15 customizable LCD keys to control apps, launch social posts, adjust audio, and much more.',
    isWishlisted: true,
    specifications: {
      Keys: '15 Customizable LCD Keys',
      Connectivity: 'USB 2.0',
      'Customization': 'Drag and drop actions, custom icons',
      'Compatibility': 'OBS, Twitch, YouTube, Twitter, etc.'
    },
    category: 'gaming',
    brand: 'Elgato'
  },
  {
    id: 76,
    name: 'WD Black SN850X NVMe SSD 2TB',
    price: 159,
    originalPrice: 189,
    image: 'https://images.unsplash.com/photo-1627885793931-8c46d3288880?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 310,
    inStock: true,
    description: 'Insane speeds for elite gaming. The WD_BLACK SN850X NVMe™ SSD delivers top-tier performance for hardcore gamers and professionals.',
    isWishlisted: true,
    specifications: {
      Capacity: '2TB',
      Interface: 'PCIe Gen4 x4',
      'Read Speed': 'Up to 7,300 MB/s',
      'Write Speed': 'Up to 6,600 MB/s'
    },
    category: 'pc-components',
    brand: 'Western Digital'
  },
  {
    id: 77,
    name: 'Audio-Technica ATH-M50x',
    price: 169,
    image: 'https://images.unsplash.com/photo-1585152648519-487819809931?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 450,
    inStock: true,
    description: 'Critically acclaimed professional studio monitor headphones praised by top audio engineers and pro audio reviewers year after year.',
    isWishlisted: false,
    specifications: {
      Type: 'Over-ear, Closed-back',
      Driver: '45 mm large-aperture',
      'Frequency Response': '15 - 28,000 Hz',
      'Cable': 'Detachable (includes 1.2m coiled, 3.0m straight, 1.2m straight)'
    },
    category: 'headphones',
    brand: 'Audio-Technica'
  },
  {
    id: 78,
    name: 'Dell XPS 15 Laptop',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 105,
    inStock: true,
    description: 'A stunning 15.6-inch laptop with a 4-sided InfinityEdge display. Packed with staggering performance typically only available from desktops.',
    isWishlisted: false,
    specifications: {
      Display: '15.6" 3.5K OLED Touch Display',
      Processor: '13th Gen Intel Core i7',
      Graphics: 'NVIDIA GeForce RTX 4050',
      Storage: '1TB SSD'
    },
    category: 'laptops',
    brand: 'Dell'
  },
  {
    id: 79,
    name: 'Sony DualSense Wireless Controller',
    price: 69,
    image: 'https://images.unsplash.com/photo-1605901309584-815e2537815d?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 380,
    inStock: true,
    description: 'Discover a deeper, highly immersive gaming experience that brings the action to life in your hands.',
    isWishlisted: false,
    specifications: {
      Features: 'Haptic feedback, adaptive triggers',
      Microphone: 'Built-in microphone array',
      Connectivity: 'Bluetooth, USB-C',
      'Compatibility': 'PlayStation 5'
    },
    category: 'gaming',
    brand: 'Sony'
  },
  {
    id: 80,
    name: 'Ninja Foodi Smart XL 6-in-1 Grill',
    price: 299,
    image: 'https://images.unsplash.com/photo-1604542153527-897b39a3f29b?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 210,
    inStock: false,
    description: 'The Smart XL grill that sears, sizzles, and air fry crisps. With the Smart Cook System, achieve the perfect doneness from rare to well done.',
    isWishlisted: false,
    specifications: {
      Functions: 'Grill, Air Crisp, Bake, Roast, Broil, Dehydrate',
      Thermometer: 'Foodi Smart Thermometer',
      Capacity: 'XL - fits 6 steaks',
      'Control': 'Digital'
    },
    category: 'home-appliances',
    brand: 'Ninja'
  },
  {
    id: 81,
    name: 'CalDigit TS4 Thunderbolt 4 Dock',
    price: 399,
    image: 'https://images.unsplash.com/photo-1587573436399-6d30560f855d?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 112,
    inStock: true,
    description: 'The ultimate docking station. With an incredible 18 ports, the TS4 is the most powerful dock ever created.',
    isWishlisted: true,
    specifications: {
      Interface: 'Thunderbolt 4',
      'Host Charging': '98W',
      Ports: '18 (incl. 2.5GbE, SD/microSD, DP 1.4, USB-C)',
      'Display Support': 'Dual 6K 60Hz'
    },
    category: 'accessories',
    brand: 'CalDigit'
  },
  {
    id: 82,
    name: 'Xiaomi 13 Pro',
    price: 849,
    image: 'https://images.unsplash.com/photo-1598327105666-65845214a0a2?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 95,
    inStock: true,
    description: 'Masterpiece in sight. Co-engineered with Leica, this phone brings authentic Leica imagery to your smartphone.',
    isWishlisted: false,
    specifications: {
      Display: '6.73" WQHD+ 120Hz AMOLED',
      Processor: 'Snapdragon 8 Gen 2',
      Camera: 'Leica professional optical lens, 1-inch sensor',
      Charging: '120W HyperCharge'
    },
    category: 'smartphones',
    brand: 'Xiaomi'
  },
  {
    id: 83,
    name: 'Bose QuietComfort Earbuds II',
    price: 299,
    image: 'https://images.unsplash.com/photo-1629367494143-61a6e9a013b9?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 210,
    inStock: true,
    description: 'These next-generation wireless earbuds are engineered to deliver the world\'s best noise cancellation and tailored performance.',
    isWishlisted: true,
    specifications: {
      'Technology': 'CustomTune sound calibration',
      'Noise Cancellation': 'Adjustable world-class ANC',
      'Battery Life': 'Up to 6 hours (24 with case)',
      'IP Rating': 'IPX4'
    },
    category: 'headphones',
    brand: 'Bose'
  },
  {
    id: 84,
    name: 'Secretlab Titan Evo 2022 Chair',
    price: 549,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785f5533?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 250,
    inStock: true,
    description: 'The gold standard of gaming chairs. Total performance and customized support, engineered for the most demanding users.',
    isWishlisted: true,
    specifications: {
      'Upholstery': 'NEO™ Hybrid Leatherette',
      'Lumbar Support': '4-way L-ADAPT™ system',
      'Head Pillow': 'Magnetic Memory Foam',
      'Armrests': '4D with CloudSwap™'
    },
    category: 'office',
    brand: 'Secretlab'
  },
  {
    id: 85,
    name: 'Apple Watch SE',
    price: 249,
    image: 'https://images.unsplash.com/photo-1558126319-c6ca8f1c2d33?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 180,
    inStock: true,
    description: 'A great value. All the essentials to help you be motivated and active, stay connected, track your health, and stay safe.',
    isWishlisted: false,
    specifications: {
      Display: 'Retina LTPO OLED',
      Features: 'Crash Detection, Fall Detection',
      'Water Resistance': '50 meters',
      Chip: 'S8 SiP'
    },
    category: 'smartwatches',
    brand: 'Apple'
  },
  {
    id: 86,
    name: 'iPad Pro 12.9-inch',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 230,
    inStock: true,
    description: 'The ultimate iPad experience. With the astonishing performance of the M2 chip, a stunning Liquid Retina XDR display, and blazing-fast wireless.',
    isWishlisted: true,
    specifications: {
      Display: '12.9-inch Liquid Retina XDR with ProMotion',
      Chip: 'Apple M2 chip',
      Camera: 'Pro camera system with LiDAR scanner',
      'Pro-Features': 'Center Stage, Apple Pencil Hover'
    },
    category: 'tablets',
    brand: 'Apple'
  },
  {
    id: 87,
    name: 'NVIDIA GeForce RTX 4070 Ti',
    price: 799,
    image: 'https://images.unsplash.com/photo-1627299933333-582b186b8c48?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 160,
    inStock: true,
    description: 'Beyond fast for gamers and creators. Built with the ultra-efficient NVIDIA Ada Lovelace architecture.',
    isWishlisted: false,
    specifications: {
      Memory: '12 GB GDDR6X',
      'Boost Clock': '2.61 GHz',
      Architecture: 'Ada Lovelace',
      'Features': 'DLSS 3, Ray Tracing'
    },
    category: 'pc-components',
    brand: 'NVIDIA'
  },
  {
    id: 88,
    name: 'HP Envy 13 Laptop',
    price: 899,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 90,
    inStock: true,
    description: 'A sleek, stylish, and secure laptop with an all-metal chassis and powerful performance for your creative passions.',
    isWishlisted: false,
    specifications: {
      Display: '13.3" FHD IPS Display',
      Processor: 'Intel Core i7',
      Memory: '16GB DDR4',
      Storage: '512GB SSD'
    },
    category: 'laptops',
    brand: 'HP'
  },
  {
    id: 89,
    name: 'Shure SE215 Sound Isolating Earphones',
    price: 99,
    image: 'https://images.unsplash.com/photo-1606821731110-994b7931589d?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 350,
    inStock: true,
    description: 'Clear sound and deep bass in a secure, over–the-ear design. A detachable cable and a wide assortment of sleeves provide a long-lasting, customized fit.',
    isWishlisted: false,
    specifications: {
      Driver: 'Single Dynamic MicroDriver',
      'Sound Isolation': 'Up to 37 dB',
      'Cable': 'Detachable 3.5mm',
      'Colors': 'Clear, Black'
    },
    category: 'headphones',
    brand: 'Shure'
  },
  {
    id: 90,
    name: 'Xbox Elite Series 2 Controller',
    price: 179,
    image: 'https://images.unsplash.com/photo-1628765273733-b765050f2f3e?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 220,
    inStock: true,
    description: 'Play like a pro with the world’s most advanced controller. Designed to meet the needs of today’s competitive gamers.',
    isWishlisted: true,
    specifications: {
      'Thumbsticks': 'Adjustable-tension',
      'Paddles': 'Interchangeable',
      'Triggers': 'Shorter hair trigger locks',
      'Customization': 'Limitless via Xbox Accessories app'
    },
    category: 'gaming',
    brand: 'Microsoft'
  },
  {
    id: 91,
    name: 'AMD Radeon RX 7900 XTX',
    price: 999,
    image: 'https://images.unsplash.com/photo-1629429408210-c4c0699e954c?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 140,
    inStock: true,
    description: 'Delivering incredible performance, visuals, and efficiency at 4K and beyond, powered by AMD RDNA™ 3 architecture.',
    isWishlisted: true,
    specifications: {
      Memory: '24 GB GDDR6',
      Architecture: 'RDNA 3',
      'Game Clock': '2300 MHz',
      'Boost Clock': 'Up to 2500 MHz'
    },
    category: 'pc-components',
    brand: 'AMD'
  },
  {
    id: 92,
    name: 'Polk Audio Signature Elite ES20 Bookshelf Speakers',
    price: 399,
    image: 'https://images.unsplash.com/photo-1589134739542-302a8848a31c?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 60,
    inStock: true,
    description: 'Enjoy movies, music and gaming with high-resolution, room-filling, cinematic sound. Polk’s high-performance ES20 bookshelf loudspeaker is Hi-Res Audio Certified.',
    isWishlisted: false,
    specifications: {
      Type: 'Bookshelf Speaker Pair',
      Tweeter: '1” Terylene High-Resolution',
      Woofer: '6.5” Mica-Fortified Polypropylene',
      'Frequency Response': '44 Hz → 40,000 Hz'
    },
    category: 'home-theater',
    brand: 'Polk Audio'
  },
  {
    id: 93,
    name: 'Lenovo Tab P11 Gen 2',
    price: 269,
    image: 'https://images.unsplash.com/photo-1587397845756-96a86df04c47?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 75,
    inStock: true,
    description: 'First-class fun and learning with a fast & powerful processor, 11.5" 2K display, and quad speakers with Dolby Atmos.',
    isWishlisted: false,
    specifications: {
      Display: '11.5" 2K (2000 x 1200) IPS, 120Hz',
      Processor: 'MediaTek Helio G99',
      RAM: '4GB',
      Storage: '128GB'
    },
    category: 'tablets',
    brand: 'Lenovo'
  },
  {
    id: 94,
    name: 'Intel Core i5-13600K CPU',
    price: 319,
    image: 'https://images.unsplash.com/photo-163052672075-8f08f80457f3?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 230,
    inStock: true,
    description: 'This unlocked desktop processor provides the ultimate gaming experience and a new level of performance for creators.',
    isWishlisted: false,
    specifications: {
      Cores: '14 (6 P-cores + 8 E-cores)',
      Threads: '20',
      'Max Turbo Frequency': '5.1 GHz',
      Socket: 'LGA 1700'
    },
    category: 'pc-components',
    brand: 'Intel'
  },
  {
    id: 95,
    name: 'WHOOP 4.0',
    price: 239,
    image: 'https://images.unsplash.com/photo-1633911579482-1a48378120c9?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 145,
    inStock: true,
    description: 'A 24/7 personalized fitness and health coach. Monitor your recovery, sleep, training, and health, with personalized recommendations and coaching feedback.',
    isWishlisted: false,
    specifications: {
      'Metrics': 'Sleep, Strain, Recovery',
      Sensors: '5 LEDs and 4 photodiodes',
      'Battery': 'Waterproof battery pack',
      'Haptics': 'Haptic alerts for sleep and alarms'
    },
    category: 'smartwatches',
    brand: 'WHOOP'
  },
  {
    id: 96,
    name: 'G.Skill Trident Z5 RGB 32GB DDR5',
    price: 134,
    image: 'https://images.unsplash.com/photo-1629429408210-c4c0699e954c?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 120,
    inStock: true,
    description: 'Engineered for extreme performance on next-gen DDR5 platforms. Features a sleek and futuristic design with a brilliant RGB lightbar.',
    isWishlisted: true,
    specifications: {
      Capacity: '32GB (2 x 16GB)',
      Type: 'DDR5',
      Speed: '6000MHz',
      'Timing': 'CL36-36-36-96'
    },
    category: 'pc-components',
    brand: 'G.Skill'
  },
  {
    id: 97,
    name: 'Google Nest Hub Max',
    price: 229,
    image: 'https://images.unsplash.com/photo-1589128367763-5474355a29a3?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 160,
    inStock: true,
    description: 'The center of your helpful home. With the Google Assistant built-in, make video calls, get answers from Google, and control your smart home.',
    isWishlisted: false,
    specifications: {
      Display: '10" HD touchscreen (1280x800)',
      Camera: '6.5MP Nest Cam with Face Match',
      Speakers: 'Stereo speakers with 30W subwoofer',
      'Control': 'Voice and touch'
    },
    category: 'smart-home',
    brand: 'Google'
  },
  {
    id: 98,
    name: 'Sony WF-1000XM5 Earbuds',
    price: 299,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a84c?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 195,
    inStock: true,
    description: 'The best noise canceling earbuds, perfected. With our new Dynamic Driver X, you\'ll hear richer vocals and enhanced detail.',
    isWishlisted: true,
    specifications: {
      'Noise Cancelling': 'HD Noise Cancelling Processor QN2e',
      Audio: 'High-Resolution Audio Wireless',
      'Battery Life': 'Up to 8 hours (24 with case)',
      'Calls': 'AI-based noise reduction algorithm'
    },
    category: 'headphones',
    brand: 'Sony'
  },
  {
    id: 99,
    name: 'Ember Mug 2',
    price: 129,
    image: 'https://images.unsplash.com/photo-1594311242631-c006a3861257?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 115,
    inStock: true,
    description: 'Designed for home or office, the Ember Mug² does more than simply keep your coffee hot. Our smart mug allows you to set an exact drinking temperature.',
    isWishlisted: false,
    specifications: {
      Capacity: '10 oz or 14 oz',
      'Temperature Range': '120°F - 145°F (50°C - 62.5°C)',
      'Battery Life': 'Up to 1.5 hours',
      'Control': 'App-controlled'
    },
    category: 'smart-home',
    brand: 'Ember'
  },
  {
    id: 100,
    name: 'Google Chromecast with Google TV (4K)',
    price: 49,
    originalPrice: 59,
    image: 'https://images.unsplash.com/photo-1631553123898-38141c2c3664?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 420,
    inStock: true,
    description: 'Get fast streaming, and enjoy a crystal clear picture up to 4K and brighter colors with HDR. Your home screen displays movies and TV shows from all your services in one place.',
    isWishlisted: false,
    specifications: {
      Resolution: 'Up to 4K HDR, 60 FPS',
      'Video Formats': 'Dolby Vision, HDR10, HDR10+',
      OS: 'Google TV',
      Remote: 'Voice Remote'
    },
    category: 'home-theater',
    brand: 'Google'
  }
];
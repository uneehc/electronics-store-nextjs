// README.md
# ElectroStore - Next.js Electronics E-commerce

A modern, fully responsive electronics e-commerce application built with Next.js 14, featuring a mobile-first design approach.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with 1 column on mobile, 2 on tablet, 4 on desktop
- **Next.js 14**: Latest Next.js with App Router
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Shopping Cart**: Persistent cart with session storage
- **Product Catalog**: Filterable and sortable product grid
- **Image Optimization**: Next.js Image component for optimal performance
- **Context API**: Global state management for cart and auth
- **TypeScript Ready**: Easy migration to TypeScript

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - 1 product per row
- **Tablet**: `768px - 1279px` - 2 products per row  
- **Desktop**: `≥ 1280px` - 4 products per row

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **State Management**: React Context API
- **Storage**: sessionStorage for cart persistence

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── product/[id]/      # Dynamic product pages
│   ├── cart/              # Cart page
│   └── checkout/          # Checkout page
├── components/            # React components
│   ├── ui/               # UI components (Header, etc.)
│   ├── layout/           # Layout components (Sidebar)
│   ├── products/         # Product components
│   ├── cart/             # Cart components
│   ├── filters/          # Filter components
│   └── pages/            # Page components
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utilities and constants
│   ├── utils/           # Utility functions
│   ├── constants/       # App constants
│   └── data/            # Mock data
└── services/            # API services
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd electronics-store-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Mobile-First Features

### Header Component
- Collapsible mobile menu
- Search toggle for mobile
- Responsive cart badge
- Touch-friendly navigation

### Product Grid
- 1 column layout on mobile
- 2 columns on tablet
- 4 columns on desktop
- Optimized card sizing

### Sidebar Navigation
- Full-screen modal on mobile
- Slide-in panel on tablet
- Fixed sidebar on desktop
- Touch-friendly category selection

### Cart Component
- Full-width modal on mobile
- Optimized for touch interactions
- Responsive product images
- Mobile-optimized checkout flow

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Success: Green (#10B981)
- Error: Red (#EF4444)
- Gray scale for text and backgrounds

### Typography
- Mobile: Smaller, condensed text
- Tablet: Medium sizing
- Desktop: Larger, comfortable reading

### Spacing
- Mobile: Compact spacing (p-3, gap-4)
- Tablet: Medium spacing (p-4, gap-6)
- Desktop: Generous spacing (p-6, gap-8)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- Component code splitting
- Responsive image loading
- Optimized bundle size

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
1. Build the application: `npm run build`
2. Upload the `.next` folder and `package.json`
3. Set environment variables
4. Start with `npm start`

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Payment integration (Stripe)
- [ ] Product reviews system
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] PWA features

## 📄 License

MIT License - see LICENSE file for details
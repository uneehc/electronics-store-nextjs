const PRICE_RANGE_OPTIONS = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: '$0 - $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100-500', label: '$100 - $500' },
  { value: '500+', label: '$500+' }
];

const BRAND_OPTIONS = [
  { value: '', label: 'All Brands' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Samsung', label: 'Samsung' },
  { value: 'Sony', label: 'Sony' },
  { value: 'LG', label: 'LG' },
  { value: 'Dell', label: 'Dell' }
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];

export {
  PRICE_RANGE_OPTIONS, BRAND_OPTIONS, SORT_OPTIONS
}
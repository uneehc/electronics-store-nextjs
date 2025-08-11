export const filterProducts = (products, filters, selectedCategory) => {
  return products.filter(product => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(p => p.replace('+', ''))
      const price = product.price
      
      if (max) {
        if (price < parseInt(min) || price > parseInt(max)) {
          return false
        }
      } else {
        if (price < parseInt(min)) {
          return false
        }
      }
    }

    // Brand filter
    if (filters.brand && product.brand !== filters.brand) {
      return false
    }

    // Rating filter
    if (filters.rating) {
      const minRating = parseInt(filters.rating.replace('+', ''))
      if (product.rating < minRating) {
        return false
      }
    }

    return true
  })
}

export const sortProducts = (products, sortBy) => {
  const sorted = [...products]
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating)
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id)
    default:
      return sorted
  }
}
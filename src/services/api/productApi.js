import { mockProducts } from '@/lib/data/mockData'

export const productApi = {
  getProducts: async (params = {}) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Mock data - replace with real API call
    return {
      products: mockProducts,
      total: mockProducts.length,
      page: 1,
      totalPages: 1
    }
  },

  getProduct: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return mockProducts.find(product => product.id === parseInt(id, 10))
  },

  getCategories: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    // Get unique categories and their counts from the products list
    const categoryCounts = mockProducts.reduce((acc, product) => {
      const { category } = product;
      if (category) {
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});

    // Format into the desired array of objects structure
    const categories = Object.entries(categoryCounts).map(([id, count]) => ({
      id,
      // A simple way to create a user-friendly name from an ID
      name: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' '),
      count,
    }));

    // Sort categories alphabetically by name for consistent ordering
    categories.sort((a, b) => a.name.localeCompare(b.name));

    // Prepend the 'All Products' category
    categories.unshift({ id: 'all', name: 'All Products', count: mockProducts.length });

    return categories;
  },

  searchProducts: async (query) => {
    await new Promise(resolve => setTimeout(resolve, 400))
    return mockProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  },

  getProductsByCategory: async (categoryId) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    if (categoryId === 'all') {
      return mockProducts
    }
    return mockProducts.filter(product => product.category === categoryId)
  },
}
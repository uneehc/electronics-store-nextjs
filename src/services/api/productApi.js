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
    return mockProducts.find(product => product.id === parseInt(id))
  },

  getCategories: async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    return PRODUCT_CATEGORIES
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
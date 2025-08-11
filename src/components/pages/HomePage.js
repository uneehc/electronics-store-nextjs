'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import ProductGrid from '@/components/products/ProductGrid'
import Filter from '@/components/filters/Filter'
import { useFilters } from '@/hooks/useFilters'
import { filterProducts, sortProducts } from '@/lib/utils/productUtils'
import { productApi } from '@/services/api/productApi'

const HomePage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const { filters, updateFilter } = useFilters()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productResponse, categoriesResponse] = await Promise.all([
          productApi.getProducts(),
          productApi.getCategories(),
        ])
        setProducts(productResponse.products)
        setCategories(categoriesResponse)
      } catch (error) {
        console.error('Failed to fetch initial data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleToggleWishlist = async (productId) => {
    console.log('Toggle wishlist for product:', productId)
  }

  // Filter and sort products
  const filteredProducts = filterProducts(products, filters, selectedCategory)
  const sortedProducts = sortProducts(filteredProducts, filters.sortBy)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:ml-0">
          {/* Mobile Category Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-sm font-medium">Categories</span>
            </button>
          </div>

          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Home</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">
                {categories.find(cat => cat.id === selectedCategory)?.name || 'All Products'}
              </span>
            </div>
          </nav>

          {/* Filter Component */}
          <Filter 
            filters={filters} 
            onFilterChange={updateFilter}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
          
          {/* Product Grid */}
          <ProductGrid
            products={sortedProducts}
            onAddToCart={onAddToCart}
            onToggleWishlist={handleToggleWishlist}
            loading={loading}
          />
        </main>
      </div>
      </div>
  )
}

export default HomePage
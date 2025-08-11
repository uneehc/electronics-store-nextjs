'use client'

import React, { useState, useEffect } from 'react'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useProducts } from '@/contexts/ProductContext'
import Link from 'next/link'

const SearchResultsList = ({ results, onResultClick }) => (
  <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-b-lg shadow-xl z-20 max-h-80 overflow-y-auto">
    <ul className="divide-y divide-gray-100">
      {results.map(product => (
        <li key={product.id}>
          <Link
            href={`/product/${product.id}`} // Assuming a product page route like /products/123
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            onClick={onResultClick}
          >
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Header = ({ cartCount, user, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const { products } = useProducts()

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([])
      return
    }

    const debounceTimer = setTimeout(() => {
      const results = products
        .filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 10)
      setSearchResults(results)
    }, 100) // 100ms debounce

    return () => clearTimeout(debounceTimer)
  }, [searchTerm, products])

  const handleResultClick = () => {
    setSearchTerm('')
    setSearchResults([])
    setIsSearchFocused(false)
    setIsSearchOpen(false) // Close mobile search on selection
  }

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      {/* Main Header */}
      <div className="px-4 py-3 lg:px-6 lg:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Menu + Logo */}
          <div className="flex items-center space-x-3">
            <button 
              className="lg:hidden w-8 h-8 flex items-center justify-center hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link href="/" className="text-lg font-bold sm:text-xl lg:text-2xl">
              ElectroStore
            </Link>
          </div>
          
          {/* Center: Search Bar (Desktop/Tablet) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search electronics..."
                className="w-full pl-10 pr-4 py-2 lg:py-2.5 rounded-lg text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
              {isSearchFocused && searchResults.length > 0 && (
                <SearchResultsList results={searchResults} onResultClick={handleResultClick} />
              )}
            </div>
          </div>
          
          {/* Right: Search Icon (Mobile) + User + Cart */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Search Toggle */}
            <button 
              className="md:hidden w-8 h-8 flex items-center justify-center hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* User */}
            <div className="hidden sm:flex items-center space-x-2">
              <User className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="hidden lg:block text-sm lg:text-base">{user?.name || 'Guest'}</span>
            </div>
            
            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-medium">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 border-t border-blue-500">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search electronics..."
              className="w-full pl-10 pr-4 py-2 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
            {isSearchFocused && searchResults.length > 0 && (
              <SearchResultsList results={searchResults} onResultClick={handleResultClick} />
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-600 border-t border-blue-500 z-50">
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center space-x-3 sm:hidden">
              <User className="w-5 h-5" />
              <span className="text-sm">{user?.name || 'Guest'}</span>
            </div>
            <div className="border-t border-blue-500 pt-3 space-y-2">
              <Link href="/" className="block text-sm hover:text-blue-200 transition-colors">Home</Link>
              <Link href="/categories" className="block text-sm hover:text-blue-200 transition-colors">Categories</Link>
              <Link href="/deals" className="block text-sm hover:text-blue-200 transition-colors">Deals</Link>
              <Link href="/cart" className="block text-sm hover:text-blue-200 transition-colors">Cart</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
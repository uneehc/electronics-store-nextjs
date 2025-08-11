'use client'

import React, { useState } from 'react'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { PRICE_RANGE_OPTIONS, BRAND_OPTIONS, SORT_OPTIONS } from '@/lib/constants/masterData'

const Filter = ({ filters, onFilterChange, isOpen, onOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    price: false,
    brand: false,
    rating: false,
    sort: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const FilterContent = () => (
    <div className="space-y-4 sm:space-y-6 w-full">
      {/* Price Range Filter */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span className="text-sm sm:text-base">Price Range</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${
            expandedSections.price ? 'rotate-180' : ''
          }`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {PRICE_RANGE_OPTIONS.map((option) => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={option.value}
                  checked={filters.priceRange === option.value}
                  onChange={(e) => onFilterChange('priceRange', e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div>
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span className="text-sm sm:text-base">Brand</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${
            expandedSections.brand ? 'rotate-180' : ''
          }`} />
        </button>
        {expandedSections.brand && (
          <div className="space-y-2">
            {BRAND_OPTIONS.map((option) => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="brand"
                  value={option.value}
                  checked={filters.brand === option.value}
                  onChange={(e) => onFilterChange('brand', e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sort Filter */}
      <div>
        <button
          onClick={() => toggleSection('sort')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span className="text-sm sm:text-base">Sort By</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${
            expandedSections.sort ? 'rotate-180' : ''
          }`} />
        </button>
        {expandedSections.sort && (
          <div className="space-y-2">
            {SORT_OPTIONS.map((option) => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  value={option.value}
                  checked={filters.sortBy === option.value}
                  onChange={(e) => onFilterChange('sortBy', e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Filter */}
      <div className="hidden lg:block bg-white p-4 xl:p-6 rounded-lg shadow-md mb-6">
        <h3 className="font-semibold mb-4 flex items-center space-x-2">
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </h3>
        <FilterContent />
      </div>

      {/* Mobile/Tablet Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onOpen}
          className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Filters & Sort</span>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg flex items-center space-x-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters & Sort</span>
              </h3>
              <button onClick={onClose} className="p-1 -mr-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </>
  )
}

export default Filter

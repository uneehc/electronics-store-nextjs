'use client'

import { useState } from 'react'

export const useFilters = () => {
  const [filters, setFilters] = useState({
    priceRange: '',
    brand: '',
    rating: '',
    sortBy: 'featured'
  })

  const updateFilter = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
  }

  const resetFilters = () => {
    setFilters({
      priceRange: '',
      brand: '',
      rating: '',
      sortBy: 'featured'
    })
  }

  return {
    filters,
    updateFilter,
    resetFilters
  }
}

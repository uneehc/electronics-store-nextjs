'use client'

import React, { useState } from 'react'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product, onAddToCart }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400 text-sm">Image not available</span>
            </div>
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <button className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sale Badge */}
          {product.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer h-10 sm:h-12 lg:h-14">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs sm:text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {product.inStock && (
            <span className="text-green-600 text-xs sm:text-sm font-medium hidden sm:block">
              In Stock
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:scale-98'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock && <ShoppingCart className="w-4 h-4" />}
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
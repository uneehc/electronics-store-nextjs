'use client'

import React from 'react'
import { Plus, Minus, X, ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = ({ items, onUpdateQuantity, onRemoveItem, isVisible, onClose }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out w-full sm:w-96 lg:w-[420px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
            {items.length > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to get started!</p>
              <button 
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  {/* Product Image */}
                  <div className="flex-shrink-0 relative w-16 h-16 sm:w-18 sm:h-18">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`} onClick={onClose}>
                      <h4 className="font-medium text-sm sm:text-base text-gray-900 line-clamp-2 mb-1 hover:text-blue-600 cursor-pointer">
                        {item.name}
                      </h4>
                    </Link>
                    <p className="text-blue-600 font-bold text-sm sm:text-base">
                      ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-200 rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="px-3 py-1.5 font-medium text-sm border-x border-gray-300 min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-200 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Item Total */}
                    <div className="mt-2 text-right">
                      <span className="text-sm font-medium text-gray-900">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Checkout Section */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-4 space-y-4">
            {/* Order Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/checkout" onClick={onClose}>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </Link>
              <button 
                onClick={onClose}
                className="w-full bg-gray-200 text-gray-800 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
              >
                Continue Shopping
              </button>
            </div>

            {/* Security Badge */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure checkout • Free shipping on orders over $50
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
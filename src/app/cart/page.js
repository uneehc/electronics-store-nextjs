'use client'

import { useCart } from '@/hooks/useCart'
import { Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Image from 'next/image'

export default function CartPage() {
  const { cartItems, cartTotal, cartCount, updateQuantity, removeItem } = useCart()
  const mockUser = { name: 'John Doe' }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} user={mockUser} onCartClick={() => {}} />
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg bg-white">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-center hover:bg-gray-300"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg text-center hover:bg-green-700"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
'use client'

import Header from '@/components/common/Header'
import HomePage from '@/components/pages/HomePage'
import Cart from '@/components/cart/Cart'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'

export default function Home() {
  const [showCart, setShowCart] = useState(false)
  
  const {
    cartItems,
    cartCount,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart
  } = useCart()

  const mockUser = { name: 'John Doe' }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartCount}
        user={mockUser}
        onCartClick={() => setShowCart(true)}
      />
      
      <HomePage onAddToCart={addToCart} />
      
      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        isVisible={showCart}
        onClearCart={clearCart}
        onClose={() => setShowCart(false)}
      />
    </div>
  )
}

// =====================================
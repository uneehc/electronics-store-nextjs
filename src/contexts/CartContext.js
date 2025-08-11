// src/contexts/CartContext.js
'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    
    case 'LOAD_CART':
      return { ...state, items: action.payload, loading: false }
    
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )
      
      let updatedItems
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + (action.payload.quantity || 1)
        }
      } else {
        // New item, add to cart
        updatedItems = [
          ...state.items, 
          { 
            ...action.payload, 
            quantity: action.payload.quantity || 1 
          }
        ]
      }
      
      return { ...state, items: updatedItems }
    }
    
    case 'UPDATE_ITEM': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return { ...state, items: updatedItems }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload)
      return { ...state, items: updatedItems }
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [] }
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }
    
    default:
      return state
  }
}

const initialState = {
  items: [],
  loading: true, // Start with loading true to prevent saving before hydration
  error: null,
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = sessionStorage.getItem('electrostore_cart')
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart)
          dispatch({ type: 'LOAD_CART', payload: parsedCart })
        } else {
          dispatch({ type: 'LOAD_CART', payload: [] })
        }
      } catch (error) {
        console.error('Error loading cart from sessionStorage:', error)
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load cart' })
      }
    }

    loadCart()
  }, [])

  // Save cart to sessionStorage whenever items change, but not on initial load
  useEffect(() => {
    // We don't want to save the initial empty cart to storage before we've loaded.
    // The loading state helps us prevent this.
    if (!state.loading) {
      try {
        sessionStorage.setItem('electrostore_cart', JSON.stringify(state.items))
      } catch (error) {
        console.error('Error saving cart to sessionStorage:', error)
        dispatch({ type: 'SET_ERROR', payload: 'Failed to save cart' })
      }
    }
  }, [state.items, state.loading])

  // Cart actions
  const addToCart = (product, quantity = 1) => {
    try {
      dispatch({ 
        type: 'ADD_ITEM', 
        payload: { 
          ...product, 
          quantity: quantity,
          addedAt: new Date().toISOString()
        } 
      })
    } catch (error) {
      console.error('Error adding item to cart:', error)
      dispatch({ type: 'SET_ERROR', payload: 'Failed to add item to cart' })
    }
  }

  const updateQuantity = (itemId, quantity) => {
    try {
      if (quantity <= 0) {
        removeItem(itemId)
      } else {
        dispatch({ 
          type: 'UPDATE_ITEM', 
          payload: { id: itemId, quantity } 
        })
      }
    } catch (error) {
      console.error('Error updating item quantity:', error)
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update item quantity' })
    }
  }

  const removeItem = (itemId) => {
    try {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId })
    } catch (error) {
      console.error('Error removing item from cart:', error)
      dispatch({ type: 'SET_ERROR', payload: 'Failed to remove item from cart' })
    }
  }

  const clearCart = () => {
    try {
      dispatch({ type: 'CLEAR_CART' })
      sessionStorage.removeItem('electrostore_cart')
    } catch (error) {
      console.error('Error clearing cart:', error)
      dispatch({ type: 'SET_ERROR', payload: 'Failed to clear cart' })
    }
  }

  const isInCart = (productId) => {
    return state.items.some(item => item.id === productId)
  }

  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.id === productId)
    return item ? item.quantity : 0
  }

  // Computed values
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  
  const cartTotal = state.items.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  )

  const cartSubtotal = cartTotal
  const cartTax = cartTotal * 0.08 // 8% tax rate
  const cartShipping = cartTotal > 50 ? 0 : 9.99 // Free shipping over $50
  const cartGrandTotal = cartSubtotal + cartTax + cartShipping

  const cartSummary = {
    subtotal: cartSubtotal,
    tax: cartTax,
    shipping: cartShipping,
    total: cartGrandTotal,
    itemCount: cartCount,
    uniqueItems: state.items.length
  }

  // Clear error after 5 seconds
  useEffect(() => {
    if (state.error) {
      const timer = setTimeout(() => {
        dispatch({ type: 'SET_ERROR', payload: null })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [state.error])

  const contextValue = {
    // State
    cartItems: state.items,
    cartCount,
    cartTotal,
    cartSubtotal,
    cartTax,
    cartShipping,
    cartGrandTotal,
    cartSummary,
    loading: state.loading,
    error: state.error,

    // Actions
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    isInCart,
    getItemQuantity,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// Export the context itself for advanced use cases
export { CartContext }
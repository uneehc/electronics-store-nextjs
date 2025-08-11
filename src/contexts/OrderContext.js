'use client'

import { createContext, useCallback, useMemo } from 'react'
import { toast } from 'react-hot-toast'

export const OrderContext = createContext(null)

export const OrderProvider = ({ children }) => {
  const addOrder = useCallback((orderDetails) => {
    try {
      // Retrieve existing orders from session storage, or initialize an empty array
      const existingOrdersJSON = sessionStorage.getItem('electrostore_orders')
      const existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : []

      // Create a new order object with a unique ID
      const newOrder = {
        ...orderDetails,
        id: `order_${Date.now()}`
      }

      const updatedOrders = [...existingOrders, newOrder]

      // Save the updated array of orders back to session storage
      sessionStorage.setItem('electrostore_orders', JSON.stringify(updatedOrders))
      toast.success('Order placed successfully!')
      console.log(`Order ${newOrder.id} added to electrostore_orders.`)
    } catch (error) {
      toast.error('Could not place order. Please try again.')
      console.error('Failed to save order to session storage:', error)
    }
  }, [])

  const value = useMemo(() => ({ addOrder }), [addOrder])

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  )
}
  
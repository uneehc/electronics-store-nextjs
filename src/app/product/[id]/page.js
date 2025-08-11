'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { productApi } from '@/services/api/productApi'
import { useCart } from '@/hooks/useCart'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import Header from '@/components/common/Header'
import Image from 'next/image'

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x600/e2e8f0/cccccc?text=No+Image'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const { addToCart, cartCount } = useCart()
  const mockUser = { name: 'John Doe' }

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        setLoading(true)
        try {
          const productData = await productApi.getProduct(id)
          setProduct(productData || null)
        } catch (error) {
          console.error('Error fetching product:', error)
          setProduct(null)
        } finally {
          setLoading(false)
        }
      }
      fetchProduct()
    }
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header cartCount={cartCount} user={mockUser} onCartClick={() => {}} />
        <div className="flex justify-center items-center h-64">
          <div className="loading-spinner w-8 h-8"></div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header cartCount={cartCount} user={mockUser} onCartClick={() => {}} />
        <div className="text-center p-8">Product not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} user={mockUser} onCartClick={() => {}} />
      
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={product.images?.[selectedImage] || product.image || PLACEHOLDER_IMAGE}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-16 h-16 rounded border-2 overflow-hidden bg-gray-200 ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    <Image
                      src={image || PLACEHOLDER_IMAGE}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
            
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl sm:text-3xl font-bold text-blue-600">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg sm:text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-gray-700">{product.description}</p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100 rounded-r-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium flex-1 justify-center ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>

            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Product Details</h3>
              <div className="space-y-2">
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4">
                    <span className="font-medium text-gray-800">{key}</span>
                    <span className="text-gray-600 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

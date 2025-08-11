// src/app/layout.js
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext' 
import { ThemeProvider } from '@/contexts/ThemeContext'
import { OrderProvider } from '@/contexts/OrderContext'
import { TOAST_OPTIONS } from '@/lib/constants/toastOptions'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Separate metadata export
export const metadata = {
  title: 'ElectroStore - Premium Electronics',
  description: 'Shop the latest electronics with great deals and fast shipping',
  keywords: 'electronics, smartphones, laptops, tablets, headphones',
  authors: [{ name: 'ElectroStore Team' }],
}

// Separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <OrderProvider>
                <Toaster toastOptions={TOAST_OPTIONS} />
                {children}
              </OrderProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
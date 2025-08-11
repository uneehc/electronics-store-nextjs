'use client'

import React from 'react'
import { X } from 'lucide-react'

const Sidebar = ({ categories, selectedCategory, onCategorySelect, isOpen, onClose }) => {

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:shadow-none lg:z-auto
        w-72 sm:w-80 lg:w-64 xl:w-72
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="font-semibold text-lg">Categories</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block p-4 border-b border-gray-200">
          <h3 className="font-semibold text-lg xl:text-xl">Categories</h3>
        </div>

        {/* Categories List */}
        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)] lg:max-h-[calc(100vh-120px)]">
          {categories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => {
                  onCategorySelect(category.id)
                  if (window.innerWidth < 1024) {
                    onClose?.()
                  }
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500 shadow-sm'
                    : 'hover:bg-gray-100 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm lg:text-base">{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id 
                      ? 'bg-blue-200 text-blue-700' 
                      : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
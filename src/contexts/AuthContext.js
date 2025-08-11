'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AuthContext = createContext(null)

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null }
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        user: action.payload, 
        isAuthenticated: true,
        error: null 
      }
    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload, 
        isAuthenticated: false 
      }
    case 'LOGOUT':
      return { 
        ...state, 
        user: null, 
        isAuthenticated: false, 
        loading: false 
      }
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } }
    default:
      return state
  }
}

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(savedUser) })
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: null })
    }
  }, [])

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' })
    try {
      // Mock login - replace with real API call
      const mockUser = { 
        id: 1, 
        name: credentials.email.split('@')[0], 
        email: credentials.email 
      }
      localStorage.setItem('user', JSON.stringify(mockUser))
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser })
      return mockUser
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message })
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
  }

  const updateUser = (userData) => {
    const updatedUser = { ...state.user, ...userData }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    dispatch({ type: 'UPDATE_USER', payload: userData })
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout,
      updateUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

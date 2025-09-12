import { useState } from 'react'
import { MovieContext } from './MovieContext'

export function MovieProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)

  const startSearch = query => {
    setSearchQuery(query)
    setIsSearchActive(true)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setIsSearchActive(false)
  }

  return (
    <MovieContext.Provider
      value={{
        searchQuery,
        isSearchActive,
        startSearch,
        clearSearch,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

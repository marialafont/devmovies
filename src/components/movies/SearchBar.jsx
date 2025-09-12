import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useMovieContext } from '@/context'
import { searchValidations } from '@/utils/validations'
import { useFormValidation } from '@/hooks/useFormValidation'

const validationRules = {
  query: [value => searchValidations.validateSearchQuery(value)],
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const { startSearch } = useMovieContext()
  const { errors, validateField, clearFieldError } =
    useFormValidation(validationRules)

  const handleSubmit = e => {
    e.preventDefault()

    const error = validateField('query', query)
    if (error) return

    const clearedQuery = searchValidations.cleanQuery(query)
    startSearch(clearedQuery)
    setQuery('')
    clearFieldError('query')
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleInputChange = e => {
    setQuery(e.target.value)
    if (errors.query) {
      clearFieldError('query')
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={`pl-11 pr-12 h-12 bg-white/5 rounded-full text-sm md:text-base placeholder:text-sm md:placeholder:text-base ${
            errors.query ? 'border-red-500' : ''
          }`}
          placeholder="Search movies, tv shows..."
        />
        <Button
          type="submit"
          variant="clean"
          size="icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
        >
          <Search className="h-5 w-5 text-muted-foreground hover:text-foreground" />
        </Button>
      </form>
      {errors.query && (
        <p className="text-red-500 text-xs mt-2 text-center">{errors.query}</p>
      )}
    </div>
  )
}

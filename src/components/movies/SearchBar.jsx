import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (query.trim()) {
      console.log('User wants to search:', query.trim())
      setQuery('')
    }
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-11 pr-6 md:pr-8 h-12 bg-white/5 rounded-full text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
          placeholder="Search movies, tv shows..."
        />
        <Button
          type="submit"
          variant="clean"
          size="icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 md:h-8 md:w-8"
        >
          <Search className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground hover:text-foreground" />
        </Button>
      </form>
    </div>
  )
}

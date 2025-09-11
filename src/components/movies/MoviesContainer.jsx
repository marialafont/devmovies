import { SearchBar } from './SearchBar'
import { MovieGrid } from './MovieGrid'

export function MoviesContainer() {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-8">
      <SearchBar />
      <MovieGrid />
    </div>
  )
}

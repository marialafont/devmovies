import { MovieCard } from './MovieCard'

export function MovieGrid() {
  const mockMovies = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
  }))

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 md:gap-x-4 lg:gap-x-6 lg:gap-y-12">
      {mockMovies.map(movie => (
        <MovieCard key={movie.id} />
      ))}
    </div>
  )
}

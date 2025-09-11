import poster from '@/assets/images/poster.jpg'

export function MovieGrid() {
  const mockMovies = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
  }))

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 md:gap-x-4 lg:gap-x-6 lg:gap-y-12">
      {mockMovies.map(movie => (
        <div
          key={movie.id}
          className="aspect-[2/3] bg-muted rounded-lg overflow-hidden"
        >
          <img
            src={poster}
            alt="Movie poster"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

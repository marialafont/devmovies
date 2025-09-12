import { useState } from 'react'
import { MovieModal } from './MovieModal'
import { useMovieDetails } from '@/hooks/useMovieSearch'

export function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const {
    data: movieDetails,
    isLoading: isLoadingDetails,
    error: detailsError,
  } = useMovieDetails(selectedMovie)

  const handleCardClick = () => {
    setSelectedMovie(movie.imdbID)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMovie(null)
  }

  return (
    <>
      <div className="group cursor-pointer" onClick={handleCardClick}>
        <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden mb-3">
          <img
            src={
              movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.svg'
            }
            alt={movie.Title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={e => {
              e.target.src = '/placeholder-movie.svg'
            }}
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
            {movie.Title}
          </h3>
          <p className="text-xs text-muted-foreground">{movie.Year}</p>
        </div>
      </div>

      <MovieModal
        movie={movieDetails}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isLoading={isLoadingDetails}
        error={detailsError}
      />
    </>
  )
}

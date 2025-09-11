import { useState } from 'react'
import { MovieModal } from './MovieModal'
import poster from '@/assets/images/poster.jpg'

export function MovieCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const mockMovie = {
    Title: 'Blade Runner 2049',
    Year: '2017',
    Runtime: '164 min',
    Genre: 'Action, Drama, Mystery',
    Director: 'Denis Villeneuve',
    Actors: 'Ryan Gosling, Harrison Ford, Ana de Armas',
    Plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    imdbRating: '8.0',
    Poster: poster,
  }

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden mb-3">
          <img
            src={mockMovie.Poster}
            alt={mockMovie.Title}
            className="w-full h-full object-cover group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
            {mockMovie.Title}
          </h3>
          <p className="text-xs text-muted-foreground">{mockMovie.Year}</p>
        </div>
      </div>

      <MovieModal
        movie={mockMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

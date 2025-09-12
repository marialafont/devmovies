import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Loader2 } from 'lucide-react'

export function MovieModal({ movie, isOpen, onClose, isLoading, error }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none md:max-w-2xl lg:max-w-3xl w-[95vw] md:w-full h-[95vh] md:h-[400px] lg:h-[500px] p-0 bg-background border-none overflow-auto md:overflow-hidden rounded-lg md:rounded-lg">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin text-foreground" />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center space-y-2">
              <p className="text-red-500 text-sm">
                Error loading movie details
              </p>
              <p className="text-muted-foreground text-xs">{error?.message}</p>
            </div>
          </div>
        ) : movie && movie.Response === 'True' ? (
          <div className="relative flex flex-col md:flex-row md:h-full min-h-full md:min-h-0">
            <div className="w-full md:w-2/5 md:h-full relative bg-background mt-8 md:mt-0 flex-shrink-0">
              <img
                src={
                  movie.Poster && movie.Poster !== 'N/A'
                    ? movie.Poster
                    : '/placeholder-movie.svg'
                }
                alt={movie.Title || 'Movie poster'}
                className="w-full h-[400px] md:h-full object-contain md:object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                onError={e => {
                  e.target.src = '/placeholder-movie.svg'
                }}
              />
              <div className="hidden md:block absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background to-transparent" />
            </div>

            <div className="w-full md:w-3/5 bg-background p-6 pt-8 md:pt-6 lg:p-8 lg:pt-8 flex flex-col justify-start md:overflow-auto rounded-b-lg md:rounded-none md:rounded-r-lg">
              <div className="text-foreground space-y-4 lg:space-y-5">
                <h1 className="text-xl lg:text-2xl font-bold">
                  {movie.Title || 'Unknown Title'}
                </h1>

                <div className="flex items-center gap-3 md:gap-4 text-sm flex-wrap">
                  {movie.Year && movie.Year !== 'N/A' && (
                    <span className="bg-muted px-2 py-1 rounded text-xs">
                      {movie.Year}
                    </span>
                  )}
                  {movie.Runtime && movie.Runtime !== 'N/A' && (
                    <span className="text-xs">{movie.Runtime}</span>
                  )}
                  {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                    <div className="flex items-center gap-1 text-xs">
                      <span>★</span>
                      <span>{movie.imdbRating}</span>
                    </div>
                  )}
                  {movie.Rated && movie.Rated !== 'N/A' && (
                    <span className="bg-muted px-2 py-1 rounded text-xs">
                      {movie.Rated}
                    </span>
                  )}
                </div>

                {movie.Plot && movie.Plot !== 'N/A' && (
                  <p className="text-sm leading-relaxed">{movie.Plot}</p>
                )}

                <div className="space-y-2 text-xs">
                  {movie.Genre && movie.Genre !== 'N/A' && (
                    <div>
                      <span className="text-muted-foreground">Genre: </span>
                      <span>{movie.Genre}</span>
                    </div>
                  )}
                  {movie.Director && movie.Director !== 'N/A' && (
                    <div>
                      <span className="text-muted-foreground">Director: </span>
                      <span>{movie.Director}</span>
                    </div>
                  )}
                  {movie.Actors && movie.Actors !== 'N/A' && (
                    <div>
                      <span className="text-muted-foreground">Cast: </span>
                      <span>{movie.Actors}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">No movie data available</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

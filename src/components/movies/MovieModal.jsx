import { Dialog, DialogContent } from '@/components/ui/dialog'

export function MovieModal({ movie, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none md:max-w-2xl lg:max-w-3xl w-[95vw] md:w-full h-[95vh] md:h-[400px] lg:h-[500px] p-0 bg-background border-none overflow-hidden rounded-lg md:rounded-lg">
        <div className="relative h-full flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-[45%] md:h-full relative bg-background mt-8 md:mt-0">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-contain md:object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
            <div className="hidden md:block absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background to-transparent" />
          </div>

          <div className="w-full md:w-3/5 bg-background p-6 pt-8 md:pt-6 lg:p-8 lg:pt-8 flex flex-col justify-start md:justify-center overflow-auto rounded-b-lg md:rounded-none md:rounded-r-lg">
            <div className="text-foreground space-y-4 lg:space-y-5">
              <h1 className="text-xl lg:text-2xl font-bold">{movie.Title}</h1>

              <div className="flex items-center gap-3 md:gap-4 text-sm flex-wrap">
                <span className="bg-muted px-2 py-1 rounded text-xs">
                  {movie.Year}
                </span>
                <span className="text-xs">{movie.Runtime}</span>
                <div className="flex items-center gap-1 text-xs">
                  <span>★</span>
                  <span>{movie.imdbRating}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed">{movie.Plot}</p>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Genre: </span>
                  <span>{movie.Genre}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Director: </span>
                  <span>{movie.Director}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Cast: </span>
                  <span>{movie.Actors}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

import { MovieCard } from './MovieCard'
import { useMovieContext } from '@/context'
import { useMovieSearch } from '@/hooks/useMovieSearch'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { motion as Motion } from 'framer-motion'

export function MovieGrid() {
  const { searchQuery, isSearchActive } = useMovieContext()

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMovieSearch(searchQuery, isSearchActive)

  const movies = useMemo(() => {
    return (
      data?.pages?.flatMap(page =>
        page.Response === 'True' ? page.Search : []
      ) || []
    )
  }, [data?.pages])

  const handleLoadMore = useCallback(() => {
    fetchNextPage()
  }, [fetchNextPage])

  if (!isSearchActive) {
    return (
      <Motion.div
        className="flex items-center justify-center min-h-[400px] text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Search for your favorite movies
          </h2>
          <p className="text-muted-foreground">
            Use the search bar above to find movies by title
          </p>
        </div>
      </Motion.div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-foreground" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-center">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-red-500">
            Error loading movies
          </h2>
          <p className="text-muted-foreground">
            {error?.message || 'Something went wrong'}
          </p>
        </div>
      </div>
    )
  }

  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-center">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">
            No movies found
          </h2>
          <p className="text-muted-foreground">
            Try searching a different title
          </p>
        </div>
      </div>
    )
  }

  return (
    <Motion.div
      className="space-y-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 md:gap-x-4 lg:gap-x-6 lg:gap-y-12">
        {movies.map((movie, index) => {
          const rowIndex = Math.floor(index / 5)

          return (
            <Motion.div
              key={movie.imdbID}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + rowIndex * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <MovieCard movie={movie} />
            </Motion.div>
          )
        })}
      </div>

      {hasNextPage && (
        <Motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button
            onClick={handleLoadMore}
            disabled={isFetchingNextPage}
            variant="outline"
            className="px-8"
          >
            {isFetchingNextPage ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </Button>
        </Motion.div>
      )}
    </Motion.div>
  )
}

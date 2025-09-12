import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { searchMovies, getMovieDetails } from '@/services/movieService'

export function useMovieSearch(query, enabled = false) {
  return useInfiniteQuery({
    queryKey: ['movies', query],
    queryFn: ({ pageParam = 1 }) => searchMovies(query, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.Response === 'False') return undefined

      const totalResults = parseInt(lastPage.totalResults)
      const currentCount = allPages.length * 10

      return currentCount < totalResults ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    enabled: enabled && !!query?.trim(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}

export function useMovieDetails(imdbID) {
  return useQuery({
    queryKey: ['movie', imdbID],
    queryFn: () => getMovieDetails(imdbID),
    enabled: !!imdbID,
    staleTime: 10 * 60 * 1000,
  })
}

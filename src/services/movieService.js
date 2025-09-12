import { API_CONFIG } from '@/config/constants'

export async function searchMovies(query, page = 1) {
  if (!API_CONFIG.OMDB_API_KEY) {
    throw new Error('OMDB API key is not configured')
  }

  const response = await fetch(
    `${API_CONFIG.OMDB_BASE_URL}?apikey=${API_CONFIG.OMDB_API_KEY}&s=${encodeURIComponent(query)}&page=${page}&type=movie`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  return response.json()
}

export async function getMovieDetails(imdbID) {
  if (!API_CONFIG.OMDB_API_KEY) {
    throw new Error('OMDB API key is not configured')
  }

  const response = await fetch(
    `${API_CONFIG.OMDB_BASE_URL}?apikey=${API_CONFIG.OMDB_API_KEY}&i=${imdbID}&plot=full`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch movie details')
  }

  return response.json()
}

import { API_CONFIG } from '@/config/constants'

const { OMDB_BASE_URL, OMDB_API_KEY } = API_CONFIG

export const omdbApi = {
  searchMovies: async (query, page = 1) => {
    const response = await fetch(
      `${OMDB_BASE_URL}/?s=${encodeURIComponent(query)}&page=${page}&apikey=${OMDB_API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }

    return response.json()
  },

  getMovieDetails: async imdbID => {
    const response = await fetch(
      `${OMDB_BASE_URL}/?i=${imdbID}&apikey=${OMDB_API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch movie details')
    }

    return response.json()
  },
}

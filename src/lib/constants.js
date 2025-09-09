export const API_CONFIG = {
  OMDB_BASE_URL: import.meta.env.VITE_OMDB_BASE_URL,
  OMDB_API_KEY: import.meta.env.VITE_OMDB_API_KEY,
  DEFAULT_PAGE_SIZE: 10,
}

if (!API_CONFIG.OMDB_API_KEY) {
  console.error(
    'OMDB API key is not configured. Please add VITE_OMDB_API_KEY to your .env file'
  )
}

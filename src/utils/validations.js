export const searchValidations = {
  validateSearchQuery: query => {
    if (!query || !query.trim()) {
      return 'Please enter a movie title'
    }

    const trimmedQuery = query.trim()

    if (trimmedQuery.length < 2) {
      return 'Please enter at least two characters'
    }

    if (trimmedQuery.length > 100) {
      return 'Search query is too long'
    }

    if (!/[a-zA-Z0-9]/.test(trimmedQuery)) {
      return 'Please enter a valid movie title'
    }

    return null
  },

  cleanQuery: query => {
    return query?.trim().replace(/\s+/g, ' ')
  },
}

export const formValidations = {
  isEmpty: value => !value || !value.trim(),

  minLength: (value, min) => {
    return value && value.trim().length >= min
  },

  maxLength: (value, max) => {
    return value && value.trim().length <= max
  },

  hasValidCharacters: value => {
    return value && /[a-zA-Z0-9]/.test(value.trim())
  },
}

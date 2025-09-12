import { useState } from 'react'

export function useFormValidation(validationRules) {
  const [errors, setErrors] = useState({})

  const validateField = (fieldName, value) => {
    const rules = validationRules[fieldName]
    if (!rules) return null

    for (const rule of rules) {
      const error = rule(value)
      if (error) {
        setErrors(prev => ({ ...prev, [fieldName]: error }))
        return error
      }
    }

    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[fieldName]
      return newErrors
    })
    return null
  }

  const validateAll = values => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    return { isValid, errors: newErrors }
  }

  const clearErrors = () => setErrors({})

  const clearFieldError = fieldName => {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[fieldName]
      return newErrors
    })
  }

  return {
    errors,
    validateField,
    validateAll,
    clearErrors,
    clearFieldError,
  }
}

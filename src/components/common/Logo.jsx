import logoSvg from '@/assets/icons/logo.svg'

export function Logo({ className, width, height }) {
  const inlineStyles = {}
  
  if (width) inlineStyles.width = width
  if (height) inlineStyles.height = height
  
  return (
    <img
      src={logoSvg}
      alt="DevMovies"
      className={`object-contain ${className || ''}`}
      style={Object.keys(inlineStyles).length > 0 ? inlineStyles : undefined}
    />
  )
}

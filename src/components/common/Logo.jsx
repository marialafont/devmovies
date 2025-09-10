import logoSvg from '@/assets/icons/logo.svg'

export function Logo({ className, width, height }) {
  return (
    <img
      src={logoSvg}
      alt="DevMovies"
      className={`object-contain ${className || ''}`}
      style={{
        width: width || 'auto',
        height: height || 'auto',
      }}
    />
  )
}

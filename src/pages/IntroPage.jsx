import { useNavigate } from 'react-router-dom'
import { Button, Logo } from '@/components'
import backgroundImage from '@/assets/images/background.jpg'

export function IntroPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      <div className="relative z-20 flex flex-col items-center gap-8 md:gap-12 px-4">
        <div>
          <Logo
            width="320px"
            height="auto"
            className="mx-auto md:w-[400px] lg:w-[450px]"
          />
        </div>

        <Button
          onClick={() => navigate('/home')}
          variant="white"
          size="custom"
          className="px-8 py-2 text-lg md:px-10 md:py-3 md:text-xl tracking-[0.1em]"
        >
          ENTER
        </Button>
      </div>
    </div>
  )
}

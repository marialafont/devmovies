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

      <div className="relative z-20 flex flex-col items-center gap-12">
        <div>
          <Logo width="450px" height="auto" className="mx-auto" />
        </div>

        <Button
          onClick={() => navigate('/home')}
          variant="white"
          size="custom"
          className="px-10 py-3 text-xl tracking-[0.1em]"
        >
          ENTER
        </Button>
      </div>
    </div>
  )
}

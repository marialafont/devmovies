import { useNavigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { Logo } from '@/components'
import { Button } from '@/components/ui/button'
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
        <Motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 1.5 },
          }}
        >
          <Logo className="mx-auto w-[320px] md:w-[400px] lg:w-[450px] h-auto" />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            delay: 2,
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            scale: { duration: 0.2 },
          }}
        >
          <Button
            onClick={() => navigate('/home')}
            variant="white"
            size="custom"
            type="button"
            className="px-8 py-2 text-lg md:px-10 md:py-3 md:text-xl tracking-[0.1em]"
          >
            ENTER
          </Button>
        </Motion.div>
      </div>
    </div>
  )
}

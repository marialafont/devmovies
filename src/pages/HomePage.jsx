import { Navbar, Footer } from '@/components/common'
import { MoviesContainer } from '@/components/movies'

export function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-1 pt-[60px] md:pt-[80px] lg:pt-[100px]">
          <div className="mx-auto px-2 md:px-6 lg:px-14 pt-10 pb-16">
            <MoviesContainer />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

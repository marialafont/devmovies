import { Navbar, Footer } from '@/components/common'
import { MoviesContainer } from '@/components/movies'

export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto px-2 md:px-6 lg:px-14 pt-10 pb-16">
          <MoviesContainer />
        </div>
      </main>

      <Footer />
    </div>
  )
}

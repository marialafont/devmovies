import { Navbar, Footer } from '@/components/common'

export function HomePage() {
  return (
    <div className="h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 overflow-auto container mx-auto px-4 py-6">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Movies Grid Coming Soon
          </h2>
          <p className="text-muted-foreground">
            Movie search and grid will be implemented here
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

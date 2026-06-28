import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'

export const metadata = {
  title: 'Gallery - UV ESPORTS',
  description: 'Tournament and event gallery',
}

export default function Gallery() {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
  }))

  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Gallery</h1>
            <p className="text-xl text-slate-300 mb-12">
              Highlights from tournaments and events
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryItems.map((item) => (
                <Card key={item.id} hover className="aspect-square flex items-center justify-center bg-gradient-purple/10 border border-primary/20">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-slate-300 font-semibold text-sm">{item.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

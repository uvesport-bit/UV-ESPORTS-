import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Loading() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

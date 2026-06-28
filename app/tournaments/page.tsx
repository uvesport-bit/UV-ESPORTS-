import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TournamentsGrid from '@/components/tournament/TournamentsGrid'

export const metadata = {
  title: 'Tournaments - UV ESPORTS',
  description: 'Browse and join esports tournaments on UV ESPORTS',
}

export default function Tournaments() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Tournaments</h1>
            <p className="text-xl text-slate-300 mb-12">
              Compete in our upcoming tournaments and climb the ranks
            </p>
            <TournamentsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

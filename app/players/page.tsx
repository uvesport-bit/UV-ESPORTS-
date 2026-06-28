import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PlayersGrid from '@/components/player/PlayersGrid'

export const metadata = {
  title: 'Players - UV ESPORTS',
  description: 'Browse all players on UV ESPORTS platform',
}

export default function Players() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Players</h1>
            <p className="text-xl text-slate-300 mb-12">
              Discover top players and manage your profile
            </p>
            <PlayersGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

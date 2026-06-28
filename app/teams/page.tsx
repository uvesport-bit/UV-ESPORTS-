import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TeamsGrid from '@/components/team/TeamsGrid'

export const metadata = {
  title: 'Teams - UV ESPORTS',
  description: 'Browse all teams on UV ESPORTS platform',
}

export default function Teams() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Teams</h1>
            <p className="text-xl text-slate-300 mb-12">
              Discover top teams and join the competition
            </p>
            <TeamsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

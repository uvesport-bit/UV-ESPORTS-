import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'About UV ESPORTS',
  description: 'Learn about UV ESPORTS, the premier competitive esports platform.',
}

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-8">About UV ESPORTS</h1>
            <div className="glass-dark rounded-xl p-8 mb-8">
              <p className="text-xl text-slate-300 mb-6">
                UV ESPORTS is the ultimate competitive gaming platform where players, teams, and organizations come together to compete, connect, and create lasting legacies in the esports industry.
              </p>
              <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Mission</h2>
              <p className="text-slate-400 mb-8">
                To democratize competitive esports by providing a platform where players of all skill levels can compete, grow, and showcase their talents on a global stage.
              </p>
              <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Vision</h2>
              <p className="text-slate-400">
                To become the leading esports platform that empowers communities, drives competitive excellence, and creates opportunities for the next generation of gaming champions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

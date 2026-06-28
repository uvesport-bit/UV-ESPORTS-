import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import scrims from '@/data/scrims.json'

export const metadata = {
  title: 'Scrims - UV ESPORTS',
  description: 'Join scrim matches',
}

export default function Scrims() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Scrimmages</h1>
            <p className="text-xl text-slate-300 mb-12">
              Practice matches to improve your team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scrims.map((scrim) => (
                <Card key={scrim.id}>
                  <Badge
                    variant={scrim.status === 'live' ? 'warning' : 'primary'}
                    className="mb-3"
                  >
                    {scrim.status.toUpperCase()}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{scrim.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{scrim.game}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Game:</span>
                      <span className="text-primary font-semibold">{scrim.game}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Teams Joined:</span>
                      <span className="text-accent font-semibold">{scrim.registeredTeams}/{scrim.maxTeams}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Region:</span>
                      <span className="text-slate-300 font-semibold">{scrim.region}</span>
                    </div>
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

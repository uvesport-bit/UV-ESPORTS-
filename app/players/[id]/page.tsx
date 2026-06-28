import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import players from '@/data/players.json'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Player Profile - UV ESPORTS',
}

export default function PlayerProfile({ params }: { params: { id: string } }) {
  const player = players.find(p => p.id === params.id)

  if (!player) notFound()

  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            {/* Player Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="md:col-span-1 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">{player.ign}</h1>
                <Badge variant="primary" className="mb-4">{player.role}</Badge>
                <p className="text-slate-400">{player.country} • {player.currentTeam}</p>
              </Card>

              <Card className="md:col-span-2">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Statistics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Kills</p>
                    <p className="text-3xl font-bold text-primary">{player.stats.kills}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Wins</p>
                    <p className="text-3xl font-bold text-accent">{player.stats.wins}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">K/D Ratio</p>
                    <p className="text-3xl font-bold text-primary">{player.stats.kd}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Avg Damage</p>
                    <p className="text-3xl font-bold text-accent">{player.stats.avgDamage}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Headshots</p>
                    <p className="text-3xl font-bold text-primary">{player.stats.headshots}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Achievements */}
            {player.achievements && player.achievements.length > 0 && (
              <Card className="mb-12">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Achievements</h2>
                <div className="flex flex-wrap gap-3">
                  {player.achievements.map((achievement, i) => (
                    <Badge key={i} variant="success">{achievement}</Badge>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

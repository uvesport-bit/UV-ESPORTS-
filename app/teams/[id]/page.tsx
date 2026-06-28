import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import teams from '@/data/teams.json'
import players from '@/data/players.json'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Team Profile - UV ESPORTS',
}

export default function TeamProfile({ params }: { params: { id: string } }) {
  const team = teams.find(t => t.id === params.id)

  if (!team) notFound()

  const rosterPlayers = players.filter(p => team.roster.includes(p.id))

  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            {/* Team Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="md:col-span-1 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">{team.name}</h1>
                <Badge variant="primary" className="mb-4">#{team.ranking}</Badge>
                <p className="text-slate-400 mb-4">{team.region}</p>
                <p className="text-slate-400">Captain: {team.captain}</p>
              </Card>

              <Card className="md:col-span-2">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Team Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Captain</p>
                    <p className="text-lg text-slate-100">{team.captain}</p>
                  </div>
                  {team.coach && (
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Coach</p>
                      <p className="text-lg text-slate-100">{team.coach}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Region</p>
                    <p className="text-lg text-slate-100">{team.region}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Players</p>
                    <p className="text-lg text-slate-100">{team.roster.length}/5</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Roster */}
            <Card className="mb-12">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Roster</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rosterPlayers.map((player) => (
                  <Card key={player.id} className="border border-primary/20">
                    <Badge variant="primary" className="mb-2">{player.role}</Badge>
                    <p className="font-semibold text-slate-100 mb-1">{player.ign}</p>
                    <p className="text-sm text-slate-400">{player.country}</p>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            {team.achievements && team.achievements.length > 0 && (
              <Card>
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Achievements</h2>
                <div className="flex flex-wrap gap-3">
                  {team.achievements.map((achievement, i) => (
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

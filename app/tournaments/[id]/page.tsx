import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CountdownTimer } from '@/components/tournament/CountdownTimer'
import tournaments from '@/data/tournaments.json'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Tournament - UV ESPORTS',
}

export default function TournamentDetail({ params }: { params: { id: string } }) {
  const tournament = tournaments.find(t => t.id === params.id)

  if (!tournament) notFound()

  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            {/* Tournament Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="md:col-span-1 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">{tournament.name}</h1>
                <Badge variant="primary" className="mb-4">{tournament.status.toUpperCase()}</Badge>
              </Card>

              <Card className="md:col-span-2 border border-primary/20">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Tournament Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Game</p>
                    <p className="text-xl font-bold text-primary">{tournament.game}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Prize Pool</p>
                    <p className="text-xl font-bold text-accent">${(tournament.prizePool / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Teams</p>
                    <p className="text-xl font-bold text-primary">{tournament.teams}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Region</p>
                    <p className="text-xl font-bold text-slate-300">{tournament.region}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Status</p>
                    <Badge variant="primary">{tournament.status}</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Countdown */}
            {tournament.status === 'upcoming' && (
              <Card className="mb-12 text-center border border-accent/20">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Tournament Starts In</h2>
                <CountdownTimer targetDate={tournament.startDate} />
              </Card>
            )}

            {/* Description */}
            <Card className="mb-12">
              <h2 className="text-2xl font-bold text-slate-100 mb-4">About</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {tournament.description}
              </p>
            </Card>

            {/* Important Dates */}
            <Card>
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Schedule</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-dark-border/50">
                  <span className="text-slate-400">Start Date</span>
                  <span className="text-slate-100 font-semibold">
                    {new Date(tournament.startDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">End Date</span>
                  <span className="text-slate-100 font-semibold">
                    {new Date(tournament.endDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import leaderboard from '@/data/leaderboard.json'

export const metadata = {
  title: 'Leaderboard - UV ESPORTS',
  description: 'Global leaderboard rankings',
}

export default function Leaderboard() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Leaderboard</h1>
            <p className="text-xl text-slate-300 mb-12">
              Global player rankings and statistics
            </p>

            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-border">
                      <th className="px-4 py-3 text-left text-slate-400 font-semibold">Rank</th>
                      <th className="px-4 py-3 text-left text-slate-400 font-semibold">Player</th>
                      <th className="px-4 py-3 text-left text-slate-400 font-semibold">Team</th>
                      <th className="px-4 py-3 text-right text-slate-400 font-semibold">Rating</th>
                      <th className="px-4 py-3 text-right text-slate-400 font-semibold">Matches</th>
                      <th className="px-4 py-3 text-right text-slate-400 font-semibold">Win Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((entry) => (
                      <tr key={entry.rank} className="border-b border-dark-border/50 hover:bg-dark-bg/50 transition">
                        <td className="px-4 py-3">
                          {entry.rank <= 3 ? (
                            <span className="text-2xl">
                              {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          ) : (
                            <Badge variant="primary">{entry.rank}</Badge>
                          )}
                        </td>
                        <td className="px-4 py-3 font-semibold text-slate-100">{entry.playerName}</td>
                        <td className="px-4 py-3 text-slate-400">{entry.team || '-'}</td>
                        <td className="px-4 py-3 text-right text-primary font-semibold">{entry.rating}</td>
                        <td className="px-4 py-3 text-right text-slate-300">{entry.matches}</td>
                        <td className="px-4 py-3 text-right text-accent font-semibold">{entry.winRate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

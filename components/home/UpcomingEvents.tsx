'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import tournaments from '@/data/tournaments.json'

export default function UpcomingEvents() {
  const upcoming = tournaments.filter(t => t.status !== 'completed')

  return (
    <section className="py-24 px-4 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <Badge variant={tournament.status === 'live' ? 'warning' : 'primary'} className="mb-4">
                  {tournament.status.toUpperCase()}
                </Badge>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{tournament.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{tournament.game}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Prize Pool:</span>
                    <span className="text-primary font-semibold">${(tournament.prizePool / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Teams:</span>
                    <span className="text-accent font-semibold">{tournament.teams}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

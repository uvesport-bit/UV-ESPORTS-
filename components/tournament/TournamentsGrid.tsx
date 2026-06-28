'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import tournaments from '@/data/tournaments.json'

export default function TournamentsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament, index) => (
        <motion.div
          key={tournament.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/tournaments/${tournament.id}`}>
            <Card>
              <Badge
                variant={
                  tournament.status === 'live'
                    ? 'warning'
                    : tournament.status === 'completed'
                    ? 'success'
                    : 'primary'
                }
                className="mb-3"
              >
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
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Region:</span>
                  <span className="text-slate-300 font-semibold">{tournament.region}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-dark-border/50">
                <p className="text-xs text-slate-400 line-clamp-2">{tournament.description}</p>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

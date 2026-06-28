'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import teams from '@/data/teams.json'

export default function TeamsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team, index) => (
        <motion.div
          key={team.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/teams/${team.id}`}>
            <Card>
              <Badge variant="primary" className="mb-3">
                #{team.ranking}
              </Badge>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{team.name}</h3>
              <p className="text-sm text-slate-400 mb-4">Captain: {team.captain}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Region:</span>
                  <span className="text-primary font-semibold">{team.region}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Players:</span>
                  <span className="text-accent font-semibold">{team.roster.length}</span>
                </div>
                {team.achievements && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Achievement:</span>
                    <span className="text-slate-300 font-semibold text-xs">{team.achievements[0]}</span>
                  </div>
                )}
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

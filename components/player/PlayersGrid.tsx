'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import players from '@/data/players.json'

export default function PlayersGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player, index) => (
        <motion.div
          key={player.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/players/${player.id}`}>
            <Card>
              <Badge variant="primary" className="mb-3">
                {player.role}
              </Badge>
              <h3 className="text-xl font-bold text-slate-100 mb-1">{player.ign}</h3>
              <p className="text-sm text-slate-400 mb-4">
                {player.country} • {player.currentTeam}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">K/D:</span>
                  <span className="text-primary font-semibold">{player.stats.kd}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Kills:</span>
                  <span className="text-accent font-semibold">{player.stats.kills}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Wins:</span>
                  <span className="text-slate-300 font-semibold">{player.stats.wins}</span>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

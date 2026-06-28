'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import players from '@/data/players.json'
import Link from 'next/link'

export default function FeaturedPlayer() {
  const featured = players[0]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Featured Player
        </motion.h2>

        <Link href={`/players/${featured.id}`}>
          <Card className="border border-accent/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <Badge variant="primary" className="mb-4">{featured.role}</Badge>
                <h3 className="text-3xl font-bold text-slate-100 mb-2">{featured.ign}</h3>
                <p className="text-slate-400 mb-4">{featured.country} • {featured.currentTeam}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm">K/D Ratio</p>
                    <p className="text-2xl font-bold text-accent">{featured.stats.kd}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Kills</p>
                    <p className="text-2xl font-bold text-primary">{featured.stats.kills}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">⭐</div>
                  <p className="text-slate-300">Top Player</p>
                </motion.div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </section>
  )
}

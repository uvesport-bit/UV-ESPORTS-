'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import tournaments from '@/data/tournaments.json'

export default function FeaturedTournament() {
  const featured = tournaments[0]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Featured Tournament
        </motion.h2>

        <Link href={`/tournaments/${featured.id}`}>
          <Card className="bg-gradient-neon/5 border border-primary/20 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Badge variant="primary" className="mb-4">{featured.status.toUpperCase()}</Badge>
                <h3 className="text-3xl font-bold text-slate-100 mb-4">{featured.name}</h3>
                <p className="text-slate-300 mb-6">{featured.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">Prize Pool</p>
                    <p className="text-2xl font-bold text-primary">${(featured.prizePool / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Teams</p>
                    <p className="text-2xl font-bold text-accent">{featured.teams}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Game</p>
                    <p className="text-2xl font-bold text-primary">{featured.game}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Region</p>
                    <p className="text-2xl font-bold text-accent">{featured.region}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl font-bold text-gradient mb-4"
                >
                  🏆
                </motion.div>
                <p className="text-slate-300">Compete for glory and prizes</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </section>
  )
}

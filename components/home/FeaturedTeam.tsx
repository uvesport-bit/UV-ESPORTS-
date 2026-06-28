'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import teams from '@/data/teams.json'
import Link from 'next/link'

export default function FeaturedTeam() {
  const featured = teams[0]

  return (
    <section className="py-24 px-4 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Featured Team
        </motion.h2>

        <Link href={`/teams/${featured.id}`}>
          <Card className="border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <Badge variant="primary" className="mb-4">{featured.region}</Badge>
                <h3 className="text-3xl font-bold text-slate-100 mb-2">{featured.name}</h3>
                <p className="text-slate-400 mb-4">Captain: {featured.captain}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm">Ranking</p>
                    <p className="text-2xl font-bold text-primary">#{featured.ranking}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Players</p>
                    <p className="text-2xl font-bold text-accent">{featured.roster.length}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">🎖️</div>
                  <p className="text-slate-300">{featured.achievements?.[0] || 'Champions'}</p>
                </motion.div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </section>
  )
}

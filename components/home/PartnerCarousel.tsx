'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import partners from '@/data/partners.json'

export default function PartnerCarousel() {
  return (
    <section className="py-24 px-4 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover={false} className="flex items-center justify-center aspect-video">
                <div className="text-center">
                  <p className="text-slate-100 font-semibold text-sm">{partner.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{partner.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

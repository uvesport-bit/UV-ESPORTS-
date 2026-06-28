'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

export default function GalleryPreview() {
  const gallery = [
    { id: 1, title: 'Championship Finals' },
    { id: 2, title: 'Team Training' },
    { id: 3, title: 'Victory Moment' },
    { id: 4, title: 'Tournament Setup' },
    { id: 5, title: 'Player Interview' },
    { id: 6, title: 'Crowd Energy' },
  ]

  return (
    <section className="py-24 px-4 bg-dark-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="aspect-video flex items-center justify-center bg-gradient-purple/10 border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-slate-300 font-semibold">{item.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

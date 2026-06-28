'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'FrostbiteX',
      role: 'Professional AWPer',
      content: 'UV ESPORTS has been a game-changer for my career. The platform is incredible!',
    },
    {
      name: 'PhantomStrike',
      role: 'Team Captain',
      content: 'The tournaments here are top-tier. Highly recommend to any competitive player.',
    },
    {
      name: 'SilentHunter',
      role: 'Tournament Organizer',
      content: 'Best esports platform I\'ve worked with. Everything is seamless and professional.',
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          What Players Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <p className="text-slate-300 mb-4 italic">" {testimonial.content} "</p>
                <div>
                  <p className="text-slate-100 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function Statistics() {
  const stats = [
    { icon: '👥', value: '50K+', label: 'Active Players' },
    { icon: '🏆', value: '200+', label: 'Tournaments' },
    { icon: '💰', value: '$5M+', label: 'Total Prize Pool' },
    { icon: '🌍', value: '150+', label: 'Countries' },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          By the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark rounded-xl p-6 text-center hover:shadow-glow-purple transition"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

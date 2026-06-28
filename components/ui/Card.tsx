'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.05, y: -10 } : {}}
      className={`glass-dark rounded-xl p-6 glow-card ${className}`}
    >
      {children}
    </motion.div>
  )
}

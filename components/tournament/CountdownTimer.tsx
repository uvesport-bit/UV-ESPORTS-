'use client'

import { motion } from 'framer-motion'

interface CountdownProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownProps) {
  const target = new Date(targetDate).getTime()
  const now = new Date().getTime()
  const difference = target - now

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
      <div className="text-3xl font-bold text-primary">{String(value).padStart(2, '0')}</div>
      <p className="text-xs text-slate-400 uppercase mt-1">{label}</p>
    </motion.div>
  )

  return (
    <div className="flex gap-4 justify-center">
      <TimeUnit value={days} label="Days" />
      <div className="text-2xl text-primary">:</div>
      <TimeUnit value={hours} label="Hours" />
      <div className="text-2xl text-primary">:</div>
      <TimeUnit value={minutes} label="Mins" />
      <div className="text-2xl text-primary">:</div>
      <TimeUnit value={seconds} label="Secs" />
    </div>
  )
}

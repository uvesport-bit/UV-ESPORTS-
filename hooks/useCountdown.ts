'use client'

import { useState, useEffect } from 'react'

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  isFinished: boolean
}

export function useCountdown(targetDate: Date | string): CountdownTime {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isFinished: false,
        })
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return countdown
}

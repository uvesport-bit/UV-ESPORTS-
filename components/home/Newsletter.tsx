'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="border border-primary/20 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-6">
              Subscribe to our newsletter for the latest tournaments, player rankings, and exclusive updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition"
              />
              <Button type="submit">Subscribe</Button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-400"
              >
                ✓ Successfully subscribed!
              </motion.p>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

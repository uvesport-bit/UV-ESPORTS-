'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'

export default function DiscordCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-neon/5 border-y border-primary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-4xl font-bold text-gradient mb-4">Join Our Discord Community</h2>
          <p className="text-xl text-slate-300 mb-8">
            Connect with thousands of esports players, get tournament updates, and be part of an amazing community.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <MessageCircle size={20} />
              Join Discord
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

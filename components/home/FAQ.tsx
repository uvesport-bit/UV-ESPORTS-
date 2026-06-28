'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

export default function FAQ() {
  const faqs = [
    {
      question: 'How do I register for a tournament?',
      answer: 'Visit the Tournaments page, select an event, and click Register. Fill in your team details and submit.',
    },
    {
      question: 'What games are supported?',
      answer: 'We support CS2, VALORANT, DOTA 2, and PUBG. More games coming soon!',
    },
    {
      question: 'How are winners determined?',
      answer: 'Winners are determined by match results, tournament rules, and ranking points based on performance.',
    },
    {
      question: 'Can I join a team or create one?',
      answer: 'Yes! You can browse teams in the Teams section or create your own and invite players.',
    },
    {
      question: 'How do I see my stats and leaderboard rank?',
      answer: 'Check the Leaderboard section for rankings or visit your Profile to see detailed statistics.',
    },
    {
      question: 'Is there a minimum skill level required?',
      answer: 'No! We have tournaments for all skill levels, from beginners to professionals.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-dark-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

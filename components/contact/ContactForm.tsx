'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-100 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-100 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-100 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition"
          placeholder="Subject"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-100 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition resize-none"
          placeholder="Your message..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 text-center mt-4"
        >
          ✓ Message sent successfully!
        </motion.p>
      )}
    </form>
  )
}

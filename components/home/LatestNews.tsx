'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import news from '@/data/news.json'
import Link from 'next/link'

export default function LatestNews() {
  const latestNews = news.slice(0, 3)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          Latest News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {latestNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="text-xs text-primary font-semibold mb-2">{article.category}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{article.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-3 mb-4">{article.content}</p>
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>{article.author}</span>
                  <span>👁 {article.views}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news" className="text-primary hover:text-primary-light transition font-semibold">
            View All News →
          </Link>
        </div>
      </div>
    </section>
  )
}

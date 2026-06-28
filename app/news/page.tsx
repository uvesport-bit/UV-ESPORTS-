import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import news from '@/data/news.json'

export const metadata = {
  title: 'News - UV ESPORTS',
  description: 'Latest news and updates',
}

export default function News() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">News</h1>
            <p className="text-xl text-slate-300 mb-12">
              Latest updates from the esports world
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((article) => (
                <Card key={article.id} className="border border-primary/20">
                  <Badge variant="primary" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{article.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{article.content}</p>
                  <div className="flex justify-between items-center text-sm text-slate-500 pt-4 border-t border-dark-border/50">
                    <span>{article.author}</span>
                    <span>👁 {article.views}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

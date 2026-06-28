import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import partners from '@/data/partners.json'

export const metadata = {
  title: 'Partners - UV ESPORTS',
  description: 'Our partners and sponsors',
}

export default function Partners() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Our Partners</h1>
            <p className="text-xl text-slate-300 mb-12">
              Trusted partners supporting the esports community
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <Card key={partner.id} className="border border-primary/20">
                  <div className="flex items-center justify-center h-32 bg-gradient-purple/10 rounded-lg mb-4">
                    <div className="text-center">
                      <p className="text-2xl mb-2">🤝</p>
                      <p className="text-slate-400 text-sm">{partner.name}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{partner.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">Category: {partner.category}</p>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition font-semibold text-sm">
                    Visit Website →
                  </a>
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

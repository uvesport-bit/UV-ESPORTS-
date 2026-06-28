import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Terms & Conditions - UV ESPORTS',
  description: 'Terms & Conditions for UV ESPORTS',
}

export default function Terms() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-8">Terms & Conditions</h1>
            <div className="glass-dark rounded-xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">1. Terms</h2>
                <p className="text-slate-400">
                  By accessing and using the UV ESPORTS platform, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">2. Use License</h2>
                <p className="text-slate-400 mb-3">
                  Permission is granted to temporarily download one copy of the materials on UV ESPORTS for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">3. Disclaimer</h2>
                <p className="text-slate-400">
                  The materials on UV ESPORTS are provided on an 'as is' basis. UV ESPORTS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">4. Limitations</h2>
                <p className="text-slate-400">
                  In no event shall UV ESPORTS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UV ESPORTS.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">5. Accuracy of Materials</h2>
                <p className="text-slate-400">
                  The materials appearing on UV ESPORTS could include technical, typographical, or photographic errors. UV ESPORTS does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

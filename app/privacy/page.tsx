import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Privacy Policy - UV ESPORTS',
  description: 'Privacy Policy for UV ESPORTS',
}

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-8">Privacy Policy</h1>
            <div className="glass-dark rounded-xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">1. Introduction</h2>
                <p className="text-slate-400">
                  UV ESPORTS ("we," "us," or "our") operates the platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">2. Information Collection and Use</h2>
                <p className="text-slate-400 mb-3">
                  We collect several different types of information for various purposes to provide and improve our service to you.
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Personal Data: Name, email address, phone number</li>
                  <li>Usage Data: Device information, browser type, pages visited</li>
                  <li>Game Data: In-game statistics and achievements</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">3. Local Storage</h2>
                <p className="text-slate-400">
                  We store your data locally in your browser using Local Storage. This data is not transmitted to external servers and remains on your device.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">4. Contact Us</h2>
                <p className="text-slate-400">
                  If you have any questions about this Privacy Policy, please contact us at privacy@uv-esports.com
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

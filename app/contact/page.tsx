import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/contact/ContactForm'

export const metadata = {
  title: 'Contact Us - UV ESPORTS',
  description: 'Get in touch with the UV ESPORTS team',
}

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-transition">
            <h1 className="text-5xl font-bold text-gradient mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 mb-12">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-dark rounded-xl p-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="glass-dark rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Email</h3>
                  <p className="text-slate-400">support@uv-esports.com</p>
                </div>
                <div className="glass-dark rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Discord</h3>
                  <p className="text-slate-400">Join our Discord community</p>
                </div>
                <div className="glass-dark rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Office Hours</h3>
                  <p className="text-slate-400">Monday - Friday: 9 AM - 6 PM UTC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

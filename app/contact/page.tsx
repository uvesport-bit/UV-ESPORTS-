import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - UV ESPORTS',
  description: 'Get in touch with UV ESPORTS',
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
              Have questions? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-2xl font-bold text-slate-100 mb-6">Send us a Message</h2>
                  <ContactForm />
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">✉️</div>
                    <div>
                      <h3 className="font-semibold text-slate-100 mb-1">Email</h3>
                      <p className="text-slate-400">contact@uv-esports.com</p>
                      <p className="text-slate-400">support@uv-esports.com</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">💬</div>
                    <div>
                      <h3 className="font-semibold text-slate-100 mb-1">Discord</h3>
                      <p className="text-slate-400">Join our community server</p>
                      <a href="#" className="text-primary hover:text-primary-light transition">discord.gg/uv-esports</a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">🕐</div>
                    <div>
                      <h3 className="font-semibold text-slate-100 mb-1">Support Hours</h3>
                      <p className="text-slate-400">Mon - Fri: 9:00 - 18:00</p>
                      <p className="text-slate-400">Sat - Sun: 10:00 - 16:00</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

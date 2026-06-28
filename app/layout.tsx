import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'UV ESPORTS - Compete. Conquer. Create Legacy.',
  description: 'Join the ultimate esports platform. Compete in tournaments, join scrims, climb the leaderboard.',
  keywords: ['esports', 'gaming', 'tournaments', 'competitive', 'leaderboard'],
  authors: [{ name: 'UV ESPORTS' }],
  openGraph: {
    title: 'UV ESPORTS',
    description: 'Compete. Conquer. Create Legacy.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="cursor-glow">
        <div className="fixed inset-0 -z-50">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute inset-0 animated-bg opacity-10" />
        </div>
        {children}
      </body>
    </html>
  )
}

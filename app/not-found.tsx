import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="w-24 h-24 text-primary animate-bounce" />
        </div>
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="btn-gradient"
          >
            Return Home
          </Link>
          <Link
            href="/tournaments"
            className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 font-semibold transition"
          >
            Browse Tournaments
          </Link>
        </div>
      </div>
    </div>
  )
}

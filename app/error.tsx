'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Something went wrong</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          An unexpected error occurred. Our team has been notified. Please try again or go back home.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-gradient"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 font-semibold transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

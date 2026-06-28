'use client'

import Link from 'next/link'
import { Github, Discord, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">UV ESPORTS</h3>
            <p className="text-slate-400 text-sm mb-4">Compete. Conquer. Create Legacy.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition">
                <Discord size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/tournaments" className="hover:text-primary transition">Tournaments</Link></li>
              <li><Link href="/scrims" className="hover:text-primary transition">Scrims</Link></li>
              <li><Link href="/leaderboard" className="hover:text-primary transition">Leaderboard</Link></li>
              <li><Link href="/teams" className="hover:text-primary transition">Teams</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/gallery" className="hover:text-primary transition">Gallery</Link></li>
              <li><Link href="/news" className="hover:text-primary transition">News</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              &copy; 2024 UV ESPORTS. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 mt-4 md:mt-0">
              Made with <span className="text-primary">❤</span> for gamers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

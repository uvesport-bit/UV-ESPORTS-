import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import FeaturedTournament from '@/components/home/FeaturedTournament'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import Statistics from '@/components/home/Statistics'
import PartnerCarousel from '@/components/home/PartnerCarousel'
import LatestNews from '@/components/home/LatestNews'
import FeaturedTeam from '@/components/home/FeaturedTeam'
import FeaturedPlayer from '@/components/home/FeaturedPlayer'
import GalleryPreview from '@/components/home/GalleryPreview'
import Testimonials from '@/components/home/Testimonials'
import DiscordCTA from '@/components/home/DiscordCTA'
import FAQ from '@/components/home/FAQ'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTournament />
        <UpcomingEvents />
        <Statistics />
        <FeaturedTeam />
        <FeaturedPlayer />
        <PartnerCarousel />
        <LatestNews />
        <GalleryPreview />
        <Testimonials />
        <DiscordCTA />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProgramSection from '@/components/sections/ProgramSection'
import ArtistsSection from '@/components/sections/ArtistsSection'
import PaymentSection from '@/components/sections/PaymentSection'
import FAQSection from '@/components/sections/FAQSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <ArtistsSection />
        <PaymentSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { SocialProof } from "@/components/landing/social-proof"
import { Features } from "@/components/landing/features"
import { WhyKlassi } from "@/components/landing/why-klassi"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <WhyKlassi />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

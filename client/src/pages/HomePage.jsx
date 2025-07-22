import { HeroSection } from "@/components/home/HeroSection"
import { StatsSection } from "@/components/home/StatsSection"
import { FeaturesSection } from "@/components/home/FeaturesSection"
import { BenefitsSection } from "@/components/home/BenefitsSection"
import { ReviewsSection } from "@/components/home/ReviewsSection"
import { Footer } from "@/components/home/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}
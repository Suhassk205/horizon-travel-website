"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ExclusiveDealsSection } from "@/components/sections/exclusive-deals-section"
import { ExperienceExtraordinarySection } from "@/components/sections/experience-extraordinary-section"
import { ExploreThemesSection } from "@/components/sections/explore-themes-section"
import { EarlyBirdOffersSection } from "@/components/sections/early-bird-offers-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HowItWorks } from "@/components/sections/how-it-works"
import { ExplorePackages } from "@/components/sections/explore-packages"
import { BudgetHotels } from "@/components/sections/budget-hotels"
import { NewsletterSignup } from "@/components/sections/newsletter-signup"
import { CustomizeBooking } from "@/components/sections/customize-booking"
import { ExploreRegions } from "@/components/sections/explore-regions"
import { OurPartners } from "@/components/sections/our-partners"
import { Gallery } from "@/components/sections/gallery"
import { FAQ } from "@/components/sections/faq"
import { SecurePay } from "@/components/sections/secure-pay"
import { Footer } from "@/components/sections/footer"

export default function HorizonTravelWebsite() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExclusiveDealsSection />
      <ExperienceExtraordinarySection />
      <ExploreThemesSection />
      <EarlyBirdOffersSection />
      <FeaturesSection />
      <HowItWorks />
      <ExplorePackages />
      <BudgetHotels />
      <NewsletterSignup />
      <CustomizeBooking />
      <ExploreRegions />
      <OurPartners />
      <Gallery />
      <FAQ />
      <SecurePay />
      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ReferralForm() {
  const [referralCode, setReferralCode] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const router = useRouter()

  const handleApply = () => {
    if (referralCode.trim()) {
      // Here you would validate the referral code
      console.log("Applying referral code:", referralCode)
      // Show success modal
      setShowSuccessModal(true)
    }
  }

  const handleContinue = () => {
    // Redirect to signup with referral code applied
    router.push(`/?referral=${encodeURIComponent(referralCode)}`)
  }

  const handleSignup = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/winter-mountain.jpg"
          alt="Winter mountain landscape with snow-covered chalets and forest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex lg:flex-row flex-col">
        {/* Left Side - Hero Content (Desktop) / Top (Mobile) */}
        <div className="lg:flex-1 flex flex-col justify-center px-6 lg:px-16 pt-8 lg:pt-0">
          {/* Logo */}
          <div className="lg:absolute lg:top-8 lg:left-8 flex items-center gap-2 text-white mb-8 lg:mb-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2L22.1 8.1L23.5 9.5L19 14L14.5 9.5L15.9 8.1L18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35C12.3333 19.05 12.6417 18.7583 12.925 18.475L13.775 17.625C13.6917 17.4583 13.625 17.2793 13.575 17.088C13.525 16.8967 13.5 16.7007 13.5 16.5C13.5 15.8 13.7417 15.2083 14.225 14.725C14.7083 14.2417 15.3 14 16 14C16.7 14 17.2917 14.2417 17.775 14.725C18.2583 15.2083 18.5 15.8 18.5 16.5C18.5 17.2 18.2583 17.7917 17.775 18.275C17.2917 18.7583 16.7 19 16 19C15.8667 19 15.7457 18.9917 15.637 18.975C15.5283 18.9583 15.416 18.9333 15.3 18.9C14.8167 19.4 14.304 19.9083 13.762 20.425C13.22 20.9417 12.6327 21.4667 12 22Z"
                fill="white"
              />
            </svg>
            <span className="text-xl font-semibold">Horizon</span>
          </div>

          {/* Hero Text */}
          <div className="lg:max-w-lg">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6">
              Save Upto 20% On Your
              <br className="lg:hidden" />
              <span className="lg:block"> First Booking</span>
            </h1>
            <p className="text-white/90 text-base lg:text-lg mb-8 lg:mb-0">
              On Hotels, Activities, Packages, Flights, And More.
            </p>
          </div>
        </div>

        {/* Right Side - Referral Form (Desktop) / Bottom (Mobile) */}
        <div className="lg:flex-1 flex items-end lg:items-center justify-center p-6 lg:p-8 flex-1">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl lg:rounded-2xl rounded-t-3xl">
            <CardContent className="pt-6 px-8 pb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#000000] mb-3">Have a Referral Code?</h2>
                <p className="text-[#858585] text-sm">Unlock And Enjoy Exclusive Benefits On Your Booking</p>
              </div>

              <div className="space-y-5">
                {/* Referral Code Input with Apply Button */}
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Paste Your Referral Code Here"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="flex-1 border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12"
                  />
                  <Button
                    onClick={handleApply}
                    className="bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold px-8 h-12 rounded-lg"
                    disabled={!referralCode.trim()}
                  >
                    Apply
                  </Button>
                </div>

                {/* No Referral Code Text */}
                <div className="text-center pt-2">
                  <p className="text-[#858585] text-sm mb-1">
                    {"Don't have any referral code? You can still enjoy various benefits on Signing Up!"}
                  </p>
                  <button onClick={handleSignup} className="text-[#0075be] text-sm font-medium hover:underline">
                    Click Here To Signup
                  </button>
                </div>

                {/* Terms Link */}
                <div className="text-center pt-6">
                  <button className="text-[#858585] text-xs hover:underline">Referral Bonus Terms & Conditions</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-lg w-full shadow-2xl">
            {/* Celebration Icon */}
            <div className="flex justify-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IhuCjbLc34yc1j9ZevfmTOq8QK8ClR.png"
                alt="Celebration party icon with confetti"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-center space-y-4">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-[#ff6a00]">Referral Code Applied Successfully</h2>

              {/* Referred By */}
              <p className="text-[#5a5a5a] text-base font-medium">Referred By: Tarunsingh18</p>

              {/* Description */}
              <p className="text-[#5a5a5a] text-base">You are now eligible for referral bonus on your bookings</p>

              {/* Continue Button */}
              <div className="pt-4">
                <Button
                  onClick={handleContinue}
                  className="bg-[#1a1a1a] hover:bg-[#000000] text-white font-medium px-12 py-3 rounded-lg"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

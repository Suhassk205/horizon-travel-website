"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", ""])
  const [resendTimer, setResendTimer] = useState(21)
  const [canResend, setCanResend] = useState(false)
  const router = useRouter()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [resendTimer])

  // Handle OTP input
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle resend OTP
  const handleResendOtp = () => {
    if (canResend) {
      setResendTimer(21)
      setCanResend(false)
      setOtp(["", "", "", "", ""])
      inputRefs.current[0]?.focus()
    }
  }

  // Handle verify OTP
  const handleVerifyOtp = () => {
    const otpCode = otp.join("")
    if (otpCode.length === 5) {
      // Here you would verify the OTP with your backend
      console.log("Verifying OTP:", otpCode)
      // Navigate to change password page after successful OTP verification
      router.push("/auth/app/change-password")
    }
  }

  // Handle change phone number
  const handleChangePhoneNumber = () => {
    router.push("/auth/app/login")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tuscan-landscape.jpg"
          alt="Beautiful Tuscan landscape with rolling hills and cypress trees at sunset"
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

        {/* Right Side - OTP Verification Form (Desktop) / Bottom (Mobile) */}
        <div className="lg:flex-1 flex items-end lg:items-center justify-center p-6 lg:p-8 flex-1">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl lg:rounded-2xl rounded-t-3xl">
            <CardContent className="pt-8 px-6 lg:px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#000000] mb-4">OTP Verification</h2>
                <p className="text-[#858585] text-sm">
                  OTP has been sent to +91- 9******448{" "}
                  <button className="text-blue-500 hover:underline ml-1" onClick={handleChangePhoneNumber}>
                    Change
                  </button>
                </p>
              </div>

              <div className="space-y-6">
                {/* OTP Input Fields */}
                <div className="flex justify-center gap-3">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 lg:w-14 lg:h-14 text-center text-xl font-semibold border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0"
                      maxLength={1}
                    />
                  ))}
                </div>

                {/* Resend OTP */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#858585]">{canResend ? "" : `Resend OTP in ${resendTimer}s`}</span>
                  <button
                    onClick={handleResendOtp}
                    className={`${canResend ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}`}
                    disabled={!canResend}
                  >
                    Resend OTP
                  </button>
                </div>

                {/* Change Password Button */}
                <Button
                  onClick={handleVerifyOtp}
                  className="w-full bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold py-6 rounded-lg text-lg"
                  disabled={otp.join("").length !== 5}
                >
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

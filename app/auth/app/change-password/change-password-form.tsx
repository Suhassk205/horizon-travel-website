"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function ChangePasswordForm() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const router = useRouter()

  const handleChangePassword = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      // Here you would handle the password change logic
      console.log("Changing password...")
      // Show success modal instead of immediate redirect
      setShowSuccessModal(true)
    }
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

        {/* Right Side - Change Password Form (Desktop) / Bottom (Mobile) */}
        <div className="lg:flex-1 flex items-end lg:items-center justify-center p-6 lg:p-8 flex-1">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl lg:rounded-2xl rounded-t-3xl">
            <CardContent className="pt-8 px-6 lg:px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#000000]">Change Your Password</h2>
              </div>

              <div className="space-y-6">
                {/* New Password */}
                <div className="relative">
                  <Input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 pr-10 h-12 lg:h-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 text-[#858585] hover:text-[#000000]"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 pr-10 h-12 lg:h-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 text-[#858585] hover:text-[#000000]"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Remember Me */}
                <div className="flex items-center space-x-3">
                  {/* Custom Toggle Switch */}
                  <button
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                      rememberMe ? "bg-[#ff6a00]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                        rememberMe ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <label className="text-sm text-[#858585] cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
                    Remember me
                  </label>
                </div>

                {/* Change Password Button */}
                <Button
                  onClick={handleChangePassword}
                  className="w-full bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold py-6 rounded-lg text-lg"
                  disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
                >
                  Change Password
                </Button>
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
          <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-4">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-[#ff6a00]">Password Changed Successfully</h2>

              {/* Description */}
              <p className="text-[#5a5a5a] text-base">Now you can login to your account with your new password</p>

              {/* Login Now Button */}
              <div className="pt-4">
                <Button
                  onClick={() => router.push("/auth/app/login")}
                  className="bg-[#1a1a1a] hover:bg-[#000000] text-white font-medium px-8 py-3 rounded-lg"
                >
                  Login Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

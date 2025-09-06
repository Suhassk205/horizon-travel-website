"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, X } from "lucide-react"
import Image from "next/image"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
  const [showEmailConfirmationModal, setShowEmailConfirmationModal] = useState(false)
  const router = useRouter()

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

        {/* Right Side - Login Form (Desktop) / Bottom (Mobile) */}
        <div className="lg:flex-1 flex items-end lg:items-center justify-center p-6 lg:p-8 flex-1">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl lg:rounded-2xl rounded-t-3xl">
            <CardContent className="pt-8 px-6 lg:px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#000000]">Welcome Back</h2>
                <p className="text-[#858585] mt-2">Login Into Your Account</p>
              </div>

              <div className="space-y-6">
                {/* Email/Phone */}
                <Input
                  type="text"
                  placeholder="Enter Your Email or Phone Number"
                  className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                />

                {/* Password */}
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 pr-10 h-12 lg:h-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 text-[#858585] hover:text-[#000000]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between">
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
                  <button
                    className="text-[#0075be] text-sm hover:underline"
                    onClick={() => setShowForgotPasswordModal(true)}
                  >
                    Forgot Password
                  </button>
                </div>

                {/* Social Login */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center my-6">
                    <div className="flex-grow border-t border-[#d9d9d9]"></div>
                    <span className="px-4 text-[#858585] text-sm">Or continue with</span>
                    <div className="flex-grow border-t border-[#d9d9d9]"></div>
                  </div>
                  <div className="flex justify-center items-center gap-6">
                    {/* Google Icon */}
                    <div className="w-12 h-12 relative flex-none">
                      <svg className="w-full h-full" viewBox="0 0 48 48">
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        />
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        />
                      </svg>
                    </div>
                    {/* Facebook Icon */}
                    <div className="w-12 h-12 relative flex-none">
                      <Image
                        src="/images/facebook-icon.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Login Button */}
                <Button className="w-full bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold py-6 rounded-lg text-lg">
                  Login
                </Button>

                {/* Sign Up Link */}
                <p className="text-center text-[#858585] text-sm">
                  {"Don't have an account? "}
                  <button className="text-[#000000] font-semibold hover:underline" onClick={() => router.push("/")}>
                    Sign up!
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowForgotPasswordModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowForgotPasswordModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Lock Body */}
                  <rect x="20" y="35" width="40" height="30" rx="4" fill="#D1D5DB" />
                  {/* Lock Shackle */}
                  <path
                    d="M30 35V25C30 19.4772 34.4772 15 40 15C45.5228 15 50 19.4772 50 25V35"
                    stroke="#6B7280"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* Green dots for OTP */}
                  <circle cx="32" cy="50" r="3" fill="#10B981" />
                  <circle cx="40" cy="50" r="3" fill="#10B981" />
                  <circle cx="48" cy="50" r="3" fill="#10B981" />
                </svg>
              </div>
            </div>

            {/* Modal Content */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-base leading-relaxed">
                We will send you an OTP on your email/Phone to change your password
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 rounded-lg"
                onClick={() => {
                  // Show email confirmation modal
                  setShowForgotPasswordModal(false)
                  setShowEmailConfirmationModal(true)
                }}
              >
                Send on Email
              </Button>
              <Button
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 rounded-lg"
                onClick={() => {
                  // Redirect to OTP verification page
                  router.push("/auth/app/otp-verification")
                  setShowForgotPasswordModal(false)
                }}
              >
                Send on Phone
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Email Confirmation Modal */}
      {showEmailConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowEmailConfirmationModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl p-12 mx-4 max-w-lg w-full shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowEmailConfirmationModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Email Icon */}
            <div className="flex justify-center mb-8">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 30C20 25.5817 23.5817 22 28 22H92C96.4183 22 100 25.5817 100 30V90C100 94.4183 96.4183 98 92 98H28C23.5817 98 20 94.4183 20 90V30Z"
                  stroke="#0891B2"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M20 30L60 60L100 30"
                  stroke="#0891B2"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="text-center space-y-6">
              {/* Heading */}
              <h2 className="text-4xl font-bold text-[#ff6a00]">Check your Email</h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                We have sent you a link on your email to change your password
              </p>

              {/* Continue Button */}
              <div className="pt-4">
                <Button
                  onClick={() => setShowEmailConfirmationModal(false)}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-12 py-4 rounded-2xl text-lg"
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

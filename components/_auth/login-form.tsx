"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, X } from "lucide-react"
import Image from "next/image"
import { toast } from "react-hot-toast"

// Google Icon SVG Component
const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
  const [showEmailConfirmationModal, setShowEmailConfirmationModal] = useState(false)
  const router = useRouter()

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Validate inputs
      if (!email) {
        toast.error("Please enter your email or phone number")
        setLoading(false)
        return
      }

      if (!password) {
        toast.error("Please enter your password")
        setLoading(false)
        return
      }

      // For demo purposes, simulate successful login
      // In a real app, you would validate credentials against your backend
      setTimeout(() => {
        toast.success("Login successful!")
        // Redirect to dashboard
        router.push("/dashboard")
      }, 1000)
    } catch (error) {
      console.error("Login failed:", error)
      toast.error("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tuscan-landscape.png"
          alt="Beautiful Tuscan landscape with rolling hills and cypress trees at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          {/* Logo */}
          <div className="absolute top-8 left-8 flex items-center gap-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2L22.1 8.1L23.5 9.5L19 14L14.5 9.5L15.9 8.1L18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35C12.3333 19.05 12.6417 18.7583 12.925 18.475L13.775 17.625C13.6917 17.4583 13.625 17.2793 13.575 17.088C13.525 16.8967 13.5 16.7007 13.5 16.5C13.5 15.8 13.7417 15.2083 14.225 14.725C14.7083 14.2417 15.3 14 16 14C16.7 14 17.2917 14.2417 17.775 14.725C18.2583 15.2083 18.5 15.8 18.5 16.5C18.5 17.2 18.2583 17.7917 17.775 18.275C17.2917 18.7583 16.7 19 16 19C15.8667 19 15.7457 18.9917 15.637 18.975C15.5283 18.9583 15.416 18.9333 15.3 18.9C14.8167 19.4 14.304 19.9083 13.762 20.425C13.22 20.9417 12.6327 21.4667 12 22Z"
                fill="white"
              />
            </svg>
            <span className="text-xl font-semibold">Horizon</span>
          </div>

          {/* Hero Text */}
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold text-white leading-tight mb-6">
              Save Upto 20%
              <br />
              On Your
              <br />
              First Booking
            </h1>
            <p className="text-white/90 text-lg">On Hotels, Activities, Packages, Flights, And More.</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="pt-8 px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#000000]">Welcome Back</h2>
                <p className="text-[#858585] mt-2">Login Into Your Account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email/Phone */}
                <Input
                  type="text"
                  placeholder="Enter Your Email or Phone Number"
                  className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password */}
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    type="button"
                    className="text-[#ff6a00] text-sm hover:underline"
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
                  <div className="flex justify-center items-start gap-5">
                    <div className="w-[35px] h-[35px] relative flex-none bg-gray-100 rounded-lg flex items-center justify-center">
                      <GoogleIcon />
                    </div>
                    <div className="w-[35px] h-[35px] relative flex-none bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 35 35">
                        {/* Facebook Logo */}
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#3B5998" />
                        <path
                          d="M21.875 17.5H19.25V26.25H15.75V17.5H13.125V14.875H15.75V13.125C15.75 11.1875 16.8125 8.75 19.25 8.75H21.875V11.375H20.125C19.8125 11.375 19.25 11.5625 19.25 12.25V14.875H21.875V17.5Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold py-6 rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>

                {/* Sign Up Link */}
                <p className="text-center text-[#858585] text-sm">
                  {"Don't have an account? "}
                  <button
                    type="button"
                    className="text-[#000000] font-semibold hover:underline"
                    onClick={() => router.push("/auth/signup")}
                  >
                    Sign up!
                  </button>
                </p>
              </form>
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
                  router.push("/otp-verification")
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

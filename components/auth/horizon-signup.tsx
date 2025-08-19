"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Check, Gift } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Facebook Icon SVG Component
const FacebookIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#1877F2"/>
    <path
      d="M20 40V26H16V22H20V16C20 13.5 21.5 11 25 11H28V15H26C25 15 25 15.5 25 16V22H28L27 26H25V40H20Z"
      fill="white"
    />
  </svg>
)

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export function HorizonSignup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const router = useRouter()
  const [countryCode, setCountryCode] = useState("+1")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignup = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      agreeToTerms
    ) {
      // Here you would handle the signup logic
      console.log("Creating account...", formData)
      // Show success modal
      setShowSuccessModal(true)
    }
  }

  const handleContinue = () => {
    // Redirect to login or dashboard
    router.push("/auth")
  }

  const handleLogin = () => {
    router.push("/auth")
  }

  const handleReferral = () => {
    router.push("/auth/referral")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-30%20at%2016.36.30-pBBcWxVSbrD2HRKwvhk4kDNgv8it88.jpeg"
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
            <Image
              src="/images/horizon-logo-official.png"
              alt="Horizon Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
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

        {/* Right Side - Signup Form (Desktop) / Bottom (Mobile) */}
        <div className="lg:flex-1 flex items-end lg:items-center justify-center p-6 lg:p-8 flex-1">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl lg:rounded-2xl rounded-t-3xl">
            <CardContent className="pt-8 px-6 lg:px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#000000]">Create Your Account</h2>
                <p className="text-[#858585] mt-2">Join Horizon and start your journey</p>
              </div>

              <div className="space-y-4">
                {/* Name Fields */}
                <div className="flex gap-3">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                  />
                </div>

                {/* Email */}
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                />

                {/* Phone */}
                <div className="flex gap-3">
                  <Select onValueChange={setCountryCode}>
                    <SelectTrigger className="w-[120px] h-12 lg:h-10 border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+1">
                        <div className="flex items-center">
                          <Image
                            src="/images/flags/us.svg"
                            alt="United States"
                            width={20}
                            height={15}
                            className="mr-2 rounded"
                          />
                          <span>+1 (US)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+91">
                        <div className="flex items-center">
                          <Image
                            src="/images/flags/in.svg"
                            alt="India"
                            width={20}
                            height={15}
                            className="mr-2 rounded"
                          />
                          <span>+91 (IN)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+44">
                        <div className="flex items-center">
                          <Image
                            src="/images/flags/gb.svg"
                            alt="United Kingdom"
                            width={20}
                            height={15}
                            className="mr-2 rounded"
                          />
                          <span>+44 (UK)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+61">
                        <div className="flex items-center">
                          <Image
                            src="/images/flags/au.svg"
                            alt="Australia"
                            width={20}
                            height={15}
                            className="mr-2 rounded"
                          />
                          <span>+61 (AU)</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+49">
                        <div className="flex items-center">
                          <Image
                            src="/images/flags/de.svg"
                            alt="Germany"
                            width={20}
                            height={15}
                            className="mr-2 rounded"
                          />
                          <span>+49 (DE)</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
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

                {/* Confirm Password */}
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
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

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setAgreeToTerms(!agreeToTerms)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      agreeToTerms ? "bg-[#ff6a00] border-[#ff6a00]" : "border-[#d9d9d9]"
                    }`}
                  >
                    {agreeToTerms && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <label
                    className="text-sm text-[#858585] leading-relaxed cursor-pointer"
                    onClick={() => setAgreeToTerms(!agreeToTerms)}
                  >
                    I agree to the <button className="text-[#0075be] hover:underline">Terms & Conditions</button> and{" "}
                    <button className="text-[#0075be] hover:underline">Privacy Policy</button>
                  </label>
                </div>

                {/* Social Login */}
                <div className="text-center pt-2">
                  <div className="relative flex items-center justify-center my-6">
                    <div className="flex-grow border-t border-[#d9d9d9]"></div>
                    <span className="px-4 text-[#858585] text-sm">Or continue with</span>
                    <div className="flex-grow border-t border-[#d9d9d9]"></div>
                  </div>
                  <div className="flex justify-center items-center gap-6">
                    {/* Google Icon */}
                    <div className="w-12 h-12 relative flex-none cursor-pointer hover:opacity-80 transition-opacity">
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
                    <div className="w-12 h-12 relative flex-none cursor-pointer hover:opacity-80 transition-opacity">
                      <FacebookIcon />
                    </div>
                  </div>
                </div>

                {/* Signup Button */}
                <Button
                  onClick={handleSignup}
                  className="w-full bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold py-6 rounded-lg text-lg"
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.password ||
                    !formData.confirmPassword ||
                    formData.password !== formData.confirmPassword ||
                    !agreeToTerms
                  }
                >
                  Create Account
                </Button>

                {/* Login Link */}
                <p className="text-center text-[#858585] text-sm">
                  Already have an account?{" "}
                  <button className="text-[#000000] font-semibold hover:underline" onClick={handleLogin}>
                    Login
                  </button>
                </p>
              </div>
              <div className="text-center mt-4">
                <Button variant="link" className="gap-1" onClick={handleReferral}>
                  <Gift className="w-4 h-4" />
                  Have a referral code?
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
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
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-4">
              {/* Heading */}
              <h2 className="text-2xl font-bold text-[#ff6a00]">Account Created Successfully!</h2>

              {/* Description */}
              <p className="text-[#5a5a5a] text-base">
                Welcome to Horizon! Your account has been created and you can now start exploring amazing travel deals.
              </p>

              {/* Continue Button */}
              <div className="pt-4">
                <Button
                  onClick={handleContinue}
                  className="bg-[#1a1a1a] hover:bg-[#000000] text-white font-medium px-8 py-3 rounded-lg"
                >
                  Continue to Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

    "use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Eye, EyeOff, Gift } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/mountain-lake.jpg"
          alt="Mountain lake with turquoise water surrounded by rocky mountains"
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

        {/* Right Side - Signup Form (Desktop) / Bottom (Mobile) */}
        <div className="lg:flex-1 flex items-end lg:items-center justify-center p-6 lg:p-8 flex-1">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl lg:rounded-2xl rounded-t-3xl">
            <CardHeader className="text-center pb-6">
              <h2 className="text-2xl font-bold text-[#000000]">Create an Account</h2>
              <p className="text-[#858585] mt-2">And Start Your Travel Journey</p>
            </CardHeader>
            <CardContent className="space-y-4 px-6 lg:px-8">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                />
                <Input
                  placeholder="Last Name"
                  className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                />
              </div>

              {/* Email */}
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
              />

              {/* Phone */}
              <div className="flex gap-2">
                <div className="relative w-[90px]">
                  <select 
                    className="w-full border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10 pl-11 pr-6 py-2 bg-white rounded-md appearance-none cursor-pointer"
                    defaultValue="in"
                  >
                    <option value="in">+91</option>
                  </select>
                  <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                    <Image src="/images/india-flag.png" alt="India Flag" width={25} height={17} className="rounded-sm" />
                  </div>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <Input
                  placeholder="Enter Your Phone"
                  className="flex-1 border-[#d9d9d9] focus:border-[#ff6a00] focus:ring-0 h-12 lg:h-10"
                />
              </div>

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

              {/* Confirm Password */}
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
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

              {/* Referral Button */}
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/auth/app/referral")}
                className="w-full border-[#ff6a00] text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white h-12 lg:h-10 font-medium"
              >
                <Gift className="w-4 h-4 mr-2" />
                Have a Referral Code?
              </Button>

              {/* Social Login */}
              <div className="text-center">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="flex-grow border-t border-[#d9d9d9]"></div>
                  <span className="px-4 text-[#858585] text-sm">Or continue with</span>
                  <div className="flex-grow border-t border-[#d9d9d9]"></div>
                </div>
                <div className="flex justify-center items-center gap-6">
                  {/* Google Icon */}
                  <Image
                    src="/images/google-icon.png"
                    alt="Google"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  {/* Facebook Icon */}
                  <Image
                    src="/images/facebook-icon.png"
                    alt="Facebook"
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Create Account Button */}
              <Button className="w-full bg-[#ff6a00] hover:bg-[#ff4b26] text-white font-semibold py-6 rounded-lg text-lg">
                Create Account
              </Button>

              {/* Sign In Link */}
              <p className="text-center text-[#858585] text-sm">
                already have an account?{" "}
                <button className="text-[#000000] font-semibold hover:underline" onClick={() => router.push("/auth/app/login")}>
                  Sign in!
                </button>
              </p>

              {/* Terms */}
              <p className="text-center text-[#858585] text-xs mt-4 pb-4">
                By continuing you agree to the Terms of Use
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

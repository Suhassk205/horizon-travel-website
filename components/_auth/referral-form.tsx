"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Users, Gift, Copy, Check, ArrowRight, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ReferralFormProps {
  userReferralCode?: string
  onSuccess?: () => void
  redirectTo?: string
}

export function ReferralForm({ userReferralCode = "HORIZON2024", onSuccess, redirectTo = "/" }: ReferralFormProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("refer")
  const [referralCode, setReferralCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [copied, setCopied] = useState(false)

  const referralLink = `https://horizon-travel.com/signup?ref=${userReferralCode}`

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!referralCode.trim()) {
      setError("Please enter a referral code")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate referral code validation
      const validCodes = ["WELCOME2024", "FRIEND50", "TRAVEL25"]
      const isValid = validCodes.includes(referralCode.toUpperCase()) || Math.random() > 0.3

      if (isValid) {
        setSuccess("Referral code applied successfully! You've earned 500 bonus points.")

        setTimeout(() => {
          if (onSuccess) {
            onSuccess()
          } else {
            router.push(redirectTo)
          }
        }, 2000)
      } else {
        setError("Invalid referral code. Please check and try again.")
      }
    } catch (err) {
      setError("Failed to apply referral code. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareReferral = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join Horizon Travel",
          text: "Get amazing travel deals with my referral code!",
          url: referralLink,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      copyToClipboard(referralLink)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Referral Program</CardTitle>
          <CardDescription className="text-center">
            Earn rewards by referring friends or use a referral code to get bonus points
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="refer">Refer Friends</TabsTrigger>
              <TabsTrigger value="redeem">Use Referral Code</TabsTrigger>
            </TabsList>

            <TabsContent value="refer" className="space-y-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-[#ff6600]/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-[#ff6600]" />
                </div>
                <h3 className="text-xl font-semibold">Invite Friends & Earn Rewards</h3>
                <p className="text-gray-600">
                  Share your referral code and earn 1000 points for each friend who signs up!
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Your Referral Code</Label>
                  <div className="flex space-x-2">
                    <Input value={userReferralCode} readOnly className="font-mono text-center text-lg font-semibold" />
                    <Button onClick={() => copyToClipboard(userReferralCode)} variant="outline" className="px-3">
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Referral Link</Label>
                  <div className="flex space-x-2">
                    <Input value={referralLink} readOnly className="text-sm" />
                    <Button onClick={() => copyToClipboard(referralLink)} variant="outline" className="px-3">
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button onClick={shareReferral} className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Referral Link
                </Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold flex items-center">
                  <Users className="mr-2 h-4 w-4 text-[#ff6600]" />
                  How it works
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold text-[#ff6600] mr-2">1.</span>
                    Share your referral code or link with friends
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#ff6600] mr-2">2.</span>
                    They sign up using your code and get 500 bonus points
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#ff6600] mr-2">3.</span>
                    You earn 1000 points for each successful referral
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-[#ff6600] mr-2">4.</span>
                    Use points for discounts on future bookings
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="redeem" className="space-y-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-[#ff6600]/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-[#ff6600]" />
                </div>
                <h3 className="text-xl font-semibold">Have a Referral Code?</h3>
                <p className="text-gray-600">Enter your friend's referral code to get 500 bonus points!</p>
              </div>

              <form onSubmit={handleReferralSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="border-green-200 bg-green-50">
                    <AlertDescription className="text-green-800">{success}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="referralCode">Referral Code</Label>
                  <Input
                    id="referralCode"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                    placeholder="Enter referral code (e.g., WELCOME2024)"
                    className="font-mono text-center text-lg"
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white"
                  disabled={isLoading || !referralCode.trim()}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Applying Code...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Apply Referral Code
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Sample Codes (for demo)</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded border">
                    <span className="font-mono">WELCOME2024</span>
                    <span className="text-green-600 font-medium">500 points</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded border">
                    <span className="font-mono">FRIEND50</span>
                    <span className="text-green-600 font-medium">500 points</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded border">
                    <span className="font-mono">TRAVEL25</span>
                    <span className="text-green-600 font-medium">500 points</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Button variant="ghost" onClick={() => router.push(redirectTo)} disabled={isLoading}>
              Skip for now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

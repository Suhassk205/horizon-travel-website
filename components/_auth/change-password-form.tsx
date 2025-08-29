"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ChangePasswordFormProps {
  isReset?: boolean
  onSuccess?: () => void
  redirectTo?: string
}

export function ChangePasswordForm({
  isReset = false,
  onSuccess,
  redirectTo = "/auth/login",
}: ChangePasswordFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.newPassword.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(formData.newPassword) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(formData.newPassword) },
    { text: "Contains number", met: /\d/.test(formData.newPassword) },
    { text: "Contains special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword) },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError("")
  }

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const validateForm = () => {
    if (!isReset && !formData.currentPassword) {
      setError("Current password is required")
      return false
    }

    if (!formData.newPassword) {
      setError("New password is required")
      return false
    }

    const allRequirementsMet = passwordRequirements.every((req) => req.met)
    if (!allRequirementsMet) {
      setError("Password does not meet all requirements")
      return false
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match")
      return false
    }

    if (!isReset && formData.currentPassword === formData.newPassword) {
      setError("New password must be different from current password")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate password change logic
      const success = Math.random() > 0.1 // 90% success rate for demo

      if (success) {
        setSuccess(true)

        setTimeout(() => {
          if (onSuccess) {
            onSuccess()
          } else {
            router.push(redirectTo)
          }
        }, 2000)
      } else {
        if (!isReset) {
          setError("Current password is incorrect")
        } else {
          setError("Failed to reset password. Please try again.")
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Password {isReset ? "Reset" : "Changed"} Successfully!
              </h2>
              <p className="text-gray-600">
                Your password has been {isReset ? "reset" : "updated"} successfully.
                {isReset && " You can now sign in with your new password."}
              </p>
              <Button
                onClick={() => router.push(redirectTo)}
                className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white"
              >
                {isReset ? "Sign In" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {isReset ? "Reset Password" : "Change Password"}
          </CardTitle>
          <CardDescription className="text-center">
            {isReset ? "Create a new password for your account" : "Update your password to keep your account secure"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {!isReset && (
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type={showPasswords.current ? "text" : "password"}
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    placeholder="Enter current password"
                    className="pl-10 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("current")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showPasswords.new ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                  className="pl-10 pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
                >
                  {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {formData.newPassword && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Password Requirements</Label>
                <div className="space-y-1">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          req.met ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {req.met && <CheckCircle className="w-3 h-3 text-green-600" />}
                      </div>
                      <span className={`text-xs ${req.met ? "text-green-600" : "text-gray-500"}`}>{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPasswords.confirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                  className="pl-10 pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
                >
                  {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isReset ? "Resetting..." : "Changing..."}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  {isReset ? "Reset Password" : "Change Password"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

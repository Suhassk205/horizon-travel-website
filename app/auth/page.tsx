"use client"

import { useState } from "react"
import LoginForm from "@/components/auth/login-form"
import { OTPVerification } from "@/components/auth/otp-verification"
import { ChangePasswordForm } from "@/components/auth/change-password-form"
import { ReferralForm } from "@/components/auth/referral-form"

type AuthStep = "login" | "otp" | "change-password" | "referral"

export default function AuthPage() {
  const [currentStep, setCurrentStep] = useState<AuthStep>("login")
  const [userEmail, setUserEmail] = useState("")

  const handleLoginSuccess = () => {
    setCurrentStep("otp")
  }

  const handleOTPSuccess = () => {
    setCurrentStep("referral")
  }

  const handlePasswordChangeSuccess = () => {
    setCurrentStep("login")
  }

  const handleReferralSuccess = () => {
    // Redirect to home page or dashboard
    window.location.href = "/"
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "login":
        return <LoginForm onSuccess={handleLoginSuccess} redirectTo="/" />

      case "otp":
        return (
          <OTPVerification
            email={userEmail}
            purpose="login"
            onSuccess={handleOTPSuccess}
            onBack={() => setCurrentStep("login")}
            redirectTo="/"
          />
        )

      case "change-password":
        return <ChangePasswordForm isReset={true} onSuccess={handlePasswordChangeSuccess} redirectTo="/auth/login" />

      case "referral":
        return <ReferralForm onSuccess={handleReferralSuccess} redirectTo="/" />

      default:
        return <LoginForm onSuccess={handleLoginSuccess} />
    }
  }

  return <div className="min-h-screen bg-gray-50">{renderCurrentStep()}</div>
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navigationItems = [
    { name: "Destination", href: "#destination" },
    { name: "Explore Extraordinary", href: "#explore" },
    { name: "Offers", href: "/offers" },
    { name: "Support", href: "#support" },
    { name: "Review & Ratings", href: "#reviews" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <Image
              src="/images/horizon-logo-official.png"
              alt="Horizon Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold">Horizon</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.name === "Offers" ? (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className="text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => router.push("/auth/app/signup")}
              className="bg-[#29383E] hover:bg-[#1f2d33] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Signup
            </Button>
            <Button
              onClick={() => router.push("/auth/app/login")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.name === "Offers" ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      router.push(item.href)
                      setIsMenuOpen(false)
                    }}
                    className="text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button
                  onClick={() => {
                    router.push("/auth/app/signup")
                    setIsMenuOpen(false)
                  }}
                  className="bg-[#29383E] hover:bg-[#1f2d33] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Signup
                </Button>
                <Button
                  onClick={() => {
                    router.push("/auth/app/login")
                    setIsMenuOpen(false)
                  }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

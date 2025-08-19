"use client"

import { Calendar, MapPin, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WelcomeSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff6600] to-[#ff8533] p-8 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-white/90 text-lg mb-4">
              Ready for your next adventure? Let's explore amazing destinations together.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Plane className="h-4 w-4" />
                <span>5 trips completed</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>12 countries visited</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Next trip in 15 days</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" className="bg-white text-[#ff6600] hover:bg-gray-100 font-medium">
              Plan New Trip
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ff6600] font-medium"
            >
              View Bookings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

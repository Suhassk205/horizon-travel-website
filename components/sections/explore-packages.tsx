"use client"

import { Heart, Plane, Building2, Target, Bus, ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ExplorePackages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const packages = [
    {
      id: 1,
      duration: "6N/7D",
      title: "Shimla, Kullu, Manali in Winters",
      location: "Himachal Pradesh",
      image: "/images/winter-mountain-valley.jpeg",
      flights: 2,
      hotels: 11,
      activities: 5,
      transfers: 4,
      price: "5,999",
      currency: "₹",
    },
    {
      id: 2,
      duration: "6N/7D",
      title: "Shimla, Kullu, Manali in Winters",
      location: "Himachal Pradesh",
      image: "/images/mountain-hot-air-balloons.jpeg",
      flights: 2,
      hotels: 11,
      activities: 5,
      transfers: 4,
      price: "5,999",
      currency: "₹",
    },
    {
      id: 3,
      duration: "7N/8D",
      title: "Royal Rajasthan Heritage Tour",
      location: "Rajasthan",
      image: "/images/rajasthan-palace-entrance.jpeg",
      flights: 2,
      hotels: 9,
      activities: 8,
      transfers: 6,
      price: "8,999",
      currency: "₹",
    },
    {
      id: 4,
      duration: "4N/5D",
      title: "Golden Triangle Classic",
      location: "Delhi - Agra - Jaipur",
      image: "/images/taj-mahal-agra.jpeg",
      flights: 2,
      hotels: 6,
      activities: 7,
      transfers: 4,
      price: "6,999",
      currency: "₹",
    },
    {
      id: 5,
      duration: "5N/6D",
      title: "Tropical Beach Paradise",
      location: "Andaman & Nicobar",
      image: "/images/tropical-sunset-beach.jpeg",
      flights: 2,
      hotels: 8,
      activities: 6,
      transfers: 3,
      price: "12,999",
      currency: "₹",
    },
  ]

  const tabs = ["All", "Popular", "Trending", "Featured", "Top Visited"]

  const nextSlide = () => {
    setCurrentIndex(1) // Show the next set of cards (the additional ones)
  }

  const prevSlide = () => {
    setCurrentIndex(0) // Return to the original set of cards
  }

  // Determine which cards to display based on currentIndex
  const visiblePackages =
    currentIndex === 0
      ? packages.slice(0, 3) // Show first 3 cards initially
      : packages.slice(2, 5) // Show last 3 cards (including the 2 new ones)

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Best Packages</h2>
          <p className="text-sm text-gray-600">Embark on a mesmerizing journey to explore the top destinations</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  index === 0 ? "bg-[#ff6600] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="relative">
          <div className="flex space-x-4 overflow-hidden">
            {visiblePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-shrink-0 w-[320px] h-[400px] relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    {/* Duration Badge */}
                    <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {pkg.duration}
                    </div>

                    {/* Heart Icon */}
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Heart className="h-5 w-5 text-white" />
                    </button>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    {/* Title and Location */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 leading-tight">{pkg.title}</h3>
                      <p className="text-white/80 text-sm">{pkg.location}</p>
                    </div>

                    {/* Package Details */}
                    <div className="flex justify-between gap-2 text-xs">
                      <div className="flex flex-col items-center bg-black/70 px-3 py-1.5 rounded-md gap-1">
                        <Plane className="h-4 w-4 text-[#ff6600]" />
                        <span className="text-white/90">{pkg.flights} Flights</span>
                      </div>
                      <div className="flex flex-col items-center bg-black/70 px-3 py-1.5 rounded-md gap-1">
                        <Building2 className="h-4 w-4 text-[#ff6600]" />
                        <span className="text-white/90">{pkg.hotels} Hotels</span>
                      </div>
                      <div className="flex flex-col items-center bg-black/70 px-3 py-1.5 rounded-md gap-1">
                        <Target className="h-4 w-4 text-[#ff6600]" />
                        <span className="text-white/90">{pkg.activities} Activities</span>
                      </div>
                      <div className="flex flex-col items-center bg-black/70 px-3 py-1.5 rounded-md gap-1">
                        <Bus className="h-4 w-4 text-[#ff6600]" />
                        <span className="text-white/90">{pkg.transfers} Transfers</span>
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold text-[#ff6600]">{pkg.currency}</span>
                          <span className="text-2xl font-bold text-white">{pkg.price}</span>
                          <span className="text-sm text-white/80 ml-1">Per Person</span>
                        </div>
                        <p className="text-xs text-white/70">Includes taxes and fees</p>
                      </div>
                      <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-4 py-1.5 text-sm rounded-lg font-medium shadow-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {currentIndex === 0 ? (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ff6600] text-white p-2 rounded-full shadow-lg hover:bg-[#e55a00] transition-colors"
              aria-label="See more packages"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ff6600] text-white p-2 rounded-full shadow-lg hover:bg-[#e55a00] transition-colors"
              aria-label="See previous packages"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-8">
          <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-6 py-2 rounded-md text-sm">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
}

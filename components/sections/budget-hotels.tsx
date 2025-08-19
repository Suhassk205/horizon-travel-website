"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BudgetHotels() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerPage = 3 // Changed to 3 cards per row

  const hotels = [
    {
      id: 1,
      name: "Lemon Tree Premier Hotel",
      location: "New Delhi, Delhi", // Combined location and state
      image: "/images/hotel-courtyard-modern.jpeg",
      price: "5,999",
      currency: "₹",
      bookingFees: "0",
    },
    {
      id: 2,
      name: "Hotel Taj Resorts",
      location: "Goa, Goa",
      image: "/images/hotel-room-tropical.jpeg",
      price: "4,599",
      currency: "₹",
      bookingFees: "0",
    },
    {
      id: 3,
      name: "Mountain View Resort",
      location: "Manali, Himachal Pradesh",
      image: "/images/hotel-room-contemporary.jpeg",
      price: "3,299",
      currency: "₹",
      bookingFees: "0",
    },
    {
      id: 4,
      name: "Heritage Palace Hotel",
      location: "Jaipur, Rajasthan",
      image: "/images/heritage-hotel-luxury.jpeg",
      price: "6,799",
      currency: "₹",
      bookingFees: "0",
    },
    {
      id: 5,
      name: "Backwater Retreat",
      location: "Alleppey, Kerala",
      image: "/images/backwater-resort-pool.jpeg",
      price: "4,999",
      currency: "₹",
      bookingFees: "0",
    },
    {
      id: 6,
      name: "Seaside Grand Hotel",
      location: "Mumbai, Maharashtra",
      image: "/placeholder.svg?height=256&width=400",
      price: "7,199",
      currency: "₹",
      bookingFees: "0",
    },
  ]

  const totalPages = Math.ceil(hotels.length / cardsPerPage)

  const getCurrentPageHotels = () => {
    const startIndex = currentIndex * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    return hotels.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const canGoNext = currentIndex < totalPages - 1
  const canGoPrev = currentIndex > 0

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Budget-Friendly Hotels</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore Our Hand-Curated Selection of Budget Hotels Offering Unbeatable Value and Comfort
          </p>
        </div>

        {/* Hotel Cards Container */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          {canGoPrev && (
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center hover:bg-[#e55a00] transition-colors duration-300 shadow-lg"
              aria-label="Previous hotels"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Hotel Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[450px]">
            {getCurrentPageHotels().map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Hotel Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={hotel.image || "/placeholder.svg?height=192&width=300"}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Hotel Details */}
                <div className="p-4">
                  {/* Hotel Name and Location */}
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-end justify-between mb-2">
                    <div className="flex flex-col">
                      <div className="flex items-baseline">
                        <span className="text-[#ff6600] text-2xl font-bold">{hotel.currency}</span>
                        <span className="text-gray-900 text-2xl font-bold ml-1">{hotel.price}</span>
                      </div>
                      <p className="text-xs text-gray-500">Includes taxes and fees</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-sm font-medium text-[#ff6600]">
                        {hotel.currency} {hotel.bookingFees} Booking Fees
                      </p>
                      {/* Book Now Button */}
                      <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-4 py-1.5 text-xs font-medium rounded-lg transition-colors">
                        Book Now
                      </Button>
                    </div>
                  </div>

                  {/* Book Now Button */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          {canGoNext && (
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center hover:bg-[#e55a00] transition-colors duration-300 shadow-lg"
              aria-label="Next hotels"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-[#ff6600]" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Page Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            Showing {getCurrentPageHotels().length} of {hotels.length} hotels • Page {currentIndex + 1} of {totalPages}
          </span>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-8 py-3 text-base font-medium rounded-lg">
            Explore All Hotels
          </Button>
        </div>
      </div>
    </section>
  )
}

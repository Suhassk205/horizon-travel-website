"use client"

import { useState, useRef } from "react"
import { ArrowRight, MapPin, Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BudgetHotels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [likedHotels, setLikedHotels] = useState<number[]>([])

  const hotels = [
    {
      id: 1,
      name: "Lemon Tree Premier Hotel",
      location: "New Delhi, Delhi",
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
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -430 : 430 // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const toggleLike = (hotelId: number) => {
    setLikedHotels((prev) =>
      prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]
    )
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-gilroy font-semibold text-[#16242a] text-[40px] tracking-[-1.68px] leading-[normal] mb-4">Top Budget-Friendly Hotels</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-gilroy">
            Explore Our Hand-Curated Selection of Budget Hotels Offering Unbeatable Value and Comfort
          </p>
        </div>

        {/* Hotel Cards Container */}
        <div className="relative">
          {/* Hotel Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-lg shadow-lg transition-all duration-300 group w-[424px] flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative h-52 overflow-hidden rounded-t-lg">
                  <Image
                    src={hotel.image || "/placeholder.svg?height=192&width=300"}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleLike(hotel.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/40 rounded-[15px] flex items-center justify-center hover:bg-black/60 transition-colors"
                    aria-label="Like hotel"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedHotels.includes(hotel.id) ? "text-white fill-current" : "text-white"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold font-gilroy text-gray-800">{hotel.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 font-gilroy">{hotel.location}</p>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold font-gilroy">{hotel.currency} {hotel.price}</span>
                        <span className="text-sm text-gray-500 ml-1 font-gilroy">Per Person</span>
                      </div>
                      <p className="text-xs text-gray-500 font-gilroy">Includes taxes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 font-gilroy">
                        <span className="font-bold text-gray-800">{hotel.currency} {hotel.bookingFees}</span> Booking Fees
                      </p>
                      <Button className="bg-[#F56600] hover:bg-[#e05a00] text-white px-4 py-2 mt-1 text-sm font-gilroy font-normal rounded-md">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/3 -right-4 transform -translate-y-1/2 bg-[#FF6A00] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
            aria-label="Next hotels"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Button className="bg-[#FF6A00] hover:bg-[#e05a00] text-white px-8 py-3 text-base font-gilroy font-normal rounded-lg capitalize">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
}

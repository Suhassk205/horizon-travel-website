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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="mb-4"
            style={{
              color: "#16242A",
              fontSize: "42px",
              fontFamily: "Gilroy, sans-serif",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Top Budget-Friendly Hotels
          </h2>
          <p
            className="max-w-4xl mx-auto"
            style={{
              color: "black",
              fontSize: "18px",
              fontFamily: "Gilroy, sans-serif",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
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
                className="bg-white rounded-[10px] shadow-sm transition-all duration-300 group w-[424px] flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Hotel Image */}
                <div className="relative h-[204px] overflow-hidden rounded-t-[10px]">
                  <Image
                    src={hotel.image || "/placeholder.svg?height=192&width=300"}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleLike(hotel.id)}
                    className="absolute top-4 right-4 w-16 h-16 bg-black/40 rounded-[15px] flex items-center justify-center hover:bg-black/60 transition-colors"
                    aria-label="Like hotel"
                  >
                    <Heart
                      className={`w-8 h-8 ${
                        likedHotels.includes(hotel.id) ? "text-white fill-current" : "text-white"
                      }`}
                    />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Hotel Name and Location */}
                  <div className="mb-4">
                    <h3
                      style={{
                        color: "#16242A",
                        fontSize: "22px",
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "600",
                        letterSpacing: "-0.44px",
                        lineHeight: "25.78px",
                        textAlign: "left",
                      }}
                    >
                      {hotel.name}
                    </h3>
                    <p
                      style={{
                        color: "#004849",
                        fontSize: "16px",
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "500",
                        lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      {hotel.location}
                    </p>
                  </div>

                  {/* Price and Booking Info */}
                  <div className="flex justify-between items-start mb-0">
                    {/* Price Section */}
                    <div className="flex items-center gap-0">
                      <div className="w-9 h-9 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                          <path d="M27.6323 7.5H11.1323H15.6323C17.2236 7.5 18.7497 8.13214 19.875 9.25736C21.0002 10.3826 21.6323 11.9087 21.6323 13.5C21.6323 15.0913 21.0002 16.6174 19.875 17.7426C18.7497 18.8679 17.2236 19.5 15.6323 19.5H11.1323L20.1323 28.5M11.1323 13.5H27.6323" stroke="#F56600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="flex items-baseline gap-0">
                        <span
                          style={{
                            color: "#16242A",
                            fontSize: "32px",
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: "600",
                            letterSpacing: "-0.64px",
                            lineHeight: "39.2px",
                          }}
                        >
                          {hotel.price}
                        </span>
                        <span
                          style={{
                            color: "#004849",
                            fontSize: "16px",
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: "500",
                            lineHeight: "32px",
                          }}
                        >
                          Per Person
                        </span>
                      </div>
                    </div>

                    {/* Booking Fees */}
                    <div className="text-right">
                      <div className="flex items-center">
                        <div className="w-5.5 h-5.5 flex items-center justify-center mr-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 37 36" fill="none">
                            <path d="M27.6323 7.5H11.1323H15.6323C17.2236 7.5 18.7497 8.13214 19.875 9.25736C21.0002 10.3826 21.6323 11.9087 21.6323 13.5C21.6323 15.0913 21.0002 16.6174 19.875 17.7426C18.7497 18.8679 17.2236 19.5 15.6323 19.5H11.1323L20.1323 28.5M11.1323 13.5H27.6323" stroke="#F56600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span
                          style={{
                            color: "#004849",
                            fontSize: "20px",
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: "600",
                            letterSpacing: "-0.4px",
                            lineHeight: "23.44px",
                          }}
                        >
                          {hotel.bookingFees}
                        </span>
                        <span
                          style={{
                            color: "#004849",
                            fontSize: "16px",
                            fontFamily: "Gilroy, sans-serif",
                            fontWeight: "500",
                            lineHeight: "18.75px",
                            marginLeft: "8px",
                          }}
                        >
                          Booking Fees
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section with Includes Taxes and Book Now Button */}
                  <div className="flex justify-between items-end -mt-2">
                    {/* Includes Taxes */}
                    <p
                      style={{
                        color: "#004849",
                        fontSize: "16px",
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "500",
                        lineHeight: "19.41px",
                        textAlign: "left",
                      }}
                    >
                      Includes taxes
                    </p>

                    {/* Book Now Button */}
                    <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-4 py-1.5 text-sm rounded-lg font-gilroy font-medium shadow-lg">
                      Book Now
                    </Button>
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
        <div className="flex justify-center mt-12">
          <button className="bg-[#ff6b00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-md font-gilroy font-medium transition-colors text-lg">
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}

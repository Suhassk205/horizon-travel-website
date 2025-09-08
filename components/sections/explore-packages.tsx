"use client"

import { Heart, Plane, ArrowRight, Building2, Car, Mountain } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export function ExplorePackages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("All") // State to manage active tab
  const [likedPackages, setLikedPackages] = useState<number[]>([])

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

  const scroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  const toggleLike = (packageId: number) => {
    setLikedPackages((prev) =>
      prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId]
    )
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="mb-2"
            style={{
              color: "#16242A",
              fontSize: "42px",
              fontFamily: "Gilroy",
              fontWeight: "600",
              lineHeight: "64px",
              wordWrap: "break-word",
            }}
          >
            Explore Best Packages
          </h2>
          <p
            style={{
              color: "#29383E",
              fontSize: "18px",
              fontFamily: "Gilroy",
              fontWeight: "500",
              lineHeight: "32px",
              wordWrap: "break-word",
            }}
          >
            Embark on a mesmerizing journey to explore the top destinations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 w-[940px] h-[82px] p-[10px]">
          <div style={{width: '100%', height: '100%', padding: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 50, display: 'inline-flex'}}>
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  width: 144,
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 20,
                  paddingBottom: 20,
                  background: activeTab === tab ? '#FF6A00' : 'white',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  color: activeTab === tab ? 'white' : '#66757A',
                  fontSize: 20,
                  fontFamily: 'Gilroy',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {tab}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-[1200px] mx-auto">
        <div ref={scrollContainerRef} className="flex space-x-4 pb-4 overflow-x-auto scrollbar-hide">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-shrink-0 h-[450px] relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              style={{ width: "calc((1200px - 2 * 16px) / 3)" }}
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
              <div
                className="absolute inset-0 p-4 flex flex-col gap-y-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(4, 4, 4, 0.28) 48.85%, rgba(0, 0, 0, 0.9) 91.41%)",
                }}
              >
                {/* Top Section */}
                <div className="flex justify-end items-start">
                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleLike(pkg.id)}
                    className="absolute top-4 right-4 w-16 h-16 bg-black/40 rounded-[15px] flex items-center justify-center hover:bg-black/60 transition-colors"
                    aria-label="Like package"
                  >
                    <Heart
                      className={`w-8 h-8 ${
                        likedPackages.includes(pkg.id) ? "text-white fill-current" : "text-white"
                      }`}
                    />
                  </button>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4 mt-auto">
                  {/* Spacer to push content down */}
                  <div className="h-10" />

                  {/* Duration Badge - NEW POSITION */}
                  <div className="bg-black/50 text-white px-3 text-sm font-gilroy font-medium backdrop-blur-sm w-fit rounded mb-0 py-1">
                    {pkg.duration}
                  </div>

                  {/* Title and Location */}
                  <div>
                    <h3 className="text-xl font-bold font-gilroy text-white leading-tight mb-px">{pkg.title}</h3>
                    <p className="text-white/80 text-sm font-gilroy">{pkg.location}</p>
                  </div>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 pt-0 mb-0">
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">{pkg.flights} Flights</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">{pkg.hotels} Hotels</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">{pkg.activities} Activities</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">{pkg.transfers} Transfers</span>
                    </div>
                  </div>

                  {/* Price and Book Button */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-baseline">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 36 37" 
                          fill="none"
                          style={{ width: '24px', height: '24px' }}
                        >
                          <path 
                            d="M27 7.84094H10.5H15C16.5913 7.84094 18.1174 8.47308 19.2426 9.5983C20.3679 10.7235 21 12.2496 21 13.8409C21 15.4322 20.3679 16.9584 19.2426 18.0836C18.1174 19.2088 16.5913 19.8409 15 19.8409H10.5L19.5 28.8409M10.5 13.8409H27" 
                            stroke="#F56600" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-2xl font-bold font-gilroy text-white ml-1">{pkg.price}</span>
                        <span className="text-sm ml-1 font-gilroy text-[rgba(230,226,195,1)]">Per Person</span>
                      </div>
                      <p className="text-xs font-gilroy text-[rgba(230,226,195,1)]">Includes taxes and fees</p>
                    </div>
                    <Button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-4 py-1.5 text-sm rounded-lg font-gilroy font-medium shadow-lg">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={scroll}
          className="absolute top-1/3 -right-4 transform -translate-y-1/2 bg-[#FF6A00] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
          aria-label="See more packages"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

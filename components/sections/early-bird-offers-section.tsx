"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight, Plane, Building2, Car, Mountain } from "lucide-react"

export function EarlyBirdOffersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420 // Width of a card + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-gilroy text-[#16242a] mb-4">Explore Our Early Bird Offers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-gilroy">
            Grab our early bird offer deals and enjoy your vacation with multiple benefits
          </p>
        </div>

        {/* Early Bird Offers Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 my-[-2rem]"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Shimla, Kullu, Manali Card */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/beach-birds-sunset.jpeg"
                  alt="Shimla, Kullu, Manali in Winters"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Image src="/images/iconamoon_discount-fill.png" alt="Discount" width={16} height={16} />
                  <span className="text-sm font-gilroy font-medium">Early Bird Offer</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                  <span className="text-sm font-gilroy font-medium">6N/7D</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold font-gilroy text-white mb-1">Shimla, Kullu, Manali in Winters</h3>
                  <p className="text-gray-200 mb-4 font-gilroy">Himachal Pradesh</p>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">2 Flights</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">11 Hotels</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">5 Activities</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">4 Transfers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold font-gilroy">
                      <span className="text-[#ff6b00]">₹</span> <span className="text-white">5,999</span>
                    </span>
                    <span className="text-gray-300 line-through font-gilroy text-sm">₹12,999</span>
                    <span className="text-gray-300 text-sm font-gilroy">Per Person</span>
                  </div>

                  <p className="text-gray-300 text-sm font-gilroy">Includes taxes</p>
                </div>
              </div>
            </div>

            {/* Desert Odyssey Card */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Summer Sale Banner */}
              <div className="absolute top-[-10px] left-[-10px] w-[128px] h-[121px] z-10">
                <Image src="/images/Vector 33.png" alt="Summer sale banner" layout="fill" />
                <span className="absolute top-[75px] left-[12px] transform -rotate-45 origin-top-left text-[#16242A] text-sm font-gilroy font-bold">
                  SUMMER SALE!
                </span>
              </div>

              <div className="h-[450px] bg-gray-100 relative rounded-2xl">
                <img
                  src="/images/desert-camels-dunes.jpeg"
                  alt="The Desert Odyssey - Camels crossing golden sand dunes"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Image src="/images/iconamoon_discount-fill.png" alt="Discount" width={16} height={16} />
                  <span className="text-sm font-gilroy font-medium">Early Bird Offer</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                  <span className="text-sm font-gilroy font-medium">6N/7D</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold font-gilroy text-white mb-1">The Desert Odyssey</h3>
                  <p className="text-gray-200 mb-4 font-gilroy">Rajasthan</p>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">2 Flights</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">11 Hotels</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">5 Activities</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">4 Transfers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold font-gilroy">
                      <span className="text-[#ff6b00]">₹</span> <span className="text-white">5,999</span>
                    </span>
                    <span className="text-gray-300 line-through font-gilroy text-sm">₹12,999</span>
                    <span className="text-gray-300 text-sm font-gilroy">Per Person</span>
                  </div>

                  <p className="text-gray-300 text-sm font-gilroy">Includes taxes</p>
                </div>
              </div>
            </div>

            {/* Coastal Paradise Card (moved from second set) */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/images/mountain-lake-paradise.jpeg"
                  alt="Coastal Paradise - Crystal clear mountain lake with turquoise water"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Image src="/images/iconamoon_discount-fill.png" alt="Discount" width={16} height={16} />
                  <span className="text-sm font-gilroy font-medium">Early Bird Offer</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                  <span className="text-sm font-gilroy font-medium">5N/6D</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold font-gilroy text-white mb-1">Coastal Paradise</h3>
                  <p className="text-gray-200 mb-4 font-gilroy">Goa</p>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">2 Flights</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">8 Hotels</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">4 Activities</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">3 Transfers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold font-gilroy">
                      <span className="text-[#ff6b00]">₹</span> <span className="text-white">4,999</span>
                    </span>
                    <span className="text-gray-300 line-through font-gilroy text-sm">₹10,999</span>
                    <span className="text-gray-300 text-sm font-gilroy">Per Person</span>
                  </div>

                  <p className="text-gray-300 text-sm font-gilroy">Includes taxes</p>
                </div>
              </div>
            </div>

            {/* Mountain Retreat Card (moved from second set) */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/images/snow-stupa-mountains.jpeg"
                  alt="Mountain Retreat - Buddhist stupa in snow-covered mountains"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Image src="/images/iconamoon_discount-fill.png" alt="Discount" width={16} height={16} />
                  <span className="text-sm font-gilroy font-medium">Early Bird Offer</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                  <span className="text-sm font-gilroy font-medium">7N/8D</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold font-gilroy text-white mb-1">Mountain Retreat</h3>
                  <p className="text-gray-200 mb-4 font-gilroy">Kashmir</p>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">2 Flights</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">12 Hotels</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">6 Activities</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">5 Transfers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold font-gilroy">
                      <span className="text-[#ff6b00]">₹</span> <span className="text-white">7,999</span>
                    </span>
                    <span className="text-gray-300 line-through font-gilroy text-sm">₹15,999</span>
                    <span className="text-gray-300 text-sm font-gilroy">Per Person</span>
                  </div>

                  <p className="text-gray-300 text-sm font-gilroy">Includes taxes</p>
                </div>
              </div>
            </div>

            {/* Tropical Island Escape Card (moved from third set) */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/images/tropical-beach-aerial.jpeg"
                  alt="Tropical Island Escape - Aerial view of pristine beach with turquoise waters and colorful boats"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Image src="/images/iconamoon_discount-fill.png" alt="Discount" width={16} height={16} />
                  <span className="text-sm font-gilroy font-medium">Early Bird Offer</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                  <span className="text-sm font-gilroy font-medium">5N/6D</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold font-gilroy text-white mb-1">Tropical Island Escape</h3>
                  <p className="text-gray-200 mb-4 font-gilroy">Andaman & Nicobar</p>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">2 Flights</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">7 Hotels</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">6 Activities</span>
                    </div>
                    <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                      <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                      <span className="text-xs font-gilroy text-gray-300">3 Transfers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold font-gilroy">
                      <span className="text-[#ff6b00]">₹</span> <span className="text-white">12,999</span>
                    </span>
                    <span className="text-gray-300 line-through font-gilroy text-sm">₹18,999</span>
                    <span className="text-gray-300 text-sm font-gilroy">Per Person</span>
                  </div>

                  <p className="text-gray-300 text-sm font-gilroy">Includes taxes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/3 -right-4 transform -translate-y-1/2 bg-[#FF6A00] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg z-10"
            aria-label="Next offers"
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
    </div>
  )
}

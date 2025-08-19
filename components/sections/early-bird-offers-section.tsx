"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plane, Building2, Car, Mountain, Percent } from "lucide-react" // Import Percent icon

export function EarlyBirdOffersSection() {
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0)
  const totalOfferSlides = 2 // Changed to 2 slides to accommodate 3 cards per row (3 + 2 cards)

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentOfferSlide((prev) => (prev + 1) % totalOfferSlides)
  }

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentOfferSlide((prev) => (prev - 1 + totalOfferSlides) % totalOfferSlides)
  }

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#16242a] mb-4">Explore Our Early Bird Offers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Grab our early bird offer deals and enjoy your vacation with multiple benefits
          </p>
        </div>

        {/* Early Bird Offers Carousel */}
        <div className="relative">
          {/* Navigation Arrow - Left */}
          {currentOfferSlide > 0 && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-10 z-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center hover:bg-[#e55a00] transition-colors duration-300 shadow-lg"
                aria-label="Previous offers"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>
          )}

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentOfferSlide * 100}%)` }}
            >
              {/* First set of cards (3 cards) */}
              <div className="flex gap-6 flex-shrink-0 w-full justify-center">
                {/* Shimla, Kullu, Manali Card */}
                <div className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="h-[450px] bg-gray-100 relative">
                    <img
                      src="/beach-birds-sunset.jpeg"
                      alt="Shimla, Kullu, Manali in Winters"
                      className="w-full h-full object-cover"
                    />

                    {/* Early Bird Badge */}
                    <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Percent className="w-4 h-4 text-white" /> {/* Replaced clock icon with Percent */}
                      </div>
                      <span className="text-sm font-medium">Early Bird Offer</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                      <span className="text-sm font-medium">6N/7D</span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">Shimla, Kullu, Manali in Winters</h3>
                      <p className="text-gray-200 mb-4">Himachal Pradesh</p>

                      {/* Package Details */}
                      <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">2 Flights</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">11 Hotels</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">5 Activities</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">4 Transfers</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold">
                          <span className="text-[#ff6b00]">₹</span> <span className="text-white">5,999</span>
                        </span>
                        <span className="text-gray-300 line-through text-sm">₹12,999</span>
                        <span className="text-gray-300 text-sm">Per Person</span>
                      </div>

                      <p className="text-gray-300 text-sm">Includes taxes</p>
                    </div>
                  </div>
                </div>

                {/* Desert Odyssey Card */}
                <div className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="h-[450px] bg-gray-100 relative">
                    <img
                      src="/images/desert-camels-dunes.jpeg"
                      alt="The Desert Odyssey - Camels crossing golden sand dunes"
                      className="w-full h-full object-cover"
                    />

                    {/* Early Bird Badge */}
                    <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Percent className="w-4 h-4 text-white" /> {/* Replaced clock icon with Percent */}
                      </div>
                      <span className="text-sm font-medium">Early Bird Offer</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                      <span className="text-sm font-medium">6N/7D</span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">The Desert Odyssey</h3>
                      <p className="text-gray-200 mb-4">Rajasthan</p>

                      {/* Package Details */}
                      <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">2 Flights</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">11 Hotels</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">5 Activities</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">4 Transfers</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold">
                          <span className="text-[#ff6b00]">₹</span> <span className="text-white">5,999</span>
                        </span>
                        <span className="text-gray-300 line-through text-sm">₹12,999</span>
                        <span className="text-gray-300 text-sm">Per Person</span>
                      </div>

                      <p className="text-gray-300 text-sm">Includes taxes</p>
                    </div>
                  </div>
                </div>

                {/* Coastal Paradise Card (moved from second set) */}
                <div className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="h-[450px] bg-gray-100 relative">
                    <img
                      src="/images/mountain-lake-paradise.jpeg"
                      alt="Coastal Paradise - Crystal clear mountain lake with turquoise water"
                      className="w-full h-full object-cover"
                    />

                    {/* Early Bird Badge */}
                    <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Percent className="w-4 h-4 text-white" /> {/* Replaced clock icon with Percent */}
                      </div>
                      <span className="text-sm font-medium">Early Bird Offer</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                      <span className="text-sm font-medium">5N/6D</span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">Coastal Paradise</h3>
                      <p className="text-gray-200 mb-4">Goa</p>

                      {/* Package Details */}
                      <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">2 Flights</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">8 Hotels</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">4 Activities</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">3 Transfers</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold">
                          <span className="text-[#ff6b00]">₹</span> <span className="text-white">4,999</span>
                        </span>
                        <span className="text-gray-300 line-through text-sm">₹10,999</span>
                        <span className="text-gray-300 text-sm">Per Person</span>
                      </div>

                      <p className="text-gray-300 text-sm">Includes taxes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second set of cards (2 cards) */}
              <div className="flex gap-6 flex-shrink-0 w-full justify-center">
                {/* Mountain Retreat Card (moved from second set) */}
                <div className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="h-[450px] bg-gray-100 relative">
                    <img
                      src="/images/snow-stupa-mountains.jpeg"
                      alt="Mountain Retreat - Buddhist stupa in snow-covered mountains"
                      className="w-full h-full object-cover"
                    />

                    {/* Early Bird Badge */}
                    <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Percent className="w-4 h-4 text-white" /> {/* Replaced clock icon with Percent */}
                      </div>
                      <span className="text-sm font-medium">Early Bird Offer</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                      <span className="text-sm font-medium">7N/8D</span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">Mountain Retreat</h3>
                      <p className="text-gray-200 mb-4">Kashmir</p>

                      {/* Package Details */}
                      <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">2 Flights</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">12 Hotels</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">6 Activities</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">5 Transfers</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold">
                          <span className="text-[#ff6b00]">₹</span> <span className="text-white">7,999</span>
                        </span>
                        <span className="text-gray-300 line-through text-sm">₹15,999</span>
                        <span className="text-gray-300 text-sm">Per Person</span>
                      </div>

                      <p className="text-gray-300 text-sm">Includes taxes</p>
                    </div>
                  </div>
                </div>

                {/* Tropical Island Escape Card (moved from third set) */}
                <div className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="h-[450px] bg-gray-100 relative">
                    <img
                      src="/images/tropical-beach-aerial.jpeg"
                      alt="Tropical Island Escape - Aerial view of pristine beach with turquoise waters and colorful boats"
                      className="w-full h-full object-cover"
                    />

                    {/* Early Bird Badge */}
                    <div className="absolute top-4 right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Percent className="w-4 h-4 text-white" /> {/* Replaced clock icon with Percent */}
                      </div>
                      <span className="text-sm font-medium">Early Bird Offer</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-1/3 left-4 bg-black/70 text-white px-3 py-1 rounded-md">
                      <span className="text-sm font-medium">5N/6D</span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">Tropical Island Escape</h3>
                      <p className="text-gray-200 mb-4">Andaman & Nicobar</p>

                      {/* Package Details */}
                      <div className="grid grid-cols-4 gap-2 mb-4 border-t border-gray-600 pt-4">
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Plane className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">2 Flights</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Building2 className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">7 Hotels</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Mountain className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">6 Activities</span>
                        </div>
                        <div className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md">
                          <Car className="w-5 h-5 text-[#ff6b00] mb-1" />
                          <span className="text-xs text-gray-300">3 Transfers</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold">
                          <span className="text-[#ff6b00]">₹</span> <span className="text-white">12,999</span>
                        </span>
                        <span className="text-gray-300 line-through text-sm">₹18,999</span>
                        <span className="text-gray-300 text-sm">Per Person</span>
                      </div>

                      <p className="text-gray-300 text-sm">Includes taxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center hover:bg-[#e55a00] transition-colors duration-300 shadow-lg"
              aria-label="Next offers"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalOfferSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentOfferSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentOfferSlide === index ? "bg-[#ff6b00]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#ff6b00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-md font-medium transition-colors text-lg">
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}

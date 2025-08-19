"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, Calendar, Plane, Building2, Car, Clock, Activity } from "lucide-react"

export function ExclusiveDealsSection() {
  const [activeTab, setActiveTab] = useState("Deals")
  const router = useRouter()

  const handleAllOffersClick = () => {
    router.push("/offers")
  }

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Exclusive Deals & Offers</h2>

          {/* Navigation Tabs - Updated to match reference design */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                className="px-6 py-3 bg-[#fff3e8] text-[#ff6a00] rounded-full font-medium cursor-pointer transition-colors hover:bg-[#ffe4d1]"
                onClick={() => setActiveTab("Deals")}
              >
                Deals
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={handleAllOffersClick}
              >
                All Offers
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => setActiveTab("Hotels")}
              >
                Hotels
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => {
                  console.log("Navigating to Packages page...")
                  router.push("/packages")
                }}
              >
                Packages
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => setActiveTab("Cruise")}
              >
                Cruise
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => setActiveTab("Cabs")}
              >
                Cabs
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => setActiveTab("Activities")}
              >
                Activities
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => setActiveTab("Community Trips")}
              >
                Community Trips
              </button>
              <button
                className="px-6 py-3 text-gray-700 hover:text-[#ff6a00] hover:bg-gray-50 rounded-full font-medium cursor-pointer transition-colors"
                onClick={() => setActiveTab("Trekking")}
              >
                Trekking
              </button>
            </div>
          </div>
        </div>

        {/* Deal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hotel Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-[400px] cursor-pointer hover:shadow-xl transition-shadow">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src="/hotel-room.jpeg" alt="Luxury Hotel Room Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Timer Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#ff6a00] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Ends in 11h : 32m : 45s</span>
            </div>

            {/* Category Badge */}
            <div className="absolute top-20 left-4 bg-black/70 text-white px-3 py-1 rounded-full">
              <span className="text-sm font-medium">Hotel</span>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-1">
                <Building2 className="w-7 h-7 text-white" strokeWidth={2} />
                <h3 className="text-xl font-bold">Lemon Tree Hotel</h3>
              </div>
              <p className="text-gray-200 mb-4">New Delhi</p>

              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center text-white text-2xl font-bold">₹ 5,999</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 line-through text-sm">₹12,999</span>
                  <span className="text-gray-200 text-sm">Per Person</span>
                </div>
              </div>

              <p className="text-gray-200 text-sm">Includes taxes</p>
            </div>
          </div>

          {/* Package Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-[400px] cursor-pointer hover:shadow-xl transition-shadow">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src="/mountain-landscape.jpeg"
                alt="Traditional Mountain Architecture in Himachal Pradesh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Timer Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#ff6a00] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Ends in 11h : 32m : 45s</span>
            </div>

            {/* Category Badges */}
            <div className="absolute top-20 left-4 flex gap-2">
              <div className="bg-black/70 text-white px-3 py-1 rounded-full">
                <span className="text-sm font-medium">Package</span>
              </div>
              <div className="bg-black/70 text-white px-3 py-1 rounded-full">
                <span className="text-sm font-medium">6N/7D</span>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Shimla, Kullu & Manali</h3>
              <p className="text-gray-200 mb-4">Manali</p>

              {/* Package Details */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-200 mb-4">
                <div className="flex items-center gap-1 flex-col bg-black/70 px-2 py-0.5 rounded-md">
                  {" "}
                  {/* Added flex-col for vertical stacking */}
                  <Plane className="w-4 h-4 text-[#ff6a00]" /> {/* Plane icon */}
                  <span className="text-white">2 Flights</span>
                </div>
                <div className="flex items-center gap-1 flex-col bg-black/70 px-2 py-0.5 rounded-md">
                  <Building2 className="w-4 h-4 text-[#ff6a00]" />
                  <span className="text-white">11 Hotels</span>
                </div>
                <div className="flex items-center gap-1 flex-col bg-black/70 px-2 py-0.5 rounded-md">
                  <Activity className="w-4 h-4 text-[#ff6a00]" />
                  <span className="text-white">5 Activities</span>
                </div>
                <div className="flex items-center gap-1 flex-col bg-black/70 px-2 py-0.5 rounded-md">
                  <Car className="w-4 h-4 text-[#ff6a00]" />
                  <span className="text-white">4 Transfers</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center text-white text-2xl font-bold">₹ 10,999</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 line-through text-sm">₹12,999</span>
                  <span className="text-gray-200 text-sm">Per Person</span>
                </div>
              </div>

              <p className="text-gray-200 text-sm">Includes taxes</p>
            </div>
          </div>

          {/* Cruise Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-[400px] cursor-pointer hover:shadow-xl transition-shadow">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src="/cruise-ship.jpeg" alt="Luxury Cruise Ship at Sunset" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Timer Badge */}
            <div className="absolute top-4 right-4 z-10 bg-[#ff6a00] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Ends in 11h : 32m : 45s</span>
            </div>

            {/* Category Badges */}
            <div className="absolute top-20 left-4 flex gap-2">
              <div className="bg-black/70 text-white px-3 py-1 rounded-full">
                <span className="text-sm font-medium">Cruise</span>
              </div>
              <div className="bg-black/70 text-white px-3 py-1 rounded-full">
                <span className="text-sm font-medium">6N/7D</span>
              </div>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#ff6a00] rounded-full flex items-center justify-center">
              <ChevronDown className="w-6 h-6 text-white rotate-[-90deg]" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Cordelia Cruise | Chennai - Chennai</h3>
              <p className="text-gray-200 mb-2">Chennai</p>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-gray-200" />
                <span className="text-gray-200 text-sm">16 October 2023</span>
              </div>

              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center text-white text-2xl font-bold">₹ 10,999</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 line-through text-sm">₹12,999</span>
                  <span className="text-gray-200 text-sm">Per Person</span>
                </div>
              </div>

              <p className="text-gray-200 text-sm">Includes taxes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

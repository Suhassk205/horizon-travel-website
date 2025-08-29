"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Calendar,
  Plane,
  Car,
  Mountain,
  Train,
  Bus,
  Package,
  User,
  Bell,
  ArrowLeftRight,
  Ship,
  Building2,
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"

// Exclusive Deals Section Component
function ExclusiveDealsSection() {
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
            <div className="flex flex-wrap items-center">
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
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Timer Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#ff6a00] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Ends in 11h : 32m : 45s</span>
            </div>

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-top">
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
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Timer Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#ff6a00] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
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
              <div className="flex justify-between text-xs text-gray-200 mb-4">
                <div className="flex items-center gap-1">
                  <Plane className="w-4 h-4 text-[#ff6a00]" />
                  <span>2 Flights</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>11 Hotels</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mountain className="w-4 h-4 text-[#ff6a00]" />
                  <span>5 Activities</span>
                </div>
                <div className="flex items-center gap-1">
                  <Car className="w-4 h-4 text-[#ff6a00]" />
                  <span>4 Transfers</span>
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
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Timer Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#ff6a00] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
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

export function NewDashboardHomepage() {
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [addFlight, setAddFlight] = useState(false)
  const [addCab, setAddCab] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Packages")

  // Flight-specific state
  const [flightType, setFlightType] = useState("One Way")
  const [regularFares, setRegularFares] = useState(false)
  const [armedForcesFares, setArmedForcesFares] = useState(false)
  const [studentFares, setStudentFares] = useState(false)
  const [seniorCitizenFares, setSeniorCitizenFares] = useState(false)
  const [doctorNursesFares, setDoctorNursesFares] = useState(false)

  const router = useRouter()

  // Animation state for cycling text
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const heroTexts = ["DISCOVER", "EXPLORE", "TRAVEL"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Render the appropriate search form based on the active category
  const renderSearchForm = () => {
    switch (activeCategory) {
      case "Hotels":
        return (
          <>
            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Hotel Search Input */}
              <div className="flex-1 flex flex-col bg-white rounded px-4 py-3 min-h-[54px]">
                <input
                  type="text"
                  placeholder="Search Your Desired Hotels"
                  className="w-full text-sm text-gray-800 bg-transparent border-none outline-none focus:ring-0"
                />
              </div>

              {/* Check-In */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Check-In</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Check-Out */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Check-Out</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travellers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travellers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">2 Travellers, 1 Room</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>

            {/* Additional Options */}
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="add-flight-hotel"
                  checked={addFlight}
                  onCheckedChange={(checked) => setAddFlight(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="add-flight-hotel" className="text-sm font-medium text-white cursor-pointer">
                  Add a flight
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="add-cab-hotel"
                  checked={addCab}
                  onCheckedChange={(checked) => setAddCab(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="add-cab-hotel" className="text-sm font-medium text-white cursor-pointer">
                  Add a cab
                </label>
              </div>
            </div>
          </>
        )
      case "Cabs":
        return (
          <>
            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Pickup */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Pickup</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select Pickup</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Drop-Off */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Drop-Off</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Same as Pickup</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Pickup Date */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Pickup Date</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Drop-Off Date */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Drop-Off Date</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Pickup Time */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Pickup Time</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">HH : MM AM</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Drop-Off Time */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Drop-Off Time</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">HH : MM AM</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travelers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">1 Traveler</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>

            {/* Cab Service Options */}
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="intercity-travel"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="intercity-travel" className="text-sm font-medium text-white cursor-pointer">
                  Intercity Travel
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="hourly-rentals"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="hourly-rentals" className="text-sm font-medium text-white cursor-pointer">
                  Hourly Rentals
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="outstation-trip"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="outstation-trip" className="text-sm font-medium text-white cursor-pointer">
                  Outstation Trip
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="airport-transport"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="airport-transport" className="text-sm font-medium text-white cursor-pointer">
                  Airport Transport
                </label>
              </div>
            </div>
          </>
        )
      case "Activities":
        return (
          <>
            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Activity Search Input */}
              <div className="flex-1 flex flex-col bg-white rounded px-4 py-3 min-h-[54px]">
                <input
                  type="text"
                  placeholder="Search your desired activity"
                  className="w-full text-sm text-gray-800 bg-transparent border-none outline-none focus:ring-0"
                />
              </div>

              {/* Travellers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travellers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">2 Travellers</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>
          </>
        )
      case "Trains":
        return (
          <>
            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Leaving From */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px] relative">
                <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select leaving Location</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Train Direction Icon */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <ArrowLeftRight size={14} className="text-white" />
                </div>
              </div>

              {/* Destination */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Destination</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select Destination</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Departure */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Departure</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Class */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Class</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Sleeper</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travelers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">1 Traveler</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>
          </>
        )
      case "Buses":
        return (
          <>
            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Leaving From */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px] relative">
                <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select leaving Location</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Bus Direction Icon */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Bus size={14} className="text-white" />
                </div>
              </div>

              {/* Destination */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Destination</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select Destination</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Departure */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Departure</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travellers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travellers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">2 Travellers</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>
          </>
        )
      case "Flights":
        return (
          <>
            {/* Flight Type Selection */}
            <div className="mb-4 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="one-way"
                  checked={flightType === "One Way"}
                  onCheckedChange={(checked) => checked && setFlightType("One Way")}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="one-way" className="text-sm font-medium text-white cursor-pointer">
                  One Way
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="round-trip"
                  checked={flightType === "Round Trip"}
                  onCheckedChange={(checked) => checked && setFlightType("Round Trip")}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="round-trip" className="text-sm font-medium text-white cursor-pointer">
                  Round Trip
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="multi-city"
                  checked={flightType === "Multi-City"}
                  onCheckedChange={(checked) => checked && setFlightType("Multi-City")}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="multi-city" className="text-sm font-medium text-white cursor-pointer">
                  Multi-City
                </label>
              </div>
            </div>

            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Leaving From */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px] relative">
                <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select leaving Location</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Flight Direction Icon */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Plane size={14} className="text-white" />
                </div>
              </div>

              {/* Going To */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Going To</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select Destination</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Depart */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Depart</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">24-06</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travelers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">1 Traveler</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Class Type */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Class Type</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Economy</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>

            {/* Fare Type Options */}
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="regular-fares"
                  checked={regularFares}
                  onCheckedChange={(checked) => setRegularFares(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="regular-fares" className="text-sm font-medium text-white cursor-pointer">
                  Regular Fares
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="armed-forces-fares"
                  checked={armedForcesFares}
                  onCheckedChange={(checked) => setArmedForcesFares(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="armed-forces-fares" className="text-sm font-medium text-white cursor-pointer">
                  Armed Forces Fares
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="student-fares"
                  checked={studentFares}
                  onCheckedChange={(checked) => setStudentFares(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="student-fares" className="text-sm font-medium text-white cursor-pointer">
                  Student Fares
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="senior-citizen-fares"
                  checked={seniorCitizenFares}
                  onCheckedChange={(checked) => setSeniorCitizenFares(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="senior-citizen-fares" className="text-sm font-medium text-white cursor-pointer">
                  Senior Citizen Fares
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="doctor-nurses-fares"
                  checked={doctorNursesFares}
                  onCheckedChange={(checked) => setDoctorNursesFares(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="doctor-nurses-fares" className="text-sm font-medium text-white cursor-pointer">
                  Doctor & Nurses Fares
                </label>
              </div>
            </div>
          </>
        )
      case "Cruise":
        return (
          <>
            <div
              className="flex flex-col lg:flex-row p-3 gap-3"
              style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}
            >
              {/* Leaving From */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px] relative">
                <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select leaving Location</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Destination */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Destination</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select Destination</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Month */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Month</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">Select Travel Month</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travelers */}
              <div className="w-full lg:w-auto flex flex-col bg-white rounded px-3 py-2 min-h-[54px]">
                <label className="text-xs text-gray-500 mb-1">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">2 Traveler, 1 Cabin</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors px-8">
                <span className="text-sm">Search</span>
              </div>
            </div>
          </>
        )
      default:
        // Default Packages search form
        return (
          <>
            <div className="flex p-3 gap-1" style={{ background: "#CEDDE7", borderRadius: "0px 0px 8px 8px" }}>
              {/* Leaving From */}
              <div className="flex flex-col bg-white rounded px-3 py-2" style={{ width: "194px", height: "54px" }}>
                <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800 truncate">Select leaving Location</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Destination */}
              <div className="flex flex-col bg-white rounded px-3 py-2" style={{ width: "164px", height: "54px" }}>
                <label className="text-xs text-gray-500 mb-1">Destination</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800 truncate">Select Destination</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Theme */}
              <div className="flex flex-col bg-white rounded px-3 py-2" style={{ width: "154px", height: "54px" }}>
                <label className="text-xs text-gray-500 mb-1">Theme</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800 truncate">Solo Travel</span>
                  <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* From Date */}
              <div className="flex flex-col bg-white rounded px-3 py-2" style={{ width: "114px", height: "54px" }}>
                <label className="text-xs text-gray-500 mb-1">From</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* To Date */}
              <div className="flex flex-col bg-white rounded px-3 py-2" style={{ width: "114px", height: "54px" }}>
                <label className="text-xs text-gray-500 mb-1">To</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-800">DD-MM</span>
                  <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                </div>
              </div>

              {/* Travelers */}
              <div className="flex flex-col bg-white rounded px-3 py-2" style={{ width: "154px", height: "54px" }}>
                <label className="text-xs text-gray-500 mb-1">Travelers</label>
                <span className="text-xs text-gray-800">2 Traveler, 1 Room</span>
              </div>

              {/* Search Button */}
              <div
                className="flex items-center justify-center bg-[#29383E] rounded text-white font-medium cursor-pointer hover:bg-[#1f2b30] transition-colors"
                style={{ width: "134px", height: "54px" }}
              >
                <span className="text-sm">Search</span>
              </div>
            </div>

            {/* Add a flight checkbox */}
            <div className="mt-4 flex justify-start">
              <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                <Checkbox
                  id="add-flight"
                  checked={addFlight}
                  onCheckedChange={(checked) => setAddFlight(!!checked)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                />
                <label htmlFor="add-flight" className="text-sm font-medium text-white cursor-pointer">
                  Add a flight
                </label>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div>
      {/* Main Travel Booking Interface */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/winter-mountain-landscape.jpg"
            alt="Winter mountain landscape"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/00"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="flex items-center px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-5 h-5 relative">
                  {/* Compass icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-black rounded-full relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-black text-lg tracking-wide">Horizon</span>
            </div>

            <div className="flex items-center space-x-8 ml-16">
              <div className="flex items-center space-x-1 text-black cursor-pointer hover:text-gray-600 transition-colors">
                <span className="font-medium">Destination</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-black cursor-pointer hover:text-gray-600 transition-colors">
                <span className="font-medium">Explore Extraordinary</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-black cursor-pointer hover:text-gray-600 transition-colors">
                <span className="font-medium">Offers</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-black cursor-pointer hover:text-gray-600 transition-colors font-medium">
                Support
              </span>
              <span className="text-black cursor-pointer hover:text-gray-600 transition-colors font-medium">
                Review & Ratings
              </span>
            </div>
            <div className="ml-auto mr-8 flex items-center space-x-4">
              {/* User Profile Icon */}
              <button
                onClick={() => router.push("/auth")}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4 text-white" />
              </button>

              {/* Notification Bell Icon */}
              <button className="relative w-8 h-8 flex items-center justify-center hover:bg-black/10 rounded-full transition-colors cursor-pointer">
                <Bell className="w-5 h-5 text-gray-800" />
                {/* Orange notification dot */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border border-white"></span>
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center px-6 py-20">
            <h2 className="text-white text-lg md:text-xl font-normal mb-8 text-center tracking-wide">
              One Adventure At A Time
            </h2>
            
            {/* Hero Text */}
            <div className="w-full flex justify-center items-center" style={{ height: '400px' }}>
              <h1
                className={`text-white font-bold text-[400px] leading-none transition-opacity duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {heroTexts[currentTextIndex]}
              </h1>
            </div>

            {/* Combined Travel Categories and Search Form */}
            <div className="flex flex-col w-full max-w-6xl">
              {/* Travel Categories Row - Small gaps between items */}
              <div className="flex gap-1 overflow-x-auto">
                {/* Packages */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => router.push("/packages")}
                  style={{
                    background: activeCategory === "Packages" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Package
                      className={activeCategory === "Packages" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-medium ${activeCategory === "Packages" ? "text-black" : "text-white"}`}
                    >
                      Packages
                    </span>
                  </div>
                </div>

                {/* Hotels */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Hotels")}
                  style={{
                    background: activeCategory === "Hotels" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Building2
                      className={activeCategory === "Hotels" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-medium ${activeCategory === "Hotels" ? "text-black" : "text-white"}`}
                    >
                      Hotels
                    </span>
                  </div>
                </div>

                {/* Cabs */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Cabs")}
                  style={{
                    background: activeCategory === "Cabs" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Car
                      className={activeCategory === "Cabs" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span className={`text-sm font-medium ${activeCategory === "Cabs" ? "text-black" : "text-white"}`}>
                      Cabs
                    </span>
                  </div>
                </div>

                {/* Activities */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Activities")}
                  style={{
                    background: activeCategory === "Activities" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Mountain
                      className={activeCategory === "Activities" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-medium ${activeCategory === "Activities" ? "text-black" : "text-white"}`}
                    >
                      Activities
                    </span>
                  </div>
                </div>

                {/* Trains */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Trains")}
                  style={{
                    background: activeCategory === "Trains" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Train
                      className={activeCategory === "Trains" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-medium ${activeCategory === "Trains" ? "text-black" : "text-white"}`}
                    >
                      Trains
                    </span>
                  </div>
                </div>

                {/* Buses */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Buses")}
                  style={{
                    background: activeCategory === "Buses" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Bus
                      className={activeCategory === "Buses" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span className={`text-sm font-medium ${activeCategory === "Buses" ? "text-black" : "text-white"}`}>
                      Buses
                    </span>
                  </div>
                </div>

                {/* Flights */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Flights")}
                  style={{
                    background: activeCategory === "Flights" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Plane
                      className={activeCategory === "Flights" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-medium ${activeCategory === "Flights" ? "text-black" : "text-white"}`}
                    >
                      Flights
                    </span>
                  </div>
                </div>

                {/* Cruise */}
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveCategory("Cruise")}
                  style={{
                    background: activeCategory === "Cruise" ? "#CEDDE7" : "rgba(1, 1, 1, 0.6)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Ship
                      className={activeCategory === "Cruise" ? "text-black" : "text-white"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-medium ${activeCategory === "Cruise" ? "text-black" : "text-white"}`}
                    >
                      Cruise
                    </span>
                  </div>
                </div>
              </div>

              {/* Render the appropriate search form based on active category */}
              {renderSearchForm()}
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Exclusive Deals Section */}
      <ExclusiveDealsSection />
    </div>
  )
}

export default NewDashboardHomepage

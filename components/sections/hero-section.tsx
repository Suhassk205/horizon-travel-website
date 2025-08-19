"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Calendar, Plane, Car, Mountain, Train, Bus, Package, Ship } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [addFlight, setAddFlight] = useState(false)
  const [addCab, setAddCab] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Packages")

  const router = useRouter()

  // Animation state for cycling text
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [heroSectionLoaded, setHeroSectionLoaded] = useState(false) // New state for hero section fade-in

  const heroTexts = ["DISCOVER", "EXPLORE", "TRAVEL"]

  useEffect(() => {
    // Set hero section to visible after component mounts
    setHeroSectionLoaded(true)

    const interval = setInterval(() => {
      // Start fade out for cycling text
      setIsVisible(false)

      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
        setIsVisible(true)
      }, 500) // 500ms for fade out duration
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSearch = () => {
    console.log("Search button clicked!")
    // You can log specific form values here if you set up state for each input.
    // For example: console.log({ fromDate, toDate, activeCategory, addFlight, addCab, /* other form values */ });
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/winter-landscape.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-5 h-5 relative">
                <img src="/images/horizon-logo1.jpeg" alt="Horizon Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-[#000000] font-semibold text-lg tracking-wide">Horizon</span>
          </div>

          <div className="flex items-center space-x-8 ml-16">
            <div className="flex items-center space-x-1 text-[#000000] cursor-pointer hover:text-[#626262] transition-colors">
              <span className="font-medium">Destination</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-[#000000] cursor-pointer hover:text-[#626262] transition-colors">
              <span className="font-medium">Explore Extraordinary</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-[#000000] cursor-pointer hover:text-[#626262] transition-colors">
              <span className="font-medium">Offers</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-[#000000] cursor-pointer hover:text-[#626262] transition-colors font-medium">
              Support
            </span>
            <span className="text-[#000000] cursor-pointer hover:text-[#626262] transition-colors font-medium">
              Review & Ratings
            </span>
          </div>
          <div className="ml-auto flex items-center space-x-3">
            <Button
              onClick={() => router.push("/auth/signup")}
              className="bg-[#29383E] hover:bg-[#1f2b30] text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Signup
            </Button>
            <Button
              onClick={() => router.push("/auth")}
              className="bg-white/20 hover:bg-white/30 text-[#000000] px-6 py-2 rounded-lg font-medium text-sm transition-colors backdrop-blur-sm border border-white/30"
            >
              Login
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div
          className={`flex flex-col items-center justify-center px-6 py-20 transition-opacity duration-1000 ease-in ${
            heroSectionLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-white text-lg md:text-xl font-normal mb-8 text-center tracking-wide">
            One Adventure At A Time
          </h2>
          <h1
            className={`text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-center mb-16 leading-none transition-opacity duration-500 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {heroTexts[currentTextIndex]}
          </h1>

          {/* Combined Travel Categories and Search Form */}
          <div className="flex flex-col">
            {/* Travel Categories Row - Small gaps between items */}
            <div className="grid grid-cols-8">
              {/* Packages */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Packages")}
                style={{
                  background: activeCategory === "Packages" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Packages" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Packages" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Package
                    className={`${activeCategory === "Packages" ? "text-black" : "text-white"} transition-colors duration-300 ease-in-out`}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-sm font-medium ${activeCategory === "Packages" ? "text-black" : "text-white"} transition-colors duration-300 ease-in-out`}
                  >
                    Packages
                  </span>
                </div>
              </div>

              {/* Hotels */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Hotels")}
                style={{
                  background: activeCategory === "Hotels" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Hotels" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Hotels" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center justify-center">
                  <span
                    className={`text-sm font-medium ${activeCategory === "Hotels" ? "text-black" : "text-white"} transition-colors duration-300 ease-in-out`}
                  >
                    Hotels
                  </span>
                </div>
              </div>

              {/* Cabs */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Cabs")}
                style={{
                  background: activeCategory === "Cabs" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Cabs" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Cabs" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Car
                    className={`
                      ${activeCategory === "Cabs" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`
                      text-sm font-medium
                      ${activeCategory === "Cabs" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                  >
                    Cabs
                  </span>
                </div>
              </div>

              {/* Activities */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Activities")}
                style={{
                  background: activeCategory === "Activities" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Activities" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Activities" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Mountain
                    className={`
                      ${activeCategory === "Activities" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`
                      text-sm font-medium
                      ${activeCategory === "Activities" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                  >
                    Activities
                  </span>
                </div>
              </div>

              {/* Trains */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Trains")}
                style={{
                  background: activeCategory === "Trains" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Trains" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Trains" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Train
                    className={`
                      ${activeCategory === "Trains" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`
                      text-sm font-medium
                      ${activeCategory === "Trains" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                  >
                    Trains
                  </span>
                </div>
              </div>

              {/* Buses */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Buses")}
                style={{
                  background: activeCategory === "Buses" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Buses" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Buses" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Bus
                    className={`
                      ${activeCategory === "Buses" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`
                      text-sm font-medium
                      ${activeCategory === "Buses" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                  >
                    Buses
                  </span>
                </div>
              </div>

              {/* Flights */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Flights")}
                style={{
                  background: activeCategory === "Flights" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Flights" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Flights" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Plane
                    className={`
                      ${activeCategory === "Flights" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`
                      text-sm font-medium
                      ${activeCategory === "Flights" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                  >
                    Flights
                  </span>
                </div>
              </div>

              {/* Cruise */}
              <div
                className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setActiveCategory("Cruise")}
                style={{
                  background: activeCategory === "Cruise" ? "#CEDDE7" : "#29383E",
                  boxShadow: activeCategory === "Cruise" ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                  borderRadius: activeCategory === "Cruise" ? "8px 8px 0px 0px" : "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                  height: "54px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Ship
                    className={`
                      ${activeCategory === "Cruise" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`
                      text-sm font-medium
                      ${activeCategory === "Cruise" ? "text-black" : "text-white"}
                      transition-colors duration-300 ease-in-out
                    `}
                  >
                    Cruise
                  </span>
                </div>
              </div>
            </div>

            {/* Search Form Row - Directly connected below */}
            <div className="bg-[#D7E6F0] rounded-b-lg shadow-xl p-4 md:p-6">
              {activeCategory === "Hotels" ? (
                <div className="flex p-3 gap-1">
                  {/* Search Your Desired Hotels */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "300px" }}>
                    <label className="text-xs text-gray-500 mb-1">Search Your Desired Hotels</label>
                    <input type="text" placeholder="Enter hotel name" className="text-xs text-gray-800 outline-none" />
                  </div>

                  {/* Check-In */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "150px" }}>
                    <label className="text-xs text-gray-500 mb-1">Check-In</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">DD-MM</span>
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Check-Out */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "150px" }}>
                    <label className="text-xs text-gray-500 mb-1">Check-Out</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">DD-MM</span>
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "200px" }}>
                    <label className="text-xs text-gray-500 mb-1">Travellers</label>
                    <span className="text-xs text-gray-800">2 Traveler, 1 Room</span>
                  </div>

                  {/* Search Button */}
                  <div
                    className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                    style={{ width: "134px", height: "54px" }}
                    onClick={handleSearch}
                  >
                    <span className="text-sm">Search</span>
                  </div>
                </div>
              ) : activeCategory === "Cabs" ? (
                <div className="flex flex-col">
                  <div className="flex p-3 gap-1">
                    {/* Pickup */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "180px" }}>
                      <label className="text-xs text-gray-500 mb-1">Pickup</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800 truncate">Select Pickup</span>
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Drop-Off */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "180px" }}>
                      <label className="text-xs text-gray-500 mb-1">Drop-Off</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800 truncate">Same as Pickup</span>
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Pickup Date */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "130px" }}>
                      <label className="text-xs text-gray-500 mb-1">Pickup Date</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">DD-MM</span>
                        <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Drop-Off Date */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "130px" }}>
                      <label className="text-xs text-gray-500 mb-1">Drop-Off Date</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">DD-MM</span>
                        <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Pickup Time */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "130px" }}>
                      <label className="text-xs text-gray-500 mb-1">Pickup Time</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">HH : MM AM</span>
                        <ChevronDown size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Drop-Off Time */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "130px" }}>
                      <label className="text-xs text-gray-500 mb-1">Drop-Off Time</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">HH : MM AM</span>
                        <ChevronDown size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "120px" }}>
                      <label className="text-xs text-gray-500 mb-1">Travelers</label>
                      <span className="text-xs text-gray-800">1 Traveler</span>
                    </div>

                    {/* Search Button */}
                    <div
                      className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                      style={{ width: "134px", height: "54px" }}
                      onClick={handleSearch}
                    >
                      <span className="text-sm">Search</span>
                    </div>
                  </div>
                </div>
              ) : activeCategory === "Activities" ? (
                <div className="flex p-3 gap-1">
                  {/* Search Your Desired Activity */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "700px" }}>
                    <label className="text-xs text-gray-500 mb-1">Search your desired activity</label>
                    <input
                      type="text"
                      placeholder="Enter activity name"
                      className="text-xs text-gray-800 outline-none"
                    />
                  </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "200px" }}>
                    <label className="text-xs text-gray-500 mb-1">Travellers</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">2 Travellers</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div
                    className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                    style={{ width: "134px", height: "54px" }}
                    onClick={handleSearch}
                  >
                    <span className="text-sm">Search</span>
                  </div>
                </div>
              ) : activeCategory === "Buses" ? (
                <div className="flex p-3 gap-1">
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "250px" }}>
                    <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Select leaving Location</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Swap Icon */}
                  <div className="flex items-center justify-center" style={{ width: "40px", height: "54px" }}>
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 16L17 16M17 16L13 12M17 16L13 20M17 8L7 8M7 8L11 4M7 8L11 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "250px" }}>
                    <label className="text-xs text-gray-500 mb-1">Destination</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Select Destination</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Departure */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "150px" }}>
                    <label className="text-xs text-gray-500 mb-1">Departure</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">DD-MM</span>
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "150px" }}>
                    <label className="text-xs text-gray-500 mb-1">Travellers</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">2 Travellers</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div
                    className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                    style={{ width: "134px", height: "54px" }}
                    onClick={handleSearch}
                  >
                    <span className="text-sm">Search</span>
                  </div>
                </div>
              ) : activeCategory === "Cruise" ? (
                <div className="flex p-3 gap-1">
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "250px" }}>
                    <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Select leaving Location</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "250px" }}>
                    <label className="text-xs text-gray-500 mb-1">Destination</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Select Destination</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Month */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "200px" }}>
                    <label className="text-xs text-gray-500 mb-1">Month</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">Select Travel Month</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "200px" }}>
                    <label className="text-xs text-gray-500 mb-1">Travelers</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">2 Traveler, 1 Cabin</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div
                    className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                    style={{ width: "134px", height: "54px" }}
                    onClick={handleSearch}
                  >
                    <span className="text-sm">Search</span>
                  </div>
                </div>
              ) : activeCategory === "Flights" ? (
                <div className="flex flex-col">
                  {/* Flight Type Options */}
                  <div className="flex justify-start space-x-6 mb-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="one-way"
                        defaultChecked
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="one-way" className="text-sm font-medium text-white cursor-pointer">
                        One Way
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="round-trip"
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="round-trip" className="text-sm font-medium text-white cursor-pointer">
                        Round Trip
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="multi-city"
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="multi-city" className="text-sm font-medium text-white cursor-pointer">
                        Multi City
                      </label>
                    </div>
                  </div>

                  {/* Main Search Form */}
                  <div className="flex p-3 gap-1">
                    {/* Leaving From */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "150px" }}>
                      <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800 truncate">Select leaving Location</span>
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Swap Icon */}
                    <div className="flex items-center justify-center" style={{ width: "40px", height: "54px" }}>
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7 16L17 16M17 16L13 12M17 16L13 20M17 8L7 8M7 8L11 4M7 8L11 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Going To */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "150px" }}>
                      <label className="text-xs text-gray-500 mb-1">Going To</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800 truncate">Select Destination</span>
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Depart */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "100px" }}>
                      <label className="text-xs text-gray-500 mb-1">Depart</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">24-06</span>
                        <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "100px" }}>
                      <label className="text-xs text-gray-500 mb-1">Travelers</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">1 Traveler</span>
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Class Type */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "100px" }}>
                      <label className="text-xs text-gray-500 mb-1">Class Type</label>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-800">Economy</span>
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Search Button */}
                    <div
                      className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                      style={{ width: "100px", height: "54px" }}
                      onClick={handleSearch}
                    >
                      <span className="text-sm">Search</span>
                    </div>
                  </div>

                  {/* Fare Categories */}
                  <div className="mt-4 flex justify-start space-x-4">
                    <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                      <Checkbox
                        id="regular-fares"
                        defaultChecked
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="regular-fares" className="text-sm font-medium text-white cursor-pointer">
                        Regular Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                      <Checkbox
                        id="armed-forces-fares"
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="armed-forces-fares" className="text-sm font-medium text-white cursor-pointer">
                        Armed Forces Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                      <Checkbox
                        id="student-fares"
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="student-fares" className="text-sm font-medium text-white cursor-pointer">
                        Student Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                      <Checkbox
                        id="senior-citizen-fares"
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="senior-citizen-fares" className="text-sm font-medium text-white cursor-pointer">
                        Senior Citizen Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#29383E] px-4 py-2 rounded-lg">
                      <Checkbox
                        id="doctor-nurses-fares"
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="doctor-nurses-fares" className="text-sm font-medium text-white cursor-pointer">
                        Doctor & Nurses Fares
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex p-3 gap-1">
                  {/* Default form for other categories */}
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "140px" }}>
                    <label className="text-xs text-gray-500 mb-1">Leaving From</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Select leaving Location</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "140px" }}>
                    <label className="text-xs text-gray-500 mb-1">Destination</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Select Destination</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Theme */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "120px" }}>
                    <label className="text-xs text-gray-500 mb-1">Theme</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800 truncate">Solo Travel</span>
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* From Date */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "100px" }}>
                    <label className="text-xs text-gray-500 mb-1">From</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">DD-MM</span>
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* To Date */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "100px" }}>
                    <label className="text-xs text-gray-500 mb-1">To</label>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-800">DD-MM</span>
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "120px" }}>
                    <label className="text-xs text-gray-500 mb-1">Travelers</label>
                    <span className="text-xs text-gray-800">2 Traveler, 1 Room</span>
                  </div>

                  {/* Search Button */}
                  <div
                    className="flex items-center justify-center bg-[#29383E] rounded-r-lg text-white font-bold text-base"
                    style={{ width: "100px", height: "54px" }}
                    onClick={handleSearch}
                  >
                    <span className="text-sm">Search</span>
                  </div>
                </div>
              )}
            </div>

            {/* Add a flight checkbox - only for non-Cabs and non-Activities categories */}
            <div className="mt-4 ml-4 flex justify-start">
              {activeCategory !== "Cabs" &&
                activeCategory !== "Activities" &&
                activeCategory !== "Buses" &&
                activeCategory !== "Cruise" &&
                activeCategory !== "Flights" && (
                  <div className="flex items-center space-x-2 bg-transparent px-4 py-2 rounded-lg">
                    <Checkbox
                      id="add-flight"
                      checked={addFlight}
                      onCheckedChange={setAddFlight}
                      className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                    />
                    <label htmlFor="add-flight" className="text-sm font-medium text-white cursor-pointer">
                      Add a flight
                    </label>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </div>
  )
}
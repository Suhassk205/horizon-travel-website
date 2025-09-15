"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ChevronDown,
  Search,
  User,
  Menu,
  X,
  Star,
  Clock,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  Heart,
  Plane,
  Building2,
  Car,
  Mountain,
  Ticket,
  Ship,
  Activity,
  ChevronRight,
  ChevronLeft,
  Package,
} from "lucide-react"

const exploreExtraordinaryItems = [
  { id: 1, name: "Adventure" },
  { id: 2, name: "Beaches" },
  { id: 3, name: "Mountains" },
  { id: 4, name: "Heritage" },
  { id: 5, name: "Honeymoon" },
  { id: 6, name: "Wildlife" },
]

const offersDropdownItems = [
  {
    id: 1,
    title: "Early Bird Offer",
    description: "Book now and get 20% off",
    image: "/images/offer1.png",
  },
  {
    id: 2,
    title: "Last Minute Deals",
    description: "Up to 30% off on selected packages",
    image: "/images/offer2.png",
  },
]

type Region = {
  id: string
  title: string
}

type Regions = {
  india: Region[]
  international: Region[]
}

const regions: Regions = {
  india: [
    { id: "kerala", title: "Kerala" },
    { id: "goa", title: "Goa" },
    { id: "himachal", title: "Himachal Pradesh" },
    { id: "gujarat", title: "Gujarat" },
    { id: "tamil-nadu", title: "Tamil Nadu" },
    { id: "rajasthan", title: "Rajasthan" },
    { id: "jammu-kashmir", title: "Jammu & Kashmir" },
    { id: "karnataka", title: "Karnataka" },
    { id: "madhya-pradesh", title: "Madhya Pradesh" },
    { id: "meghalaya", title: "Meghalaya" },
  ],
  international: [
    { id: "dubai", title: "Dubai" },
    { id: "thailand", title: "Thailand" },
    { id: "maldives", title: "Maldives" },
    { id: "singapore", title: "Singapore" },
    { id: "bali", title: "Bali" },
    { id: "switzerland", title: "Switzerland" },
    { id: "malaysia", title: "Malaysia" },
    { id: "mauritius", title: "Mauritius" },
    { id: "sri-lanka", title: "Sri Lanka" },
    { id: "vietnam", title: "Vietnam" },
  ],
}

const heroTexts = ["DISCOVER", "EXPLORE", "TRAVEL"]

export function HeroSection() {
  const router = useRouter()
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false)
  const [showExploreExtraordinaryDropdown, setShowExploreExtraordinaryDropdown] = useState(false)
  const [showOffersDropdown, setShowOffersDropdown] = useState(false)
  const [activeDestinationTab, setActiveDestinationTab] = useState("india")
  const [activeCategory, setActiveCategory] = useState("Packages")
  const [flightType, setFlightType] = useState("one-way")
  const [fareCategory, setFareCategory] = useState("regular-fares")
  const [showDiscountPopup, setShowDiscountPopup] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [addFlightChecked, setAddFlightChecked] = useState(false)
  const [addFlightHotelChecked, setAddFlightHotelChecked] = useState(false)
  const [addCabHotelChecked, setAddCabHotelChecked] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      // Start slide out (up)
      setTranslateY(-100) // Slide up
      setTimeout(() => {
        // Update text and reset position to slide in from bottom
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length)
        setTranslateY(100) // Position off-screen bottom
        // After a very short delay, start slide in
        setTimeout(() => {
          setTranslateY(0) // Slide to center
        }, 50) // Small delay to ensure CSS transition applies from 100%
      }, 500) // Duration of slide out animation
    }, 3000) // Total cycle time

    return () => clearInterval(interval)
  }, [heroTexts.length]) // Add heroTexts.length to dependency array

  // Effect for automatic discount pop-up
  useEffect(() => {
    const popupInterval = setInterval(() => {
      setShowDiscountPopup((prev) => !prev) // Toggle the pop-up visibility
    }, 2000) // Toggle every 2 seconds

    return () => clearInterval(popupInterval) // Cleanup on component unmount
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('[data-dropdown]')) {
        setShowDestinationDropdown(false)
        setShowExploreExtraordinaryDropdown(false)
        setShowOffersDropdown(false)
      }
    }

    if (showDestinationDropdown || showExploreExtraordinaryDropdown || showOffersDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDestinationDropdown, showExploreExtraordinaryDropdown, showOffersDropdown])

  const displayedRegions =
    activeDestinationTab === "all"
      ? [...regions.india, ...regions.international]
      : regions[activeDestinationTab as keyof typeof regions]
  
  // Debug logging
  useEffect(() => {
    console.log('Active tab changed to:', activeDestinationTab);
    console.log('Displayed regions count:', displayedRegions.length);
    console.log('First few regions:', displayedRegions.slice(0, 3).map(r => r.title));
  }, [activeDestinationTab, displayedRegions])

  const handleSearch = () => {
    console.log("Search button clicked!")
  }

  return (
    <div className="relative">
      {/* Background Image - This will be removed or replaced based on new design */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/winter-landscape.jpg')",
          filter: 'brightness(1.15)',
          backgroundPosition: "center 11%",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* New Header */}
      <header className="relative z-50">
        <nav className="flex items-center justify-between pl-[90px] pr-[95px] pt-[15px] pb-4">
          <div className="flex items-center gap-[25px]">
            <div className="flex items-center space-x-[3px]">
              <img src="/images/horizon-logo1.jpeg" alt="Horizon Logo" className="w-[24px] h-[24px] text-[#16242A]" />
              <span className="text-[24px] font-semibold font-gilroy text-[#16242A] tracking-[-1.2px]">Horizon</span>
            </div>

            <div className="flex items-center space-x-[28px]">
              {/* Navigation Links */}
              <div className="relative">
                <div
                  className="flex items-center gap-[2px] text-[#16242A] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
                  data-dropdown
                >
                    <span className="text-[16px] font-semibold font-gilroy leading-[24px]">Destination</span>
                  <ChevronDown 
                    className={`w-[20px] h-[20px] transition-transform duration-300 ease-out ${
                      showDestinationDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                {/* Destination Dropdown Menu - Positioned below button */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-white rounded-[10px] transition-all duration-300 ease-out ${
                    showDestinationDropdown
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                  }`}
                  style={{
                    width: '822px',
                    padding: '25px',
                    boxShadow: showDestinationDropdown ? '0px 8px 32px rgba(0, 0, 0, 0.12)' : '0px 4px 16px rgba(0, 0, 0, 0.08)',
                    transformOrigin: 'top left',
                    zIndex: 100,
                  }}
                  data-dropdown
                >
                  {/* Tab Headers */}
                  <div className="flex items-center gap-10 mb-[35px]">
                    <button
                      className={`font-gilroy font-semibold transition-all duration-200 ${
                        activeDestinationTab === "india" 
                          ? "text-[#FF6A00]" 
                          : "text-[#16242A] opacity-50 hover:opacity-75"
                      }`}
                      style={{ 
                        fontSize: '20px',
                        letterSpacing: '-0.8px',
                        lineHeight: '24.5px'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('India tab clicked');
                        setActiveDestinationTab("india");
                      }}
                    >
                      India
                    </button>
                    <button
                      className={`font-gilroy font-semibold transition-all duration-200 ${
                        activeDestinationTab === "international" 
                          ? "text-[#FF6A00]" 
                          : "text-[#16242A] opacity-50 hover:opacity-75"
                      }`}
                      style={{ 
                        fontSize: '20px',
                        letterSpacing: '-0.8px',
                        lineHeight: '24.5px'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('International tab clicked');
                        setActiveDestinationTab("international");
                      }}
                    >
                      International
                    </button>
                    <button
                      className={`font-gilroy font-semibold transition-all duration-200 ${
                        activeDestinationTab === "all" 
                          ? "text-[#FF6A00]" 
                          : "text-[#16242A] opacity-50 hover:opacity-75"
                      }`}
                      style={{ 
                        fontSize: '20px',
                        letterSpacing: '-0.8px',
                        lineHeight: '24.5px'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('All tab clicked, current tab:', activeDestinationTab);
                        setActiveDestinationTab("all");
                        console.log('Tab should now be: all');
                      }}
                    >
                      All
                    </button>
                  </div>
                  
                  {/* Destination Grid */}
                  <div className="grid gap-x-[68px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    {/* Left Column */}
                    <div className="flex flex-col">
                      {displayedRegions.slice(0, Math.ceil(displayedRegions.length / 2)).map((region: Region) => (
                        <div
                          key={region.id}
                          className="group flex items-center gap-0 py-[15px] cursor-pointer transition-all duration-200 hover:bg-[#F5F5F5] px-[10px] -mx-[10px] rounded-md"
                          onClick={() => {
                            console.log(`Selected destination: ${region.title}`);
                            setShowDestinationDropdown(false);
                          }}
                        >
                          <ChevronRight className="w-5 h-5 text-[#A3A3A3] group-hover:text-[#FF6A00] transition-colors duration-200" />
                          <span 
                            className="font-gilroy font-semibold text-[#16242A] group-hover:text-[#FF6A00] transition-colors duration-200"
                            style={{ 
                              fontSize: '18px',
                              letterSpacing: '-0.72px',
                              lineHeight: '22px'
                            }}
                          >
                            {region.title}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Right Column */}
                    <div className="flex flex-col">
                      {displayedRegions.slice(Math.ceil(displayedRegions.length / 2)).map((region: Region) => (
                        <div
                          key={region.id}
                          className="group flex items-center gap-0 py-[15px] cursor-pointer transition-all duration-200 hover:bg-[#F5F5F5] px-[10px] -mx-[10px] rounded-md"
                          onClick={() => {
                            console.log(`Selected destination: ${region.title}`);
                            setShowDestinationDropdown(false);
                          }}
                        >
                          <ChevronRight className="w-5 h-5 text-[#A3A3A3] group-hover:text-[#FF6A00] transition-colors duration-200" />
                          <span 
                            className="font-gilroy font-semibold text-[#16242A] group-hover:text-[#FF6A00] transition-colors duration-200"
                            style={{ 
                              fontSize: '18px',
                              letterSpacing: '-0.72px',
                              lineHeight: '22px'
                            }}
                          >
                            {region.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className="flex items-center space-x-0 text-[#16242A] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setShowExploreExtraordinaryDropdown(!showExploreExtraordinaryDropdown)}
                >
                  <span className="text-[16px] font-semibold font-gilroy leading-[24px]">Explore Extraordinary</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                {/* Dropdown for Explore Extraordinary remains the same */}
              </div>

              <div className="relative">
                <div
                  className="flex items-center space-x-0 text-[#16242A] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => router.push("/offers")}
                >
                  <span className="text-[16px] font-semibold font-gilroy leading-[24px]">Offers</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              <span className="text-[16px] text-[#16242A] font-semibold font-gilroy cursor-pointer hover:opacity-80">
                Support
              </span>
              <span className="text-[16px] text-[#16242A] font-semibold font-gilroy cursor-pointer hover:opacity-80">
                Review & Ratings
              </span>
              <span className="text-[16px] text-[#16242A] font-semibold font-gilroy cursor-pointer hover:opacity-80">
                About Us
              </span>
               <span className="text-[16px] text-[#16242A] font-semibold font-gilroy cursor-pointer hover:opacity-80">
                Blogs
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Signup Button with Pop-up */}
            <div className="relative">
              <Button
                onClick={() => router.push("/auth/app/signup")}
                className="bg-[#29383E] hover:bg-[#1f2b30] text-white px-6 h-[40px] rounded-lg font-medium font-gilroy text-sm transition-colors flex items-center justify-center"
              >
                Signup
              </Button>
              <div
                className={`absolute top-12 -left-4 p-2.5 bg-[#FFEFDF] rounded-[10px] flex items-center gap-2.5 shadow-lg w-[255px] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:bottom-full before:left-8 before:border-8 before:border-transparent before:border-b-[#FFEFDF] ${
                  showDiscountPopup
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center">
                  <Image
                    src="/images/iconamoon_discount-fill.svg"
                    alt="Discount"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold font-gilroy text-[#FF6A00]">Flat 20% OFF</span>
                  <span className="text-sm font-normal font-gilroy text-[#FF6A00]">
                    On your First Booking
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => router.push("/auth/app/login")}
              className="bg-[#29383e]/40 text-[#16242A] px-6 h-[40px] rounded-lg font-medium font-gilroy text-sm backdrop-blur-[3px] flex items-center justify-center hover:bg-[#29383e]/60 transition-colors"
            >
              Login
            </Button>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-[5]">

        {/* Hero Section */}
          <div className={`flex flex-col items-center justify-center px-6 pt-[110px] pb-[160px]`}>
          <h2 className="text-white text-center font-semibold font-gilroy text-[28px] tracking-tighter">One Adventure At A Time</h2>
          <div className="h-[200px] overflow-hidden mb-[20px] flex items-center justify-center">
            <h1
              className={`text-white leading-none tracking-tighter uppercase text-center font-bold font-gilroy transition-transform duration-500 ease-in-out`}
              style={{ 
                transform: `translateY(${translateY}%)`,
                fontSize: '180px',
                lineHeight: '1',
              }}
            >
              {heroTexts[currentTextIndex]}
            </h1>
          </div>

          {/* Combined Travel Categories and Search Form */}
          <div className="flex flex-col">
            {activeCategory === "Flights" && (
              <div
                className="flex items-center flex-wrap gap-x-6 gap-y-3 p-2 mb-1"
                style={{
                  background: "rgba(1, 1, 1, 0.56)",
                  borderRadius: "8px",
                  width: "fit-content",
                }}
              >
                {/* One Way */}
                <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setFlightType("one-way")}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: flightType === "one-way" ? "white" : "transparent",
                      transition: "background-color 150ms",
                    }}
                  >
                    {flightType === "one-way" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                    One Way
                  </div>
                </div>

                {/* Round Trip */}
                <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setFlightType("round-trip")}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: flightType === "round-trip" ? "white" : "transparent",
                      transition: "background-color 150ms",
                    }}
                  >
                    {flightType === "round-trip" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                    Round Trip
                  </div>
                </div>

                {/* Multi-City */}
                <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setFlightType("multi-city")}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: flightType === "multi-city" ? "white" : "transparent",
                      transition: "background-color 150ms",
                    }}
                  >
                    {flightType === "multi-city" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                    Multi-City
                  </div>
                </div>
              </div>
            )}
            {/* Travel Categories Row - Small gaps between items */}
            <div className="flex gap-x-1.5">
              {/* Packages */}
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setActiveCategory("Packages")}
                style={{
                  background: activeCategory === "Packages" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <Package
                    className={`${
                      activeCategory === "Packages" ? "text-black" : "text-white"
                    }`}
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Packages" ? "text-black" : "text-white"
                    }`}
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
                  background: activeCategory === "Hotels" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/material-symbols_hotel.svg"
                    alt="Hotel icon"
                    className="w-5 h-5"
                    style={{ filter: activeCategory === "Hotels" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Hotels" ? "text-black" : "text-white"
                    }`}
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
                  background: activeCategory === "Cabs" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/fluent_vehicle-cab.svg"
                    alt="Cab icon"
                    className="w-5 h-5"
                    style={{ filter: activeCategory === "Cabs" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Cabs" ? "text-black" : "text-white"
                    }`}
                  >
                    Cabs
                  </span>
                </div>
              </div>

              {/* Activities */}
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setActiveCategory("Activities")}
                style={{
                  background: activeCategory === "Activities" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/material-symbols_activities.svg"
                    alt="Activities icon"
                    className="w-5 h-5"
                    style={{ filter: activeCategory === "Activities" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Activities" ? "text-black" : "text-white"
                    }`}
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
                  background: activeCategory === "Trains" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/ic_outline-train.svg"
                    alt="Train icon"
                    className="w-5 h-5"
                    style={{ filter: activeCategory === "Trains" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Trains" ? "text-black" : "text-white"
                    }`}
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
                  background: activeCategory === "Buses" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/ion_bus.svg"
                    alt="Bus icon"
                    className="w-5 h-5"
                    style={{ filter: activeCategory === "Buses" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Buses" ? "text-black" : "text-white"
                    }`}
                  >
                    Buses
                  </span>
                </div>
              </div>

              {/* Flights */}
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setActiveCategory("Flights")}
                style={{
                  background: activeCategory === "Flights" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/mdi_airplane.svg"
                    alt="Plane icon"
                    className="w-6 h-6"
                    style={{ filter: activeCategory === "Flights" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Flights" ? "text-black" : "text-white"
                    }`}
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
                  background: activeCategory === "Cruise" ? "#CEDDE7" : "#0101018F",
                  borderRadius: "10px 10px 0 0",
                  width: "152px",
                  padding: "10px 30px 15px 30px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/Group.svg"
                    alt="Cruise icon"
                    className="w-5 h-5"
                    style={{ filter: activeCategory === "Cruise" ? "none" : "brightness(0) invert(1)" }}
                  />
                  <span
                    className={`text-base font-medium font-gilroy ${
                      activeCategory === "Cruise" ? "text-black" : "text-white"
                    }`}
                  >
                    Cruise
                  </span>
                </div>
              </div>
            </div>

            {/* Search Form Row - Directly connected below */}
            <div
              className="rounded-lg shadow-xl"
                  style={{
                width: "1280px",
                height: "89px",
                gap: "10px",
                borderRadius: "10px",
                padding: "10px",
                background: "#CEDDE7",
              }}
            >
              {activeCategory === "Hotels" ? (
                <div className="flex p-1 gap-[10px]">
                  {/* Search Your Desired Hotels */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "445px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Search Your Desired Hotels
                    </label>
                                          <input
                        type="text"
                        placeholder="Enter hotel name"
                        className="outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                  </div>

                  {/* Check-In */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "195px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Check-In
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="DD-MM"
                        className="outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                      <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Check-Out */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "195px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Check-Out
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="DD-MM"
                        className="outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                      <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "195px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Travellers
                    </label>
                    <input
                      type="text"
                      placeholder="2 Traveler, 1 Room"
                      className="outline-none w-full bg-transparent"
                      style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                    />
          </div>

                  {/* Search Button */}
                  <div
                    style={{
                      width: "143px",
                      height: "64px",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 26,
                      paddingBottom: 26,
                      background: "#29383E",
                      borderRadius: 8,
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                      display: "inline-flex",
                      cursor: "pointer",
                    }}
                    onClick={handleSearch}
                  >
                    <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                      Search
                    </div>
                  </div>
                </div>
              ) : activeCategory === "Cabs" ? (
                <div className="flex flex-col">
                  <div className="flex p-1 gap-[10px]">
                    {/* Pickup */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "190px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Pickup
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Select Pickup"
                          className="outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Drop-Off */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "190px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Drop-Off
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Same as Pickup"
                          className="outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Pickup Date */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "139px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Pickup Date
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="DD-MM"
                          className="outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Drop-Off Date */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "139px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Drop-Off Date
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="DD-MM"
                          className="outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Pickup Time */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "139px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Pickup Time
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="HH:MM AM"
                          className="outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <ChevronDown size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Drop-Off Time */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "139px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Drop-Off Time
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="HH:MM AM"
                          className="outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <ChevronDown size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "129px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Travelers
                      </label>
                      <input
                        type="text"
                        placeholder="1 Traveler"
                        className="outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                    </div>

                    {/* Search Button */}
                    <div
                      style={{
                        width: "143px",
                        height: "64px",
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 26,
                        paddingBottom: 26,
                        background: "#29383E",
                        borderRadius: 8,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        display: "inline-flex",
                        cursor: "pointer",
                      }}
                      onClick={handleSearch}
                    >
                      <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                        Search
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeCategory === "Activities" ? (
                <div className="flex p-1 gap-[10px]">
                  {/* Search Your Desired Activity */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "850px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Search your desired activity
                    </label>
                    <input
                      type="text"
                      placeholder="Enter activity name"
                       className="outline-none w-full bg-transparent"
                       style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                    />
                  </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "256px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Travellers
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="2 Travellers"
                        className="outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div
                    style={{
                      width: "143px",
                      height: "64px",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 26,
                      paddingBottom: 26,
                      background: "#29383E",
                      borderRadius: 8,
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                      display: "inline-flex",
                      cursor: "pointer",
                    }}
                    onClick={handleSearch}
                  >
                    <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                      Search
                    </div>
                  </div>
                </div>
              ) : activeCategory === "Buses" ? (
                <div className="flex p-1 gap-[10px]">
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "309px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Leaving From
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Select leaving Location"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Swap Icon */}
                  <div className="flex items-center justify-center" style={{ width: "40px", height: "64px" }}>
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <img src="/images/Group 1000001022.svg" alt="swap icon" />
                  </div>
                </div>

                  {/* Destination */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "309px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Destination
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Select Destination"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Departure */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "209px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Departure
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="DD-MM"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      />
                      <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                  </div>
                </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "209px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Travellers
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="2 Travellers"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div
                    style={{
                      width: "143px",
                      height: "64px",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 26,
                      paddingBottom: 26,
                      background: "#29383E",
                      borderRadius: 8,
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                      display: "inline-flex",
                      cursor: "pointer",
                    }}
                    onClick={handleSearch}
                  >
                    <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                      Search
                    </div>
                  </div>
                </div>
              ) : activeCategory === "Cruise" ? (
                <div className="flex p-1 gap-[10px]">
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "287px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Leaving From
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Select leaving Location"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "287px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Destination
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Select Destination"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Month */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "237px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Month
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Select Travel Month"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                  </div>
                </div>

                  {/* Travelers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "237px" }}>
                    <label
                      className="text-xs mb-1"
                      style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Travelers
                    </label>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="2 Traveler, 1 Cabin"
                        className="text-sm outline-none w-full bg-transparent"
                        style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <div
                    style={{
                      width: "143px",
                      height: "64px",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 26,
                      paddingBottom: 26,
                      background: "#29383E",
                      borderRadius: 8,
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                      display: "inline-flex",
                      cursor: "pointer",
                    }}
                    onClick={handleSearch}
                  >
                    <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                      Search
                    </div>
                  </div>
                </div>
              ) : activeCategory === "Flights" ? (
                <div className="flex flex-col">
                  {/* Main Search Form */}
                  <div className="flex p-1 gap-[10px]">
                    {/* Leaving From */}
                    <div className="flex bg-white rounded-md px-3 py-3 h-16 flex-col gap-y-0 min-w-0" style={{ width: "280px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Leaving From
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Select leaving Location"
                          className="text-sm outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Swap Icon */}
                    <div className="flex items-center justify-center w-10 h-16">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <img src="/images/Group 1000001022.svg" alt="swap icon" />
                      </div>
                    </div>

                    {/* Going To */}
                    <div className="flex flex-col bg-white rounded-md py-3 px-4 h-16 min-w-0" style={{ width: "280px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Going To
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Select Destination"
                          className="text-sm outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E !important", fontSize: "16px !important", fontFamily: "Gilroy !important", fontWeight: "500 !important" }}
                        />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>
                    {/* Depart */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16 min-w-0" style={{ width: "150px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Depart
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="24-06"
                          className="text-sm outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                        />
                        <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16 min-w-0" style={{ width: "150px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Travelers
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="1 Traveler"
                          className="text-sm outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                        />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Class Type */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16 min-w-0" style={{ width: "150px" }}>
                      <label
                        className="text-xs mb-1"
                        style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                      >
                        Class Type
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Economy"
                          className="text-sm outline-none w-full bg-transparent"
                          style={{ color: "#1E1E1E", fontSize: 16, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                        />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Search Button */}
                    <div
                      style={{
                        width: "143px",
                        height: "64px",
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 26,
                        paddingBottom: 26,
                        background: "#29383E",
                        borderRadius: 8,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        display: "inline-flex",
                        cursor: "pointer",
                      }}
                      onClick={handleSearch}
                    >
                      <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                        Search
                      </div>
                    </div>
                  </div>
                  {/* Fare Category Selection */}
                  <div
                    className="flex flex-wrap items-center gap-x-6 gap-y-3 p-2 mt-3"
                    style={{
                      background: "rgba(1, 1, 1, 0.60)",
                      borderRadius: "10px",
                    }}
                  >
                    {/* Regular Fares */}
                    <div
                      className="flex items-center gap-2.5 cursor-pointer"
                      onClick={() => setFareCategory("regular-fares")}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: "2px white solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: fareCategory === "regular-fares" ? "white" : "transparent",
                          transition: "background-color 150ms",
                        }}
                      >
                        {fareCategory === "regular-fares" && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                        Regular Fares
                      </div>
                    </div>

                    {/* Armed Forces Fares */}
                    <div
                      className="flex items-center gap-2.5 cursor-pointer"
                      onClick={() => setFareCategory("armed-forces-fares")}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: "2px white solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: fareCategory === "armed-forces-fares" ? "white" : "transparent",
                          transition: "background-color 150ms",
                        }}
                      >
                        {fareCategory === "armed-forces-fares" && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                        Armed Forces Fares
                      </div>
                    </div>

                    {/* Student Fares */}
                    <div
                      className="flex items-center gap-2.5 cursor-pointer"
                      onClick={() => setFareCategory("student-fares")}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: "2px white solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: fareCategory === "student-fares" ? "white" : "transparent",
                          transition: "background-color 150ms",
                        }}
                      >
                        {fareCategory === "student-fares" && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                        Student Fares
                      </div>
                    </div>

                    {/* Senior Citizen Fares */}
                    <div
                      className="flex items-center gap-2.5 cursor-pointer"
                      onClick={() => setFareCategory("senior-citizen-fares")}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: "2px white solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: fareCategory === "senior-citizen-fares" ? "white" : "transparent",
                          transition: "background-color 150ms",
                        }}
                      >
                        {fareCategory === "senior-citizen-fares" && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                        Senior Citizen Fares
                      </div>
                    </div>

                    {/* Doctor & Nurses Fares */}
                    <div
                      className="flex items-center gap-2.5 cursor-pointer"
                      onClick={() => setFareCategory("doctor-nurses-fares")}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: "2px white solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: fareCategory === "doctor-nurses-fares" ? "white" : "transparent",
                          transition: "background-color 150ms",
                        }}
                      >
                        {fareCategory === "doctor-nurses-fares" && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500" }}>
                        Doctor & Nurses Fares
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                  <div className="flex p-1 gap-[10px]">
                    {/* Default form for other categories */}
                    {/* Leaving From */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "224px" }}>
                    <label
                      htmlFor="packages-leaving-from"
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Leaving From
                    </label>
                      <div className="flex items-center justify-between">
                      <input
                        type="text"
                        id="packages-leaving-from"
                        name="packages-leaving-from"
                        placeholder="Select leaving Location"
                        className="outline-none w-full bg-transparent hero-input-field"
                      />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "211px" }}>
                    <label
                      htmlFor="packages-destination"
                      className="text-xs mb-1"
                      style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                    >
                      Destination
                    </label>
                      <div className="flex items-center justify-between">
                      <input
                        type="text"
                        id="packages-destination"
                        name="packages-destination"
                        placeholder="Select Destination"
                        className="outline-none w-full bg-transparent hero-input-field"
                      />
                        <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Theme */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "202px" }}>
                  <label
                    htmlFor="packages-theme"
                    className="text-xs mb-1"
                    style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                  >
                    Theme
                  </label>
                    <div className="flex items-center justify-between">
                    <input
                      type="text"
                      id="packages-theme"
                      name="packages-theme"
                      placeholder="Solo Travel"
                      className="outline-none w-full bg-transparent hero-input-field"
                    />
                      <ChevronDown size={12} className="text-gray-400 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* From Date */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "130px" }}>
                  <label
                    htmlFor="packages-from-date"
                    className="text-xs mb-1"
                    style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                  >
                    From
                  </label>
                    <div className="flex items-center justify-between">
                    <input
                      type="text"
                      id="packages-from-date"
                      name="packages-from-date"
                      placeholder="DD-MM"
                      className="outline-none w-full bg-transparent hero-input-field"
                    />
                      <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                  </div>
                </div>

                  {/* To Date */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "130px" }}>
                  <label
                    htmlFor="packages-to-date"
                    className="text-xs mb-1"
                    style={{ color: "#A3A3A3", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                  >
                    To
                  </label>
                    <div className="flex items-center justify-between">
                    <input
                      type="text"
                      id="packages-to-date"
                      name="packages-to-date"
                      placeholder="DD-MM"
                      className="outline-none w-full bg-transparent hero-input-field"
                    />
                      <img src="/images/mdi_calendar (1).svg" alt="calendar icon" className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-3 h-16" style={{ width: "160px" }}>
                  <label
                    htmlFor="packages-travelers"
                    className="text-xs mb-1"
                    style={{ color: "#626262", fontSize: 14, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}
                  >
                    Travelers
                  </label>
                  <input
                    type="text"
                    id="packages-travelers"
                    name="packages-travelers"
                    placeholder="2 Traveler, 1 Room"
                    className="outline-none w-full bg-transparent hero-input-field"
                  />
                </div>

                  {/* Search Button */}
                  <div
                  style={{
                    width: "143px",
                    height: "64px",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 26,
                    paddingBottom: 26,
                    background: "#29383E",
                    borderRadius: 8,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    display: "inline-flex",
                    cursor: "pointer",
                  }}
                    onClick={handleSearch}
                  >
                  <div style={{ color: "white", fontSize: 16, fontFamily: "Gilroy", fontWeight: "600", wordWrap: "break-word" }}>
                    Search
                  </div>
                  </div>
                  
                </div>
              )}
            </div>

            {activeCategory === "Packages" && (
                    <div
                className="self-start"
                      style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  background: "rgba(1, 1, 1, 0.60)",
                  borderRadius: 10,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 15,
                  display: "inline-flex",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
                onClick={() => setAddFlightChecked(!addFlightChecked)}
              >
                <div style={{ padding: 8, justifyContent: "flex-start", alignItems: "center", gap: 10, display: "flex" }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: addFlightChecked ? "white" : "transparent",
                      transition: "background-color 150ms",
                    }}
                  >
                    {addFlightChecked && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}>
                          Add a flight
                  </div>
                      </div>
                    </div>
                  )}
                  {activeCategory === "Hotels" && (
    <div
                className="flex items-center mt-2 space-x-4 p-2 self-start"
      style={{
                  background: "rgba(1, 1, 1, 0.60)",
                  borderRadius: "10px",
        width: "fit-content",
      }}
    >
                <div
                  className="flex items-center gap-2.5 cursor-pointer"
                  onClick={() => setAddFlightHotelChecked(!addFlightHotelChecked)}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: addFlightHotelChecked ? "white" : "transparent",
                      transition: "background-color 150ms",
                    }}
                  >
                    {addFlightHotelChecked && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}>
          Add a flight
      </div>
    </div>
                <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setAddCabHotelChecked(!addCabHotelChecked)}>
    <div
      style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: addCabHotelChecked ? "white" : "transparent",
                      transition: "background-color 150ms",
                    }}
                  >
                    {addCabHotelChecked && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#29383E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div style={{ color: "white", fontSize: 18, fontFamily: "Gilroy", fontWeight: "500", wordWrap: "break-word" }}>
          Add a cab
      </div>
    </div>
  </div>
)}
                </div>
            </div>
          </div>
      <div className="absolute bottom-0 inset-x-0 w-full z-20">
        <svg width="100%" height="239" viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g filter="url(#filter0_f_1_11213)">
          <path d="M-54.9984 257.687C405.93 332.734 1266 367.186 1634 221.186" stroke="#F9FAFB" strokeWidth="350"/>
          </g>
          <defs>
          <filter id="filter0_f_1_11213" x="-141.121" y="0.520386" width="1897.66" height="554.811" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="29" result="effect1_foregroundBlur_1_11213"/>
          </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}
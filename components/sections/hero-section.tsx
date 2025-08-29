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
    { id: "goa", title: "Goa" },
    { id: "kerala", title: "Kerala" },
    { id: "rajasthan", title: "Rajasthan" },
    { id: "himachal", title: "Himachal Pradesh" },
    { id: "andaman", title: "Andaman & Nicobar" },
    { id: "ladakh", title: "Ladakh" },
  ],
  international: [
    { id: "dubai", title: "Dubai" },
    { id: "thailand", title: "Thailand" },
    { id: "maldives", title: "Maldives" },
    { id: "europe", title: "Europe" },
    { id: "bali", title: "Bali" },
    { id: "singapore", title: "Singapore" },
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

  const displayedRegions =
    activeDestinationTab === "all"
      ? [...regions.india, ...regions.international]
      : regions[activeDestinationTab as keyof typeof regions]

  const handleSearch = () => {
    console.log("Search button clicked!")
  }

  return (
    <div className="relative">
      {/* Background Image - This will be removed or replaced based on new design */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/winter-landscape.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* New Header */}
      <header className="relative z-10">
        <nav className="flex items-center justify-between px-12 py-4">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 162 34" fill="none" className="w-8 h-8 object-contain">
              <path d="M13.592 34C9.03301 30.1399 5.62822 26.5549 3.37761 23.2448C1.127 19.9348 0.00113267 16.8704 0 14.0517C0 9.82538 1.36656 6.4584 4.09968 3.95078C6.83281 1.44315 9.99691 0.189342 13.592 0.189342C17.1882 0.189342 20.3529 1.44315 23.086 3.95078C25.8191 6.4584 27.1851 9.82538 27.184 14.0517L30.7519 10.5016L33.1305 12.8683L25.485 20.4757L17.8395 12.8683L20.2181 10.5016L23.786 14.0517C23.786 10.9806 22.8017 8.46619 20.8331 6.50855C18.8645 4.55092 16.4508 3.57153 13.592 3.57041C10.732 3.57041 8.31773 4.54979 6.34916 6.50855C4.38059 8.46732 3.39686 10.9817 3.398 14.0517C3.398 16.0522 4.23334 18.3417 5.90402 20.9203C7.5747 23.499 10.1374 26.3656 13.592 29.5201C14.1583 29.0129 14.6822 28.5199 15.1636 28.0409L16.6077 26.6039C16.4661 26.3222 16.3529 26.0196 16.2679 25.6961C16.183 25.3726 16.1405 25.0413 16.1405 24.7021C16.1405 23.5187 16.5511 22.5185 17.3723 21.7014C18.1934 20.8843 19.1987 20.4757 20.388 20.4757C21.5773 20.4757 22.5825 20.8843 23.4037 21.7014C24.2249 22.5185 24.6355 23.5187 24.6355 24.7021C24.6355 25.8854 24.2249 26.8857 23.4037 27.7028C22.5825 28.5199 21.5773 28.9284 20.388 28.9284C20.1615 28.9284 19.9559 28.9143 19.7712 28.8861C19.5866 28.858 19.3958 28.8157 19.1987 28.7593C18.3775 29.6046 17.5065 30.464 16.5856 31.3374C15.6648 32.2109 14.6669 33.0984 13.592 34Z" fill="#16242A"/>
              <path d="M57.7843 0.527447H62.4735V28.9284H57.7843V16.6348H45.5515V28.9284H40.8622V0.527447H45.5515V12.1718H57.7843V0.527447Z" fill="#16242A"/>
              <path d="M75.0701 29.4558C72.0799 29.4558 69.5382 28.428 67.445 26.3723C65.3518 24.3166 64.3052 21.7876 64.3052 18.7852C64.3052 15.7828 65.3518 13.2538 67.445 11.1981C69.5382 9.1424 72.0799 8.11456 75.0701 8.11456C78.0875 8.11456 80.6292 9.1424 82.6952 11.1981C84.7884 13.2538 85.835 15.7828 85.835 18.7852C85.835 21.7876 84.7884 24.3166 82.6952 26.3723C80.6292 28.428 78.0875 29.4558 75.0701 29.4558ZM70.544 23.3699C71.7672 24.5871 73.276 25.1957 75.0701 25.1957C76.8642 25.1957 78.3729 24.5871 79.5962 23.3699C80.8195 22.1527 81.4311 20.6245 81.4311 18.7852C81.4311 16.9459 80.8195 15.4177 79.5962 14.2005C78.3729 12.9833 76.8642 12.3747 75.0701 12.3747C73.276 12.3747 71.7672 12.9833 70.544 14.2005C69.3207 15.4177 68.709 16.9459 68.709 18.7852C68.709 20.6245 69.3207 22.1527 70.544 23.3699Z" fill="#16242A"/>
              <path d="M91.7742 12.0501C92.8888 9.53461 94.9819 8.27685 98.0537 8.27685V13.0239C96.3683 12.9157 94.9004 13.3214 93.6499 14.2411C92.3995 15.1337 91.7742 16.6213 91.7742 18.7041V28.9284H87.3704V8.64201H91.7742V12.0501Z" fill="#16242A"/>
              <path d="M103.02 4.78759C102.476 5.32856 101.824 5.59905 101.063 5.59905C100.302 5.59905 99.6357 5.32856 99.0648 4.78759C98.5212 4.21957 98.2493 3.55688 98.2493 2.79952C98.2493 2.04216 98.5212 1.393 99.0648 0.85203C99.6085 0.28401 100.275 0 101.063 0C101.851 0 102.517 0.28401 103.061 0.85203C103.605 1.393 103.876 2.04216 103.876 2.79952C103.876 3.55688 103.591 4.21957 103.02 4.78759ZM98.861 28.9284V8.64201H103.265V28.9284H98.861Z" fill="#16242A"/>
              <path d="M111.192 24.79H121.1V28.9284H105.197V26.0072L114.739 12.7804H105.605V8.64201H120.692V11.5632L111.192 24.79Z" fill="#16242A"/>
              <path d="M131.147 29.4558C128.156 29.4558 125.615 28.428 123.521 26.3723C121.428 24.3166 120.382 21.7876 120.382 18.7852C120.382 15.7828 121.428 13.2538 123.521 11.1981C125.615 9.1424 128.156 8.11456 131.147 8.11456C134.164 8.11456 136.706 9.1424 138.772 11.1981C140.865 13.2538 141.911 15.7828 141.911 18.7852C141.911 21.7876 140.865 24.3166 138.772 26.3723C136.706 28.428 134.164 29.4558 131.147 29.4558ZM126.62 23.3699C127.844 24.5871 129.352 25.1957 131.147 25.1957C132.941 25.1957 134.449 24.5871 135.673 23.3699C136.896 22.1527 137.508 20.6245 137.508 18.7852C137.508 16.9459 136.896 15.4177 135.673 14.2005C134.449 12.9833 132.941 12.3747 131.147 12.3747C129.352 12.3747 127.844 12.9833 126.62 14.2005C125.397 15.4177 124.786 16.9459 124.786 18.7852C124.786 20.6245 125.397 22.1527 126.62 23.3699Z" fill="#16242A"/>
              <path d="M154.171 8.11456C156.509 8.11456 158.398 8.85839 159.839 10.3461C161.28 11.8337 162 13.8759 162 16.4726V28.9284H157.596V16.9189C157.596 15.4041 157.188 14.2411 156.373 13.4296C155.557 12.6181 154.443 12.2124 153.029 12.2124C151.48 12.2124 150.229 12.6993 149.278 13.673C148.326 14.6197 147.851 16.0804 147.851 18.0549V28.9284H143.447V8.64201H147.851V11.2387C149.183 9.15593 151.29 8.11456 154.171 8.11456Z" fill="#16242A"/>
            </svg>
          </div>

          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div
              className="flex items-center space-x-1 text-[#16242A] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
            >
              <span className="text-base font-semibold font-gilroy leading-[30px]">Destination</span>
              <ChevronDown className="w-5 h-5" />
            </div>

            <div className="relative">
              <div
                className="flex items-center space-x-1 text-[#16242A] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowExploreExtraordinaryDropdown(!showExploreExtraordinaryDropdown)}
              >
                <span className="text-base font-semibold font-gilroy leading-[30px]">Explore Extraordinary</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              {/* Dropdown for Explore Extraordinary remains the same */}
            </div>

            <div className="relative">
              <div
                className="flex items-center space-x-1 text-[#16242A] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowOffersDropdown(!showOffersDropdown)}
              >
                <span className="text-base font-semibold font-gilroy leading-[30px]">Offers</span>
                <ChevronDown className="w-5 h-5" />
              </div>
              {/* Dropdown for Offers remains the same */}
            </div>

            <span className="text-base text-[#16242A] font-semibold font-gilroy leading-[30px] cursor-pointer hover:opacity-80">
              Support
            </span>
            <span className="text-base text-[#16242A] font-semibold font-gilroy leading-[30px] cursor-pointer hover:opacity-80">
              Review & Ratings
            </span>
            <span className="text-base text-[#16242A] font-semibold font-gilroy leading-[30px] cursor-pointer hover:opacity-80">
              About Us
            </span>
             <span className="text-base text-[#16242A] font-semibold font-gilroy leading-[30px] cursor-pointer hover:opacity-80">
              Blogs
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Signup Button with Pop-up */}
            <div className="relative">
              <Button
                className="bg-[#29383E] hover:bg-[#1f2b30] text-white px-6 h-10 rounded-lg font-semibold font-gilroy text-sm transition-colors flex items-center justify-center"
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
                    src="/images/iconamoon_discount-fill.png"
                    alt="Discount"
                    width={24}
                    height={24}
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
              className="bg-[#29383e]/40 text-[#16242A] px-6 h-10 rounded-lg font-semibold font-gilroy text-sm backdrop-blur-[3px] flex items-center justify-center hover:bg-[#29383e]/60 transition-colors"
            >
              Login
            </Button>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10">
        {/* Destination Dropdown Menu */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 top-[80px] p-6 bg-white rounded-lg shadow-lg z-50 w-[800px] transition-all duration-300 ease-in-out ${
            showDestinationDropdown
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex space-x-6 mb-6">
            <button
              className={`text-lg font-semibold font-gilroy ${
                activeDestinationTab === "india" ? "text-[#E06A00]" : "text-gray-500"
              }`}
              onClick={() => setActiveDestinationTab("india")}
            >
              India
            </button>
            <button
              className={`text-lg font-semibold font-gilroy ${
                activeDestinationTab === "international" ? "text-[#E06A00]" : "text-gray-500"
              }`}
              onClick={() => setActiveDestinationTab("international")}
            >
              International
            </button>
            <button
              className={`text-lg font-semibold font-gilroy ${
                activeDestinationTab === "all" ? "text-[#E06A00]" : "text-gray-500"
              }`}
              onClick={() => setActiveDestinationTab("all")}
            >
              All
            </button>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            {displayedRegions.map((region: Region) => (
              <div
                key={region.id}
                className="flex items-center space-x-2 text-gray-800 cursor-pointer hover:text-[#E06A00]"
              >
                <ChevronRight className="w-4 h-4 text-gray-500" />
                <span className="text-base font-medium font-gilroy">{region.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className={`flex flex-col items-center justify-center px-6 pt-10 pb-40`}>
          <h2 className="text-white text-center tracking-wide font-semibold font-gilroy text-2xl">One Adventure At A Time</h2>
          <div className="h-[200px] overflow-hidden mb-16 flex items-center justify-center">
            <h1
              className={`text-white leading-none tracking-wide uppercase text-center font-bold font-gilroy transition-transform duration-500 ease-in-out`}
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
                    src="/images/icon-hotel.png"
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
                    src="/images/icon-cab.png"
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
                    src="/images/icon-activities.png"
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
                    src="/images/icon-train.png"
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
                    src="/images/icon-bus.png"
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
                    src="/images/icon-flight.png"
                    alt="Plane icon"
                    className="w-5 h-5"
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
                    src="/images/icon-cruise.png"
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
                <div className="flex p-3 gap-1">
                  {/* Search Your Desired Hotels */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "445px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "195px" }}>
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
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Check-Out */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "195px" }}>
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
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "195px" }}>
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
                      width: "180px",
                      height: "54px",
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
                  <div className="flex p-3 gap-1">
                    {/* Pickup */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "190px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "190px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "139px" }}>
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
                        <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Drop-Off Date */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "139px" }}>
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
                        <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Pickup Time */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "139px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "139px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "129px" }}>
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
                        width: "180px",
                        height: "54px",
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
                <div className="flex p-3 gap-1">
                  {/* Search Your Desired Activity */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "850px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "256px" }}>
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
                      width: "180px",
                      height: "54px",
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
                <div className="flex p-3 gap-1">
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "309px" }}>
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
                  <div className="flex items-center justify-center" style={{ width: "40px", height: "54px" }}>
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "309px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "209px" }}>
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
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                  </div>
                </div>

                  {/* Travellers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "209px" }}>
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
                      width: "180px",
                      height: "54px",
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
                <div className="flex p-3 gap-1">
                  {/* Leaving From */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "287px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "287px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "237px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "237px" }}>
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
                      width: "180px",
                      height: "54px",
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
                  <div className="flex p-3 gap-1">
                    {/* Leaving From */}
                    <div className="flex bg-white rounded-md px-3 py-2 h-[54px] flex-col gap-y-0 min-w-0" style={{ width: "280px" }}>
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
                    <div className="flex items-center justify-center w-10 h-[54px]">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div className="flex flex-col bg-white rounded-md py-2 px-4 h-14 min-w-0" style={{ width: "280px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px] min-w-0" style={{ width: "150px" }}>
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
                        <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px] min-w-0" style={{ width: "150px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px] min-w-0" style={{ width: "150px" }}>
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
                        width: "180px",
                        height: "54px",
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
                  {/* Moved Fare Category Checkboxes */}
                  <div
                    className="flex justify-start space-x-4 p-3 mt-3" // Added mt-3 class
                    style={{
                      background: "rgba(1, 1, 1, 0.56)",
                      borderRadius: "8px",
                      width: "fit-content",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="regular-fares"
                        checked={fareCategory === "regular-fares"}
                        onCheckedChange={() => setFareCategory("regular-fares")}
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="regular-fares" className="text-sm font-medium font-gilroy text-white cursor-pointer">
                        Regular Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="armed-forces-fares"
                        checked={fareCategory === "armed-forces-fares"}
                        onCheckedChange={() => setFareCategory("armed-forces-fares")}
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="armed-forces-fares" className="text-sm font-medium font-gilroy text-white cursor-pointer">
                        Armed Forces Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="student-fares"
                        checked={fareCategory === "student-fares"}
                        onCheckedChange={() => setFareCategory("student-fares")}
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="student-fares" className="text-sm font-medium font-gilroy text-white cursor-pointer">
                        Student Fares
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="senior-citizen-fares"
                        checked={fareCategory === "senior-citizen-fares"}
                        onCheckedChange={() => setFareCategory("senior-citizen-fares")}
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="senior-citizen-fares" className="text-sm font-medium font-gilroy text-white cursor-pointer">
                        Senior Citizen Fares
                      </label>
                </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="doctor-nurses-fares"
                        checked={fareCategory === "doctor-nurses-fares"}
                        onCheckedChange={() => setFareCategory("doctor-nurses-fares")}
                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#29383E]"
                      />
                      <label htmlFor="doctor-nurses-fares" className="text-sm font-medium font-gilroy text-white cursor-pointer">
                        Doctor & Nurses Fares
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                  <div className="flex p-3 gap-1">
                    {/* Default form for other categories */}
                    {/* Leaving From */}
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "202px" }}>
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
                    <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "202px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "172px" }}>
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
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "151px" }}>
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
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                  </div>
                </div>

                  {/* To Date */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "151px" }}>
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
                      <Calendar size={12} className="text-gray-800 ml-1 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="flex flex-col bg-white rounded-md px-3 py-2 h-[54px]" style={{ width: "172px" }}>
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
                    width: "180px",
                    height: "54px",
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
                <div style={{ padding: 10, justifyContent: "flex-start", alignItems: "center", gap: 10, display: "flex" }}>
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
                className="flex items-center mt-2 self-start space-x-4 p-3 self-start"
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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-20" />
    </div>
  )
}
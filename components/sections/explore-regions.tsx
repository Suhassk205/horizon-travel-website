"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { indiaRegions, internationalRegions } from "@/data/regions"

const ExploreRegions = () => {
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null)
  const [autoActiveRegionIndex, setAutoActiveRegionIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState<"india" | "international">("india")

  const autoStartTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoCycleIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Get current regions based on selected tab
  const currentRegions = selectedTab === "india" ? indiaRegions : internationalRegions

  // Reset animation when tab changes
  useEffect(() => {
    setHoveredRegionId(null)
    setAutoActiveRegionIndex(0)

    // Clear existing timeouts/intervals
    if (autoStartTimeoutRef.current) {
      clearTimeout(autoStartTimeoutRef.current)
    }
    if (autoCycleIntervalRef.current) {
      clearInterval(autoCycleIntervalRef.current)
    }
  }, [selectedTab])

  // Effect for auto-animation cycling
  useEffect(() => {
    // Clear any existing interval first
    if (autoCycleIntervalRef.current) {
      clearInterval(autoCycleIntervalRef.current)
    }

    // Only start auto-animation if no region is currently hovered
    if (hoveredRegionId === null) {
      autoCycleIntervalRef.current = setInterval(() => {
        setAutoActiveRegionIndex((prevIndex) => (prevIndex + 1) % currentRegions.length)
      }, 2000) // Cycle every 2 seconds
    }

    // Cleanup function
    return () => {
      if (autoCycleIntervalRef.current) {
        clearInterval(autoCycleIntervalRef.current)
      }
    }
  }, [hoveredRegionId, currentRegions.length]) // Re-run when hoveredRegionId or regions change

  // Initial delay for the first auto-animation to kick in
  useEffect(() => {
    autoStartTimeoutRef.current = setTimeout(() => {
      // If still no hover after initial delay, ensure auto-animation starts
      if (hoveredRegionId === null) {
        setAutoActiveRegionIndex(0) // Start with the first card
      }
    }, 2000) // 2 seconds initial delay

    return () => {
      if (autoStartTimeoutRef.current) {
        clearTimeout(autoStartTimeoutRef.current)
      }
    }
  }, [selectedTab]) // Re-run when tab changes

  const handleMouseEnter = (id: string) => {
    setHoveredRegionId(id)
    // When user hovers, stop auto-animation immediately
    if (autoCycleIntervalRef.current) {
      clearInterval(autoCycleIntervalRef.current)
    }
    if (autoStartTimeoutRef.current) {
      clearTimeout(autoStartTimeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    setHoveredRegionId(null)
    // The useEffect for auto-cycling will automatically restart the interval
    // because hoveredRegionId will become null.
  }

  const handleTabChange = (tab: "india" | "international") => {
    setSelectedTab(tab)
  }

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-gilroy text-gray-900 mb-4">Explore The World</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto font-gilroy">
          Browse top domestic and international travel experiences tailored for every kind of traveler.
        </p>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => handleTabChange("india")}
              className={`px-8 py-3 rounded-full font-medium font-gilroy transition-all duration-300 ${
                selectedTab === "india" ? "bg-orange-500 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              India
            </button>
            <button
              onClick={() => handleTabChange("international")}
              className={`px-8 py-3 rounded-full font-medium font-gilroy transition-all duration-300 ${
                selectedTab === "international"
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              International
            </button>
          </div>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="relative h-[600px]">
        <div className="relative h-full flex gap-4 px-4 items-center justify-center z-10">
          {currentRegions.map((region, index) => {
            // Prioritize user hover over auto-animation
            const isActive =
              hoveredRegionId === region.id || (hoveredRegionId === null && autoActiveRegionIndex === index)
            const isAnyCardActive = hoveredRegionId !== null || hoveredRegionId === null // Check if any card is active either by hover or auto-animation

            let widthClass = "w-[190px]" // Default width for collapsed state
            if (isAnyCardActive) {
              widthClass = isActive ? "w-[600px]" : "w-[190px]" // Expanded width 600px, collapsed 190px
            }

            return (
              <div
                key={region.id}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-400 ease-in-out h-[495px] ${widthClass}`}
                onMouseEnter={() => handleMouseEnter(region.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Background Image */}
                <Image
                  src={region.image || "/placeholder.svg"}
                  alt={region.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 z-10 opacity-100`} // Gradient always visible
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 46.36%, rgba(0, 0, 0, 0.67) 78.5%, rgba(0, 0, 0, 0.95) 100%)",
                  }}
                />

                {/* Text for expanded state */}
                <div
                  className={`absolute bottom-6 left-8 flex flex-col gap-2 z-20 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Left Heading Section */}
                    <div className="flex flex-col gap-0.5">
                      <p className="text-lg uppercase font-normal font-gilroy text-white opacity-70 whitespace-nowrap">
                        Explore The Best Of
                      </p>
                      <h2 className="leading-tight text-white whitespace-nowrap font-gilroy text-4xl font-medium">
                        {region.title}
                      </h2>
                    </div>
                    {/* Right Paragraph Section */}
                    <p className="text-sm font-light text-gray-300 max-w-[240px] font-gilroy leading-tight">{region.description}</p>
                  </div>
                </div>

                {/* Vertical text for collapsed state */}
                <div
                  className={`absolute inset-0 z-10 transition-opacity duration-300 flex items-end justify-end pb-4 pr-10 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3
                    className="leading-none text-white whitespace-nowrap font-gilroy text-center font-medium text-4xl"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {region.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { ExploreRegions }

"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const regions = [
  {
    id: "north",
    title: "North India",
    description: "Embark on an enchanting Himalayan odyssey of cultures and majestic landscapes in North India.",
    image: "/images/north-india-winter-village.jpeg",
  },
  {
    id: "south",
    title: "South India",
    description: "Discover tropical paradises, ancient temples, and vibrant cultures in South India.",
    image: "/images/south-india-beach.jpeg",
  },
  {
    id: "west",
    title: "West India",
    description: "Experience royal heritage, golden deserts, and vibrant traditions in West India.",
    image: "/images/west-india-desert.png",
  },
  {
    id: "east",
    title: "East India",
    description: "Explore pristine nature, rich culture, and spiritual heritage in East India.",
    image: "/images/east-india-waters.png",
  },
]

export function ExploreRegions() {
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null)
  const [autoActiveRegionIndex, setAutoActiveRegionIndex] = useState(0)

  const autoStartTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoCycleIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Effect for auto-animation cycling
  useEffect(() => {
    // Clear any existing interval first
    if (autoCycleIntervalRef.current) {
      clearInterval(autoCycleIntervalRef.current)
    }

    // Only start auto-animation if no region is currently hovered
    if (hoveredRegionId === null) {
      autoCycleIntervalRef.current = setInterval(() => {
        setAutoActiveRegionIndex((prevIndex) => (prevIndex + 1) % regions.length)
      }, 2000) // Cycle every 2 seconds
    }

    // Cleanup function
    return () => {
      if (autoCycleIntervalRef.current) {
        clearInterval(autoCycleIntervalRef.current)
      }
    }
  }, [hoveredRegionId]) // Re-run when hoveredRegionId changes

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
  }, []) // Run only once on mount

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

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-100">
      {/* Content Grid - Horizontal Layout */}
      <div className="relative h-full flex gap-4 p-4 z-10">
        {regions.map((region, index) => {
          // Prioritize user hover over auto-animation
          const isActive =
            hoveredRegionId === region.id || (hoveredRegionId === null && autoActiveRegionIndex === index)
          const isAnyCardActive = hoveredRegionId !== null || hoveredRegionId === null // Check if any card is active either by hover or auto-animation

          let widthClass = "w-1/4" // Default width
          if (isAnyCardActive) {
            widthClass = isActive ? "w-[40%]" : "w-[20%]"
          }

          return (
            <div
              key={region.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-400 ease-in-out ${widthClass}`}
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

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Text for expanded state */}
              <div
                className={`absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-lg text-white/90 mb-2">Explore The Best Of</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{region.title}</h2>
                <p className="text-lg text-white/90 max-w-md leading-relaxed">{region.description}</p>
              </div>

              {/* Vertical text for collapsed state */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white transform -rotate-90 whitespace-nowrap">
                  {region.title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

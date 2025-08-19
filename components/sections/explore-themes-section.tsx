"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ExploreThemesSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const cardsPerPage = 4
  const totalPages = 4 // 13 cards total: 4+4+4+1

  const themes = [
    {
      id: 1,
      title: "Solo Travel",
      description: "Travel solo and enjoy your peaceful journey",
      image: "/images/solo-travel-taj-mahal.jpeg",
    },
    {
      id: 2,
      title: "Romantic Travel",
      description: "Travel with your partner to the most beautiful places",
      image: "/images/romantic-winter-mountains.jpeg",
    },
    {
      id: 3,
      title: "Family Travel",
      description: "Travel with your loved ones & enjoy your journey",
      image: "/images/family-beach-sunset.jpeg",
    },
    {
      id: 4,
      title: "Destination Wedding",
      description: "Travel with your loved ones & celebrate your wedding",
      image: "/images/destination-wedding-pool.jpeg",
    },
    {
      id: 5,
      title: "Adventure Travel",
      description: "Go through many adventurous places all across the globe",
      image: "/images/adventure-mountain-hiker.jpeg",
    },
    {
      id: 6,
      title: "Luxury Travel",
      description: "Experience premium comfort and world-class service",
      image: "/images/luxury-concert-experience.jpeg",
    },
    {
      id: 7,
      title: "Cultural Heritage",
      description: "Discover ancient traditions and historical wonders",
      image: "/images/cultural-heritage-celebration.jpeg",
    },
    {
      id: 8,
      title: "Wildlife Safari",
      description: "Encounter exotic wildlife in their natural habitat",
      image: "/images/wildlife-safari-wilderness.jpeg",
    },
    {
      id: 9,
      title: "Beach Getaway",
      description: "Relax on pristine beaches with crystal clear waters",
      image: "/images/golden-temple-architecture.jpeg",
    },
    {
      id: 10,
      title: "Mountain Retreat",
      description: "Find peace in the serene beauty of mountain landscapes",
      image: "/images/zebra-safari-grassland.jpeg",
    },
    {
      id: 11,
      title: "Spiritual Journey",
      description: "Embark on a transformative spiritual experience",
      image: "/images/spiritual-journey-hiking.jpeg",
    },
    {
      id: 12,
      title: "Food & Culinary",
      description: "Savor authentic flavors and culinary traditions",
      image: "/images/tropical-beach-paradise.jpeg",
    },
    {
      id: 13,
      title: "Photography Tours",
      description: "Capture stunning moments and breathtaking landscapes",
      image: "/images/photography-landscape-retreat.jpeg",
    },
  ]

  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    return themes.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#16242a] mb-4">Explore Our Themes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose from various themes that are hand curated</p>
        </div>

        {/* Navigation and Cards Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center hover:bg-[#e55a00] transition-colors duration-300 shadow-lg"
            aria-label="Previous themes"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center hover:bg-[#e55a00] transition-colors duration-300 shadow-lg"
            aria-label="Next themes"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
            {getCurrentPageCards().map((theme) => (
              <div
                key={theme.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <img
                    src={theme.image || "/placeholder.svg"}
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#16242a] mb-3">{theme.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{theme.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentPage ? "bg-[#ff6b00]" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              Page {currentPage + 1} of {totalPages} • Showing {getCurrentPageCards().length} of {themes.length} themes
            </span>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#ff6b00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-md font-medium transition-colors text-lg">
            Explore All Themes
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"

export function ExperienceExtraordinarySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 6

  // Carousel auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-gilroy text-gray-900 mb-4">Experience the Extraordinary</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-gilroy">
            Immerse yourself in extraordinary journeys tailored to your style
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="w-full flex-shrink-0 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/female-hiker-mountains.jpg"
                  alt="Solo Female Traveler hiking in mountains"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-gilroy mb-3">Solo/Group Female Travelers</h3>
                  <p className="text-lg mb-6 text-gray-200 font-gilroy">Your safety and peace of mind are our utmost priorities</p>
                  <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-full font-gilroy font-medium transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="w-full flex-shrink-0 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/sunflower-field-wedding.jpeg"
                  alt="Adventure Travel"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-gilroy mb-3">Adventure Seekers</h3>
                  <p className="text-lg mb-6 text-gray-200 font-gilroy">Thrilling experiences for the bold and adventurous</p>
                  <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-full font-gilroy font-medium transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="w-full flex-shrink-0 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/starry-mountain-night.jpeg"
                  alt="Luxury Travel - Starry mountain night sky"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-gilroy mb-3">Luxury Escapes</h3>
                  <p className="text-lg mb-6 text-gray-200 font-gilroy">Indulge in premium experiences and world-class service</p>
                  <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-full font-gilroy font-medium transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="w-full flex-shrink-0 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/family-campfire-night.jpeg"
                  alt="Family gathered around campfire under starry sky"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-gilroy mb-3">Family Adventures</h3>
                  <p className="text-lg mb-6 text-gray-200 font-gilroy">Creating unforgettable memories for the whole family</p>
                  <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-full font-gilroy font-medium transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="w-full flex-shrink-0 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/modern-cultural-lobby.jpeg"
                  alt="Modern hotel lobby showcasing contemporary cultural design"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-gilroy mb-3">Cultural Immersion</h3>
                  <p className="text-lg mb-6 text-gray-200 font-gilroy">Discover rich heritage and authentic local experiences</p>
                  <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-full font-gilroy font-medium transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Slide 6 */}
              <div className="w-full flex-shrink-0 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/wellness-beach-sunset.jpeg"
                  alt="Group wellness gathering at sunset beach"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold font-gilroy mb-3">Wellness Retreats</h3>
                  <p className="text-lg mb-6 text-gray-200 font-gilroy">Rejuvenate your mind, body, and soul</p>
                  <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-full font-gilroy font-medium transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#ff6a00]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

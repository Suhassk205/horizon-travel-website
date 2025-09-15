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
    <div className="bg-gray-50 pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 
            className="mb-0"
            style={{
              color: '#16242A',
              fontSize: '42px',
              fontFamily: 'Gilroy',
              fontWeight: '600',
              lineHeight: '64px',
              wordWrap: 'break-word'
            }}
          >
            Experience the Extraordinary
          </h2>
          <p
            className="text-lg black-600 max-w-3xl mx-auto font-gilroy"
            style={{
              fontWeight: '500'
            }}
          >
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
              <div className="w-full flex-shrink-0 relative h-[372px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/female-hiker-mountains.jpg"
                  alt="Solo Female Traveler hiking in mountains"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontSize: '42px',
                      fontFamily: 'Gilroy',
                      fontWeight: '600',
                      wordWrap: 'break-word'
                    }}
                  >
                    Solo/Group Female Travelers
                  </h3>
                  <p 
                    className="mb-6"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      lineHeight: '32px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Your safety and peace of mind are our utmost priorities
                  </p>
                  <div 
                    style={{
                      paddingLeft: '24px', 
                      paddingRight: '24px', 
                      paddingTop: '16px', 
                      paddingBottom: '16px', 
                      background: '#FF6A00', 
                      borderRadius: '10px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        textAlign: 'center', 
                        color: 'white', 
                        fontSize: '14px', 
                        fontFamily: 'Gilroy', 
                        fontWeight: '500', 
                        textTransform: 'capitalize', 
                        wordWrap: 'break-word'
                      }}
                    >
                      Explore Now
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots - Inside Slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[10px] z-20">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#FF6A00]" : "bg-[rgba(217,217,217,0.20)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="w-full flex-shrink-0 relative h-[372px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/sunflower-field-wedding.jpeg"
                  alt="Adventure Travel"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontSize: '42px',
                      fontFamily: 'Gilroy',
                      fontWeight: '600',
                      wordWrap: 'break-word'
                    }}
                  >
                    Adventure Seekers
                  </h3>
                  <p 
                    className="mb-6"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      lineHeight: '32px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Thrilling experiences for the bold and adventurous
                  </p>
                  <div 
                    style={{
                      paddingLeft: '24px', 
                      paddingRight: '24px', 
                      paddingTop: '16px', 
                      paddingBottom: '16px', 
                      background: '#FF6A00', 
                      borderRadius: '10px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        textAlign: 'center', 
                        color: 'white', 
                        fontSize: '14px', 
                        fontFamily: 'Gilroy', 
                        fontWeight: '500', 
                        textTransform: 'capitalize', 
                        wordWrap: 'break-word'
                      }}
                    >
                      Explore Now
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots - Inside Slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[10px] z-20">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#FF6A00]" : "bg-[rgba(217,217,217,0.20)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide 3 */}
              <div className="w-full flex-shrink-0 relative h-[372px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/starry-mountain-night.jpeg"
                  alt="Luxury Travel - Starry mountain night sky"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontSize: '42px',
                      fontFamily: 'Gilroy',
                      fontWeight: '600',
                      wordWrap: 'break-word'
                    }}
                  >
                    Luxury Escapes
                  </h3>
                  <p 
                    className="mb-6"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      lineHeight: '32px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Indulge in premium experiences and world-class service
                  </p>
                  <div 
                    style={{
                      paddingLeft: '24px', 
                      paddingRight: '24px', 
                      paddingTop: '16px', 
                      paddingBottom: '16px', 
                      background: '#FF6A00', 
                      borderRadius: '10px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        textAlign: 'center', 
                        color: 'white', 
                        fontSize: '14px', 
                        fontFamily: 'Gilroy', 
                        fontWeight: '500', 
                        textTransform: 'capitalize', 
                        wordWrap: 'break-word'
                      }}
                    >
                      Explore Now
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots - Inside Slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[10px] z-20">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#FF6A00]" : "bg-[rgba(217,217,217,0.20)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide 4 */}
              <div className="w-full flex-shrink-0 relative h-[372px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/family-campfire-night.jpeg"
                  alt="Family gathered around campfire under starry sky"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontSize: '42px',
                      fontFamily: 'Gilroy',
                      fontWeight: '600',
                      wordWrap: 'break-word'
                    }}
                  >
                    Family Adventures
                  </h3>
                  <p 
                    className="mb-6"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      lineHeight: '32px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Creating unforgettable memories for the whole family
                  </p>
                  <div 
                    style={{
                      paddingLeft: '24px', 
                      paddingRight: '24px', 
                      paddingTop: '16px', 
                      paddingBottom: '16px', 
                      background: '#FF6A00', 
                      borderRadius: '10px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        textAlign: 'center', 
                        color: 'white', 
                        fontSize: '14px', 
                        fontFamily: 'Gilroy', 
                        fontWeight: '500', 
                        textTransform: 'capitalize', 
                        wordWrap: 'break-word'
                      }}
                    >
                      Explore Now
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots - Inside Slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[10px] z-20">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#FF6A00]" : "bg-[rgba(217,217,217,0.20)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide 5 */}
              <div className="w-full flex-shrink-0 relative h-[372px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/modern-cultural-lobby.jpeg"
                  alt="Modern hotel lobby showcasing contemporary cultural design"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontSize: '42px',
                      fontFamily: 'Gilroy',
                      fontWeight: '600',
                      wordWrap: 'break-word'
                    }}
                  >
                    Cultural Immersion
                  </h3>
                  <p 
                    className="mb-6"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      lineHeight: '32px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Discover rich heritage and authentic local experiences
                  </p>
                  <div 
                    style={{
                      paddingLeft: '24px', 
                      paddingRight: '24px', 
                      paddingTop: '16px', 
                      paddingBottom: '16px', 
                      background: '#FF6A00', 
                      borderRadius: '10px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        textAlign: 'center', 
                        color: 'white', 
                        fontSize: '14px', 
                        fontFamily: 'Gilroy', 
                        fontWeight: '500', 
                        textTransform: 'capitalize', 
                        wordWrap: 'break-word'
                      }}
                    >
                      Explore Now
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots - Inside Slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[10px] z-20">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#FF6A00]" : "bg-[rgba(217,217,217,0.20)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide 6 */}
                <div className="w-full flex-shrink-0 relative h-[372px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-3xl"></div>
                <img
                  src="/images/wellness-beach-sunset.jpeg"
                  alt="Group wellness gathering at sunset beach"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      color: 'white',
                      fontSize: '42px',
                      fontFamily: 'Gilroy',
                      fontWeight: '600',
                      wordWrap: 'break-word'
                    }}
                  >
                    Wellness Retreats
                  </h3>
                  <p 
                    className="mb-6"
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontFamily: 'Gilroy',
                      fontWeight: '500',
                      lineHeight: '32px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Rejuvenate your mind, body, and soul
                  </p>
                  <div 
                    style={{
                      paddingLeft: '24px', 
                      paddingRight: '24px', 
                      paddingTop: '16px', 
                      paddingBottom: '16px', 
                      background: '#FF6A00', 
                      borderRadius: '10px', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        textAlign: 'center', 
                        color: 'white', 
                        fontSize: '14px', 
                        fontFamily: 'Gilroy', 
                        fontWeight: '500', 
                        textTransform: 'capitalize', 
                        wordWrap: 'break-word'
                      }}
                    >
                      Explore Now
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots - Inside Slide */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[10px] z-20">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#FF6A00]" : "bg-[rgba(217,217,217,0.20)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

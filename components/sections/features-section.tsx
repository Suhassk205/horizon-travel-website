export function FeaturesSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-20">
      {/* Background Airplane Silhouette - Positioned exactly behind "We offer the Best" */}
      <div className="absolute top-[-55px] left-[213px] w-[993.73px] h-[422.32px] opacity-45 z-0">
        {/* NOTE: Using a placeholder. A real transparent silhouette PNG would look better. */}
        <img
          src="/images/airplane-silhouette.png"
          alt="Airplane silhouette background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Image from Figma */}
      <div className="absolute" style={{width: '394.93px', height: '418.45px', top: '295px', left: '-19px', zIndex: 10}}>
        <img
          src="/images/right-image.png"
          alt="Decorative right image"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Left Image from Figma */}
      <div className="absolute" style={{width: '491.19px', height: '512.09px', top: '310px', left: '968px', zIndex: 10}}>
        <img
          src="/images/left-image.png"
          alt="Decorative left image"
          className="w-full h-full object-contain"
        />
      </div>

      {/* New Decorative Diamond SVG */}
      <svg 
        width="46.03185574906357" 
        height="46.03185574906357" 
        viewBox="0 0 46.03185574906357 46.03185574906357" 
        className="absolute z-5"
        style={{top: '789.55px', left: '968px'}}
      >
        <rect 
          x="6.738" y="6.738" 
          width="32.555" height="32.555" 
          fill="#b8dff0" 
          transform="rotate(45 23.0155 23.0155)" 
          rx="6" ry="6"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative z-20 mt-12">
          <h2 className="text-[42px] font-bold leading-none text-black mb-6">We offer the Best</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trust us to offer the best and take your travel experience to the next level
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#7dc8e6] z-10"></div>

          {/* Timeline Start Diamond */}
          <svg width="34" height="34" viewBox="0 0 34 34" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" style={{top: 0}}>
            <rect x="17" y="11" width="12" height="12" fill="#7dc8e6" transform="rotate(45 12 12)" />
          </svg>

          {/* Timeline End Diamond */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20" style={{bottom: 0}}>
            <rect x="6" y="6" width="12" height="12" fill="#7dc8e6" transform="rotate(45 12 12)" />
          </svg>

          {/* Feature Timeline Items */}
          <div className="space-y-16 pt-4 relative z-15">
            {/* Feature 1 - Convenience (Text on Right) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6"></div>
              <div className="flex justify-center relative z-20">
                <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div className="w-1/2 pl-6 mr-auto">
                <div className="space-y-3 max-w-xs text-left">
                  <h3 className="text-2xl font-bold text-black">Convenience</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    We offer an easy-to-use platform to book their trips and manage their itineraries from anywhere, at
                    any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Wide Selection (Text on Left) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6 ml-auto">
                <div className="space-y-3 max-w-xs text-right ml-auto">
                  <h3 className="text-2xl font-bold text-black">Wide Selection</h3>
                  <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                    We hand-picked hotels individually
                    to offer you the largest selection
                    of hotels all over India.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-20">
                <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div className="w-1/2 pl-6"></div>
            </div>

            {/* Feature 3 - Secure Bookings (Text on Right) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6"></div>
              <div className="flex justify-center relative z-20">
                <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div className="w-1/2 pl-6 mr-auto">
                <div className="space-y-3 max-w-xs text-left">
                  <h3 className="text-2xl font-bold text-black">Secure Bookings</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    All reservations are processed by horizon, that makes it for its users a trusted booking platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - Competitive Pricing (Text on Left) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6 ml-auto">
                <div className="space-y-3 max-w-xs text-right ml-auto">
                  <h3 className="text-2xl font-bold text-black">Competitive Pricing</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Get reasonable pricing on all our packages and enjoy your travel experience.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-20">
                <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  4
                </div>
              </div>
              <div className="w-1/2 pl-6"></div>
            </div>

            {/* Feature 5 - Flexible Pricing Options (Text on Right) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6"></div>
              <div className="flex justify-center relative z-20">
                <div className="w-20 h-20 bg-[#ff6600] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  5
                </div>
              </div>
              <div className="w-1/2 pl-6 mr-auto">
                <div className="space-y-3 max-w-xs text-left">
                  <h3 className="text-2xl font-bold text-black">Flexible Pricing Options</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Enjoy the benefits of price adjustments, including price increases and decreases, ensuring you get
                    the best value for your bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
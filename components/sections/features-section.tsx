export function FeaturesSection() {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden py-20">
      {/* Background Airplane Silhouette - Slightly shifted left for responsiveness */}
      <div className="absolute top-[-55px] left-1/2 transform -translate-x-[50.45%] w-[993.73px] h-[422.32px] opacity-70 z-0">
        {/* NOTE: Using a placeholder. A real transparent silhouette PNG would look better. */}
        <img
          src="/images/airplane-silhouette.png"
          alt="Airplane silhouette background"
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0.8) saturate(1.2) hue-rotate(5deg)' }}
        />
      </div>

      {/* Right Image from Figma */}
      <div className="absolute" style={{width: '394.93px', height: '418.45px', top: '295px', left: '-80px', zIndex: 10}}>
        <img
          src="/images/right-img.png"
          alt="Decorative right image"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Left Image from Figma */}
      <div className="absolute" style={{width: '491.19px', height: '512.09px', top: '310px', right: '-80px', zIndex: 10}}>
        <img
          src="/images/left-img.png"
          alt="Decorative left image"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative z-20 mt-12">
          <h2
            className="mb-0"
            style={{
              color: "#16242A",
              fontSize: "42px",
              fontFamily: "Gilroy",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            We offer the Best
          </h2>
          <p
            className="mb-8"
            style={{
              color: "#29383E",
              fontSize: "18px",
              fontFamily: "Gilroy",
              fontWeight: "500",
              lineHeight: "32px",
              wordWrap: "break-word",
            }}
          >
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
                <div 
                  style={{
                    display: 'flex',
                    width: '80px',
                    height: '75px',
                    padding: '12px 25px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px',
                    flexShrink: 0,
                    borderRadius: '100px',
                    background: '#FF6B00',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Gilroy',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '32px'
                  }}
                  className="shadow-lg"
                >
                  1
                </div>
              </div>
              <div className="w-1/2 pl-6 mr-auto">
                <div className="space-y-3 text-left" style={{ width: '251px' }}>
                  <h3 
                    style={{
                      color: '#16242A',
                      textAlign: 'left',
                      fontFamily: 'Gilroy',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '22px'
                    }}
                  >
                    Convenience
                  </h3>
                  <p 
                    style={{
                      color: '#29383E',
                      fontFamily: 'Gilroy',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '22px'
                    }}
                  >
                    We offer an easy-to-use platform to book their trips and manage their itineraries from anywhere, at
                    any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Wide Selection (Text on Left) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6 ml-auto">
                <div className="space-y-3 text-right ml-auto" style={{ width: '252px' }}>
                  <h3 
                    style={{
                      color: '#16242A',
                      textAlign: 'right',
                      fontFamily: 'Gilroy',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '22px'
                    }}
                  >
                    Wide Selection
                  </h3>
                  <p 
                    style={{
                      color: '#29383E',
                      fontFamily: 'Gilroy',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '22px'
                    }}
                  >
                    We hand-picked hotels individually
                    to offer you the largest selection
                    of hotels all over India.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-20">
                <div 
                  style={{
                    display: 'flex',
                    width: '80px',
                    height: '75px',
                    padding: '12px 25px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px',
                    flexShrink: 0,
                    borderRadius: '100px',
                    background: '#FF6B00',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Gilroy',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '32px'
                  }}
                  className="shadow-lg"
                >
                  2
                </div>
              </div>
              <div className="w-1/2 pl-6"></div>
            </div>

            {/* Feature 3 - Secure Bookings (Text on Right) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6"></div>
              <div className="flex justify-center relative z-20">
                <div 
                  style={{
                    display: 'flex',
                    width: '80px',
                    height: '75px',
                    padding: '12px 25px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px',
                    flexShrink: 0,
                    borderRadius: '100px',
                    background: '#FF6B00',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Gilroy',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '32px'
                  }}
                  className="shadow-lg"
                >
                  3
                </div>
              </div>
              <div className="w-1/2 pl-6 mr-auto">
                <div className="space-y-3 text-left" style={{ width: '253px' }}>
                  <h3 
                    style={{
                      color: '#16242A',
                      textAlign: 'left',
                      fontFamily: 'Gilroy',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '22px'
                    }}
                  >
                    Secure Bookings
                  </h3>
                  <p 
                    style={{
                      color: '#29383E',
                      fontFamily: 'Gilroy',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '22px'
                    }}
                  >
                    All reservations are processed by horizon, that makes it for its users a trusted booking platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - Competitive Pricing (Text on Left) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6 ml-auto">
                <div className="space-y-3 text-right ml-auto" style={{ width: '254px' }}>
                  <h3 
                    style={{
                      color: '#16242A',
                      textAlign: 'right',
                      fontFamily: 'Gilroy',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '22px'
                    }}
                  >
                    Competitive Pricing
                  </h3>
                  <p 
                    style={{
                      color: '#29383E',
                      fontFamily: 'Gilroy',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '22px'
                    }}
                  >
                    Get reasonable pricing on all our packages and enjoy your travel experience.
                  </p>
                </div>
              </div>
              <div className="flex justify-center relative z-20">
                <div 
                  style={{
                    display: 'flex',
                    width: '80px',
                    height: '75px',
                    padding: '12px 25px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px',
                    flexShrink: 0,
                    borderRadius: '100px',
                    background: '#FF6B00',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Gilroy',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '32px'
                  }}
                  className="shadow-lg"
                >
                  4
                </div>
              </div>
              <div className="w-1/2 pl-6"></div>
            </div>

            {/* Feature 5 - Flexible Pricing Options (Text on Right) */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-6"></div>
              <div className="flex justify-center relative z-20">
                <div 
                  style={{
                    display: 'flex',
                    width: '80px',
                    height: '75px',
                    padding: '12px 25px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px',
                    flexShrink: 0,
                    borderRadius: '100px',
                    background: '#FF6B00',
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Gilroy',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '32px'
                  }}
                  className="shadow-lg"
                >
                  5
                </div>
              </div>
              <div className="w-1/2 pl-6 mr-auto">
                <div className="space-y-3 text-left" style={{ width: '255px' }}>
                  <h3 
                    style={{
                      color: '#16242A',
                      textAlign: 'left',
                      fontFamily: 'Gilroy',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '22px'
                    }}
                  >
                    Flexible Pricing Options
                  </h3>
                  <p 
                    style={{
                      color: '#29383E',
                      fontFamily: 'Gilroy',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '22px'
                    }}
                  >
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
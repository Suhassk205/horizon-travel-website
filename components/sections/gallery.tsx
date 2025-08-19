"use client"

export function Gallery() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a look at the beautiful images of our happy customers
          </p>
        </div>

        {/* Gallery Collage */}
        <div className="relative h-[500px] mx-auto max-w-7xl overflow-hidden">
          {/* First Image - Taj Mahal with exact specifications */}
          <div
            className="absolute overflow-hidden shadow-lg"
            style={{
              width: "364.88px",
              height: "243.26px",
              top: "220px",
              left: "-76px",
              transform: "rotate(-4.04deg)",
              zIndex: 10,
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8be38e7e324ca24db73328b9b8713e7597e28673.jpg-HLKTauruq2ahBIT9UPog4Ou0nCPXw1.jpeg"
              alt="Taj Mahal with dramatic cloudy sky"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image - Happy travelers by mountain lake */}
          <div
            className="absolute overflow-hidden shadow-lg"
            style={{
              width: "364.8881912620351px",
              height: "243.25879417469008px",
              top: "196px",
              left: "263px",
              transform: "rotate(5.38deg)",
              zIndex: 9,
            }}
          >
            <img
              src="/images/happy-travelers-lake.jpeg"
              alt="Three happy travelers celebrating by a turquoise mountain lake"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Image - Travelers at mosque architecture */}
          <div
            className="absolute overflow-hidden shadow-lg"
            style={{
              width: "364.8881912620351px",
              height: "243.25879417469008px",
              top: "196px",
              left: "596px",
              transform: "rotate(-5.38deg)",
              zIndex: 8,
            }}
          >
            <img
              src="/images/mosque-architecture-travelers.jpeg"
              alt="Travelers exploring beautiful Islamic architecture with arches and minarets"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fourth Image - Traveler at ornate palace doorway */}
          <div
            className="absolute overflow-hidden shadow-lg"
            style={{
              width: "364.88818476859194px",
              height: "243.25878984572796px",
              top: "203.88px",
              left: "896.85px",
              transform: "rotate(5.13deg)",
              zIndex: 7,
            }}
          >
            <img
              src="/images/palace-doorway-traveler.png"
              alt="Traveler celebrating in front of ornate palace doorway with intricate Islamic architecture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Placeholder for future images */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 text-sm">
            {/* This div is just a placeholder for the gallery layout */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm font-medium">Share your travel moments with us</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

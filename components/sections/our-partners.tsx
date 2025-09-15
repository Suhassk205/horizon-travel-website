"use client"

import Image from "next/image"

export function OurPartners() {
  const partners = [
    {
      name: "Summit Hotels & Resorts",
      logo: "/images/summit-hotels-logo.png",
      alt: "Summit Hotels & Resorts logo",
      width: 200,
    },
    {
      name: "JW Marriott",
      logo: "/images/jw-marriott-logo.png",
      alt: "JW Marriott logo",
      width: 220,
    },
    {
      name: "TAJ",
      logo: "/images/taj-hotels-logo.png",
      alt: "TAJ Hotels logo",
      width: 150,
    },
    {
      name: "Marriott Bonvoy",
      logo: "/images/marriott-bonvoy-logo.png",
      alt: "Marriott Bonvoy logo",
      width: 250,
    },
  ]

  // Duplicate the partners array to create seamless looping
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
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
            Our Partners
          </h2>
          <p
              className="max-w-3xl mx-auto"
              style={{
                color: "#29383E",
                fontSize: "18px",
                fontFamily: "Gilroy",
              fontWeight: "500",
              lineHeight: "32px",
              wordWrap: "break-word",
            }}
          >
            Connecting and Growing with Our Trusted Network of Partners
          </p>
        </div>

        {/* Infinite Scrolling Partners Container */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edge Effect */}

          {/* Scrolling Container */}
          <div className="flex animate-scroll-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center h-50 transition-all duration-300 opacity-85 hover:opacity-100"
                style={{ width: `${partner.width}px` }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={partner.width}
                  height={110}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


       


      {/* Custom CSS for Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {  
          animation: scroll-left 20s linear infinite;
          width: calc(300% + 96px); /* 3x width for seamless loop + margin compensation */
        }

        /* Ensure smooth performance */
        .animate-scroll-left {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 15s; /* Slightly faster on mobile */
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left {
            animation: none;
            width: auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

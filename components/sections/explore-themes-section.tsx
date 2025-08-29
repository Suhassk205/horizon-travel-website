"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ExploreThemesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
      description: "Go through many adventurous places all across India",
      image: "/images/adventure-mountain-hiker.jpeg",
    },
    {
      id: 6,
      title: "Wildlife Travel",
      description: "Travel and explore the fauna around yourself",
      image: "/images/wildlife-safari-wilderness.jpeg",
    },
    {
      id: 7,
      title: "Festival Travel",
      description: "Travel to beautiful places during major festivals",
      image: "/images/cultural-heritage-celebration.jpeg",
    },
    {
      id: 8,
      title: "Group Travel",
      description: "Travel with your friend group and enjoy with them",
      image: "/images/happy-travelers-lake.jpeg",
    },
    {
      id: 9,
      title: "Nature Travel",
      description: "Travel and enjoy the beautiful flora of the nature",
      image: "/images/mountain-lake-paradise.jpeg",
    },
    {
      id: 10,
      title: "Religious Travel",
      description: "Travel to the popular religious places with your friends",
      image: "/images/golden-temple-architecture.jpeg",
    },
    {
      id: 11,
      title: "Offbeat Travel",
      description: "Travel and enjoy the beautiful offbeat experience",
      image: "/images/palace-doorway-traveler.png",
    },
    {
      id: 12,
      title: "Beach Paradise",
      description: "Travel and explore the beauty of beaches",
      image: "/images/tropical-beach-paradise.jpeg",
    },
    {
      id: 13,
      title: "Luxury Getaways",
      description: "Enjoy your travel with luxury getaways",
      image: "/images/heritage-hotel-luxury.jpeg",
    },
  ]

  const scroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-gilroy text-[#16242A]">Explore Our Themes</h2>
          <p className="text-lg text-gray-600 mt-2 font-gilroy">
            Choose from various themes that are hand curated
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {themes.map((theme, index) => (
              <div key={theme.id} className="flex-shrink-0 w-[258px]">
                <div className="relative h-[312px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-gilroy text-[#16242A]">{theme.title}</h3>
                <p className="text-gray-600 font-gilroy">{theme.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={scroll}
            className="absolute top-1/3 -right-4 transform -translate-y-1/2 bg-[#FF6A00] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

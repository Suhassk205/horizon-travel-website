"use client"

import { Fullscreen } from "lucide-react"
import Image from "next/image"

export function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
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
            Gallery
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              color: "#29383E",
              fontSize: "18px",
              fontFamily: "Gilroy",
              fontWeight: "500",
              lineHeight: "32px",
              wordWrap: "break-word",
            }}
          >
            Have a look at the beautiful images of our happy customers
          </p>
        </div>

        {/* New Gallery Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/images/image list.png"
            alt="A collage of travel photos from happy customers"
            width={1672}
            height={284}
            className="w-full h-auto object-cover"
          />
        </div>

        
      </div>
    </section>
  )
}

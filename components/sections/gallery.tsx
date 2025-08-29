"use client"

import Image from "next/image"

export function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className="mb-4"
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
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm font-medium font-gilroy">Share your travel moments with us</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

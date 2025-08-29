"use client"

import Image from "next/image"

export function Gallery() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-gilroy text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-gilroy">
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

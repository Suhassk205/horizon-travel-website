"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, Star, Clock, MapPin } from "lucide-react"
import NavBar from "./nav-bar"

export function AllOffersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Back button and breadcrumb */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-[#ff6a00] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Home className="w-4 h-4" />
                <Link href="/" className="hover:text-[#ff6a00] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">All Offers</span>
              </div>
            </div>

            {/* Right side - Page title */}
            <div>
              <h1 className="text-xl font-bold text-gray-900">All Offers</h1>
              <p className="text-sm text-gray-600">Discover amazing deals and exclusive offers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="w-full overflow-hidden rounded-lg">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            {/* Background Image */}
            <Image
              src="/images/offers-section-background.jpeg"
              alt="Traveler with luggage silhouetted under archway looking at dramatic sunset landscape"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-wider">OFFERS</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide">
                Travel More, Spend Less
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <p className="text-center text-gray-800 max-w-4xl mx-auto text-lg">
          Discover exclusive travel deals, early bird discounts, and special packages designed to make your dream vacation more affordable than ever.
        </p>
      </div>

      {/* All Offers Section */}
      <div className="px-4 py-16 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">All Offers</h2>
          <p className="text-gray-600 text-lg">Discover the exclusive offers to make your next trip even better.</p>
        </div>

        {/* Early Bird Special - Full Width Top Section */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Bird Special</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Book your next adventure 30 days in advance and save up to 25% on all travel packages. 
                Limited time offer for early planners!
              </p>
              <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Book Now
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/early-bird-offer.jpeg"
                  alt="Early Bird Travel Offer"
                  width={300}
                  height={200}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row - Family Package and Group Discount Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Family Package Deal */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col items-center text-center gap-6">
              <div>
                <Image
                  src="/images/family-package.jpeg"
                  alt="Family Travel Package"
                  width={200}
                  height={150}
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Family Package Deal</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Special 20% discount on family packages. Kids under 12 travel free!
                </p>
                <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Book Family Trip
                </button>
              </div>
            </div>
          </div>

          {/* Group Booking Discount */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col items-center text-center gap-6">
              <div>
                <Image
                  src="/images/group-booking.jpeg"
                  alt="Group Travel Booking"
                  width={200}
                  height={150}
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Group Booking Discount</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Book for 8+ people and get up to 30% off on your entire group trip.
                </p>
                <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Plan Group Trip
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weekend Getaway */}
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="mb-6">
              <Image
                src="/images/weekend-getaway.jpeg"
                alt="Weekend Getaway"
                width={160}
                height={120}
                className="mx-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Weekend Getaway</h3>
            <p className="text-gray-600 mb-6 text-sm">Special weekend packages starting from ₹5,999 per person</p>
            <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Book Weekend
            </button>
          </div>

          {/* International Flights */}
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="mb-6">
              <Image
                src="/images/international-flights.jpeg"
                alt="International Flights"
                width={160}
                height={120}
                className="mx-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">International Flights</h3>
            <p className="text-gray-600 mb-6 text-sm">Up to 40% off on international flight bookings</p>
            <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Book Flights
            </button>
          </div>

          {/* Hotel Stays */}
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="mb-6">
              <Image
                src="/images/hotel-stays.jpeg"
                alt="Hotel Stays"
                width={160}
                height={120}
                className="mx-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Hotel Stays</h3>
            <p className="text-gray-600 mb-6 text-sm">Get 2 nights free on every 5-night hotel booking</p>
            <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Book Hotels
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

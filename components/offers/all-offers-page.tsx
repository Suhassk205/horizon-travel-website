"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
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
                href="/dashboard"
                className="flex items-center gap-2 text-gray-600 hover:text-[#ff6a00] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Home className="w-4 h-4" />
                <Link href="/dashboard" className="hover:text-[#ff6a00] transition-colors">
                  Dashboard
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
        <p className="text-center text-gray-800 max-w-4xl mx-auto">
          Refer your friends to join Phoenix Fly and both enjoy exclusive rewards. Discover new destinations, create
          unforgettable memories, and start referring today!
        </p>
      </div>

      {/* How It Works Section */}
      <div className="px-4 py-16 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">How It Works</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Person making bookings"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="mb-2">
              <span className="text-[#ff6a00] font-semibold text-sm tracking-wider">STEP 1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Make Bookings</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Book from our multiple range of packages curated for you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Person earning reward points"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="mb-2">
              <span className="text-[#ff6a00] font-semibold text-sm tracking-wider">STEP 2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Reward Points</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Earn rewards points on every booking you make with us.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Person redeeming rewards"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="mb-2">
              <span className="text-[#ff6a00] font-semibold text-sm tracking-wider">STEP 3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Redeem Rewards</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Redeem 100% points on your next travel booking.</p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Person earning more rewards"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="mb-2">
              <span className="text-[#ff6a00] font-semibold text-sm tracking-wider">STEP 4</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Keep Earning More!</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Continue to earn reward points on every booking.</p>
          </div>
        </div>
      </div>

      {/* All Offers Section */}
      <div className="px-4 py-16 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">All Offers</h2>
          <p className="text-gray-600 text-lg">Discover the exclusive offers to make your next trip even better.</p>
        </div>

        {/* Phoenix Fly Rewards - Full Width Top Section */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phoenix Fly Rewards</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Turn every trip into a reward – earn points, unlock perks, and elevate your travel experience with
                Phoenix Fly Rewards.
              </p>
              <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore More
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Phoenix Fly Rewards Cards"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row - Refer & Earn and Tag & Earn Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Refer & Earn Rewards */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col items-center text-center gap-6">
              <div>
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Refer and Earn"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refer & Earn Rewards</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Refer. Earn. Repeat. Travel benefits made better with friends.
                </p>
                <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Refer Now
                </button>
              </div>
            </div>
          </div>

          {/* Tag & Earn Rewards */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col items-center text-center gap-6">
              <div>
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Tag and Earn"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tag & Earn Rewards</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Show off your adventures and unlock surprise rewards.
                </p>
                <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Tag Us Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 16th Night Reward */}
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=120&width=160"
                alt="16th Night Reward"
                width={160}
                height={120}
                className="mx-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">16th Night Reward</h3>
            <p className="text-gray-600 mb-6 text-sm">Get 50% off on your 16th night!</p>
            <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Start Booking
            </button>
          </div>

          {/* Group Booking Rewards */}
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=120&width=160"
                alt="Group Booking Rewards"
                width={160}
                height={120}
                className="mx-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Group Booking Rewards</h3>
            <p className="text-gray-600 mb-6 text-sm">Up to 50% off after 10 Bookings!</p>
            <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Start Booking
            </button>
          </div>

          {/* Cruise Vouchers */}
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=120&width=160"
                alt="Cruise Vouchers"
                width={160}
                height={120}
                className="mx-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Cruise Vouchers</h3>
            <p className="text-gray-600 mb-6 text-sm">Get INR 1000 cruise voucher after 10 bookings.</p>
            <button className="bg-[#ff6a00] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Start Booking
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

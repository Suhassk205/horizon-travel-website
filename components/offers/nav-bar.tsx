"use client"

import Image from "next/image"
import { useState } from "react"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronDown, User, Bell } from "lucide-react"

export function NavBar() {
  const router = useRouter()

  return (
    <nav className="flex items-center px-6 py-4 bg-white">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-5 h-5 relative">
            {/* Compass icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-[#000000] rounded-full relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#000000] rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-[#000000] rounded-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#000000] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#000000] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => router.push("/")}
          className="text-[#000000] font-semibold text-lg tracking-wide hover:text-[#626262] transition-colors"
        >
          Horizon
        </button>
      </div>

      <div className="flex items-center space-x-8 ml-16">
        <div className="flex items-center space-x-1 text-[#000000] cursor-pointer hover:text-[#626262] transition-colors">
          <span className="font-medium">Destination</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center space-x-1 text-[#000000] cursor-pointer hover:text-[#626262] transition-colors">
          <span className="font-medium">Explore Extraordinary</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center space-x-1 text-[#000000] cursor-pointer hover:text-[#626262] transition-colors">
          <span className="font-medium">Offers</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <span className="text-[#000000] cursor-pointer hover:text-[#626262] transition-colors font-medium">
          Support
        </span>
        <span className="text-[#000000] cursor-pointer hover:text-[#626262] transition-colors font-medium">
          Review & Ratings
        </span>
      </div>

      <div className="ml-auto mr-8 flex items-center space-x-4">
        {/* User Profile Icon */}
        <button
          onClick={() => router.push("/auth")}
          className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <User className="w-4 h-4 text-white" />
        </button>

        {/* Notification Bell Icon */}
        <button className="relative w-8 h-8 flex items-center justify-center hover:bg-black/10 rounded-full transition-colors cursor-pointer">
          <Bell className="w-5 h-5 text-gray-800" />
          {/* Orange notification dot */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border border-white"></span>
        </button>
      </div>
    </nav>
  )
}

export default function HorizonTravelPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How Do I Join Phoenix Fly Rewards?",
      answer:
        "You can join Phoenix Fly Rewards by creating an account on our website or mobile app. Simply sign up with your email address and start earning points on your first booking.",
    },
    {
      question: "Can I Earn Points On All Types Of Bookings?",
      answer:
        "Yes, you can earn points on flights, hotels, car rentals, and vacation packages. Different booking types may have different point earning rates.",
    },
    {
      question: "Q3: Can I Combine Points With Promotional Discounts?",
      answer:
        "In most cases, yes! You can combine your reward points with promotional discounts and special offers to maximize your savings on bookings.",
    },
    {
      question: "Can I Purchase A Status Instead Of Earning It Through Bookings?",
      answer:
        "Status levels are primarily earned through qualifying bookings and spending. However, we occasionally offer status challenges and promotions that may provide alternative paths to elite status.",
    },
    {
      question: "Can I Redeem My Points Fully For A Booking?",
      answer:
        "Yes, you can use your points to fully cover the cost of eligible bookings, subject to availability and terms. Some bookings may require a combination of points and cash.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="w-full overflow-hidden rounded-lg">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            {/* Background Image */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e08c3e9239ab30ad7c2655f0b87cf087f1dca1d.jpg-bQqkYdf4GlKpmtzaW5ERwlJwfQzbDc.jpeg"
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
              <span className="text-orange-500 font-semibold text-sm tracking-wider">STEP 1</span>
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
              <span className="text-orange-500 font-semibold text-sm tracking-wider">STEP 2</span>
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
              <span className="text-orange-500 font-semibold text-sm tracking-wider">STEP 3</span>
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
              <span className="text-orange-500 font-semibold text-sm tracking-wider">STEP 4</span>
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Start Booking
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Logo and Social Media */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-white"></div>
                </div>
                <span className="text-2xl font-bold text-white">Horizon</span>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-white hover:text-orange-400 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Center Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-400" />
                    <span>phoenixflytravel@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-400" />
                    <span>+91-8861524428</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Address</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">
                    3rd floor, above united medicals,
                    <br />
                    ramdev galli, belagavi - 590010
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Pages */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-white hover:text-orange-400 transition-colors">
                  Home
                </Link>
                <Link href="#" className="block text-white hover:text-orange-400 transition-colors">
                  Destinations
                </Link>
                <Link href="#" className="block text-white hover:text-orange-400 transition-colors">
                  Packages
                </Link>
                <Link href="#" className="block text-white hover:text-orange-400 transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block text-white hover:text-orange-400 transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-blue-700 mt-12 pt-8 text-center">
            <p className="text-white">© 2023 Horizon | Powered by Horizon</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

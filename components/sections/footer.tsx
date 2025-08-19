import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Twitter, Youtube, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Row 1: Quick Links, Services, Offers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-32">
          {/* Column 1: Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#16242A] uppercase tracking-wide mb-8">Quick Links</h3>
            <div className="space-y-4">
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Home</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Destinations</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Offers</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Support</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Blogs</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Review & Ratings</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Feedback</a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#16242A] uppercase tracking-wide mb-8">Services</h3>
            <div className="grid grid-cols-2 gap-x-24 gap-y-4">
              <div className="space-y-4">
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Packages</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Hotels</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Luxury Hotels</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Cruise</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Solo Female Travel</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Trekking</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Community Trips</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Activities</a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Cabs</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Train</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Bus</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Flights</a>
              </div>
            </div>
          </div>

          {/* Column 3: Offers */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#16242A] uppercase tracking-wide mb-8">Offers</h3>
            <div className="space-y-4">
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Summer Sale</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Diwali Sale</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Phoenix Fly Rewards</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Refer & Earn Rewards</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Tag & Earn Rewards</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">16th Night Rewards</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Group Booking Rewards</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Cruise Vouchers</a>
            </div>
          </div>
        </div>

        {/* Row 2: Packages, Destination Wedding, Group Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Column 1: Packages */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#16242A] uppercase tracking-wide mb-8">Packages</h3>
            <div className="space-y-4">
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">India</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">International</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">All</a>
            </div>
          </div>

          {/* Column 2: Destination Wedding */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#16242A] uppercase tracking-wide mb-8">Destination Wedding</h3>
            <div className="grid grid-cols-2 gap-x-24 gap-y-4">
              <div className="space-y-4">
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Overview</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Decor</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Mehendi</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Invites & Favours</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Catering</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">End-to-End Planning</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Entertainment</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Venue</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Pre-Wedding</a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Anniversary</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Ceremony</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Receptions</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Post-Wedding Celebrations</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Photography & Cinematography</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Accommodation</a>
                <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Travel & Transportation</a>
              </div>
            </div>
          </div>

          {/* Column 3: Group Bookings */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#16242A] uppercase tracking-wide mb-8">Group Bookings</h3>
            <div className="space-y-4">
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Overview</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Seminars</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Business Meetings</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Group Travel</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Product Launch</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Planning</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Receptions</a>
              <a href="#" className="block text-lg font-normal text-[#16242A] hover:text-orange-500 transition-colors">Accommodations</a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 opacity-60"></div>

      {/* Logo and Contact Section - Exact Figma Implementation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Tagline Section - Centered with exact 50px spacing */}
        <div className="flex flex-col items-center mb-[50px]">
          <div className="flex items-center justify-center mb-2.5">
            <Image
              src="/images/horizon-logo1.jpeg"
              alt="Horizon Logo"
              width={162}
              height={34}
              className="h-[34px] w-auto"
            />
          </div>
          <p className="text-lg font-semibold text-[#16242A] text-center max-w-2xl leading-[24px] tracking-[-0.02em]">
            For the dreamers, explorers, and memory-makers — your journey starts here.
          </p>
        </div>

        {/* Contact Details Section - Horizontal Row with exact Figma spacing */}
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
          {/* Contact Info - Left aligned */}
          <div className="text-left">
            <h4 className="text-lg font-bold text-[#16242A] uppercase mb-3">Contact us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-semibold text-[#16242A]">phoenixflytravel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-semibold text-[#16242A]">+91-8861524428</span>
              </div>
            </div>
          </div>

          {/* Address - Center aligned */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-[#16242A] uppercase mb-3">Address</h4>
            <div className="flex items-start justify-center space-x-2.5">
              <MapPin className="w-6 h-6 text-[#FF6A00] mt-1 flex-shrink-0" />
              <span className="text-lg font-semibold text-[#16242A] leading-[22px] max-w-md tracking-[-0.02em]">
                3rd floor, above united medicals, ramdev galli, Belagavi - 590010
              </span>
            </div>
          </div>

          {/* Social Media - Right aligned */}
          <div className="text-right">
            <h4 className="text-lg font-bold text-[#16242A] uppercase mb-3">Follow Us</h4>
            <div className="flex items-center space-x-4 justify-end">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-8 h-8 text-[#FF6A00]" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-8 h-8 text-[#FF6A00]" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle className="w-8 h-8 text-[#FF6A00]" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-8 h-8 text-[#FF6A00]" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="w-8 h-8 text-[#FF6A00]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-[#16242A]">
              © 2025 Phoenix Fly | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

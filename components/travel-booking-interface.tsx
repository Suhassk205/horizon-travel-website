"use client"

import { useState } from "react"
import { ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function TravelBookingInterface() {
  const [selectedCategory, setSelectedCategory] = useState("Packages")
  const [addFlight, setAddFlight] = useState(false)

  const categories = [
    { id: "Packages", label: "Packages", icon: "📦" },
    { id: "Hotels", label: "Hotels", icon: "🏨" },
    { id: "Cabs", label: "Cabs", icon: "🚗" },
    { id: "Activities", label: "Activities", icon: "⛰️" },
    { id: "Trains", label: "Trains", icon: "🚆" },
    { id: "Buses", label: "Buses", icon: "🚌" },
    { id: "Flights", label: "Flights", icon: "✈️" },
    { id: "Cruise", label: "Cruise", icon: "🚢" },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Category Tabs */}
      <div className="flex justify-center mb-0">
        <div className="flex bg-transparent rounded-t-2xl overflow-hidden">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 flex items-center gap-3 font-medium transition-all duration-200 ${
                index === 0 ? "rounded-tl-2xl" : ""
              } ${index === categories.length - 1 ? "rounded-tr-2xl" : ""} ${
                selectedCategory === category.id
                  ? "bg-gray-200 text-gray-800"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-b-2xl rounded-tr-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 items-end">
          {/* Leaving From */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">Leaving From</label>
            <div className="relative">
              <select className="w-full h-14 px-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium">
                <option>Select leaving Location</option>
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Destination */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">Destination</label>
            <div className="relative">
              <select className="w-full h-14 px-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium">
                <option>Select Destination</option>
                <option>Goa</option>
                <option>Kerala</option>
                <option>Rajasthan</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Theme */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
            <div className="relative">
              <select className="w-full h-14 px-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium">
                <option>Solo Travel</option>
                <option>Family Travel</option>
                <option>Romantic Travel</option>
                <option>Adventure Travel</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* From Date */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">From</label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD-MM"
                className="w-full h-14 px-4 pr-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium placeholder:text-gray-500"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* To Date */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">To</label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD-MM"
                className="w-full h-14 px-4 pr-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium placeholder:text-gray-500"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Travelers */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">Travelers</label>
            <div className="relative">
              <select className="w-full h-14 px-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium">
                <option>2 Traveler, 1 Room</option>
                <option>1 Traveler, 1 Room</option>
                <option>3 Travelers, 1 Room</option>
                <option>4 Travelers, 2 Rooms</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-1">
            <Button className="w-full h-14 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors text-base">
              Search
            </Button>
          </div>
        </div>

        {/* Add Flight Checkbox */}
        <div className="mt-8 flex items-center gap-3">
          <Checkbox
            id="add-flight"
            checked={addFlight}
            onCheckedChange={setAddFlight}
            className="data-[state=checked]:bg-slate-700 data-[state=checked]:border-slate-700 w-5 h-5"
          />
          <label htmlFor="add-flight" className="text-sm font-medium text-gray-700 cursor-pointer">
            Add a flight
          </label>
        </div>
      </div>
    </div>
  )
}

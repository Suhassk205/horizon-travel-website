import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function CustomizeBooking() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      {/* Main Heading - Outside the container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customize Your Booking</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Customize every aspect of your journey to fit your budget, schedule, and group dynamics.
        </p>
      </div>

      {/* Content Container with Background Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/new-tropical-beach-aerial.jpg"
              alt="Aerial view of tropical beach with turquoise water, colorful boats, and sandy shore"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Let Our Experts Tailor A <span className="text-[#ff6600]">Customized Package</span> That Caters To Your
                Preferences
              </h3>
              <p className="text-white/90 text-lg flex items-center">
                Fill in your requirements here{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-4">
              {/* Name Fields - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="h-14 bg-white/90 border-0 placeholder:text-gray-500 text-gray-800"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="h-14 bg-white/90 border-0 placeholder:text-gray-500 text-gray-800"
                />
              </div>

              {/* Email Field */}
              <Input
                type="email"
                placeholder="Your Email"
                className="h-14 bg-white/90 border-0 placeholder:text-gray-500 text-gray-800"
              />

              {/* Phone Field with Country Code */}
              <div className="flex">
                <div className="w-[80px] h-14 bg-white/90 rounded-l-md flex items-center justify-center border-r border-gray-200">
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/images/india-flag.png"
                      alt="India flag"
                      width={24}
                      height={16}
                      className="rounded-sm"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 flex-1 rounded-l-none bg-white/90 border-0 placeholder:text-gray-500 text-gray-800"
                />
              </div>

              {/* Destination and Travelers - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="h-14 bg-white/90 border-0 text-gray-800 placeholder:text-gray-500">
                    <SelectValue placeholder="Enter Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="goa">Goa</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                    <SelectItem value="andaman">Andaman & Nicobar</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="h-14 bg-white/90 border-0 text-gray-800">
                    <SelectValue placeholder="Travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2a1c">2 Adult, 1 Child</SelectItem>
                    <SelectItem value="2a">2 Adults</SelectItem>
                    <SelectItem value="1a">1 Adult</SelectItem>
                    <SelectItem value="4a">4 Adults</SelectItem>
                    <SelectItem value="2a2c">2 Adults, 2 Children</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Package Theme - Full width */}
              <Select>
                <SelectTrigger className="h-14 bg-white/90 border-0 text-gray-800">
                  <SelectValue placeholder="Choose Package Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beach">Beach Vacation</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="heritage">Heritage & Culture</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon</SelectItem>
                </SelectContent>
              </Select>

              {/* Budget and Date - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="h-14 bg-white/90 border-0 text-gray-800">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k-20k">10,000 to 20,000</SelectItem>
                    <SelectItem value="20k-30k">20,000 to 30,000</SelectItem>
                    <SelectItem value="30k-50k">30,000 to 50,000</SelectItem>
                    <SelectItem value="50k+">Above 50,000</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Select A Date"
                    className="h-14 bg-white/90 border-0 placeholder:text-gray-500 text-gray-800 pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                </div>
              </div>

              {/* Submit Button */}
              <Button className="w-full h-14 text-lg font-medium bg-[#ff6600] hover:bg-[#e55a00] text-white">
                Customize My Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

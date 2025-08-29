import {
  MapPin,
  Users,
  Star,
  Plane,
  Hotel,
  Car,
  Camera,
  Shield,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">WanderLust</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Destinations
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Packages
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Beautiful tropical destination"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Your Next
              <span className="block text-yellow-400">Adventure</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore breathtaking destinations, create unforgettable memories, and experience the world like never
              before.
            </p>

            {/* Search Form */}
            <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Destination</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Where to?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paris">Paris, France</SelectItem>
                        <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                        <SelectItem value="bali">Bali, Indonesia</SelectItem>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="santorini">Santorini, Greece</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Check-in</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Check-out</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Guests</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" size="lg">
                  Search Packages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the world's most beautiful places with our carefully curated travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Santorini, Greece",
                image: "/placeholder.svg?height=300&width=400",
                price: "From $1,299",
                rating: 4.9,
                reviews: 234,
              },
              {
                name: "Bali, Indonesia",
                image: "/placeholder.svg?height=300&width=400",
                price: "From $899",
                rating: 4.8,
                reviews: 189,
              },
              {
                name: "Paris, France",
                image: "/placeholder.svg?height=300&width=400",
                price: "From $1,599",
                rating: 4.9,
                reviews: 312,
              },
              {
                name: "Tokyo, Japan",
                image: "/placeholder.svg?height=300&width=400",
                price: "From $1,799",
                rating: 4.7,
                reviews: 156,
              },
              {
                name: "Maldives",
                image: "/placeholder.svg?height=300&width=400",
                price: "From $2,299",
                rating: 4.9,
                reviews: 98,
              },
              {
                name: "Dubai, UAE",
                image: "/placeholder.svg?height=300&width=400",
                price: "From $1,199",
                rating: 4.6,
                reviews: 203,
              },
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-gray-900">{destination.price}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                      <span className="text-sm text-gray-500">({destination.reviews} reviews)</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose WanderLust?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive travel services to make your journey seamless and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Plane className="h-8 w-8 text-blue-600" />,
                title: "Flight Booking",
                description: "Best deals on flights worldwide with flexible booking options.",
              },
              {
                icon: <Hotel className="h-8 w-8 text-blue-600" />,
                title: "Hotel Reservations",
                description: "Handpicked accommodations from luxury resorts to cozy boutiques.",
              },
              {
                icon: <Car className="h-8 w-8 text-blue-600" />,
                title: "Car Rentals",
                description: "Convenient car rental services in over 150 countries worldwide.",
              },
              {
                icon: <Camera className="h-8 w-8 text-blue-600" />,
                title: "Guided Tours",
                description: "Expert local guides to show you hidden gems and cultural insights.",
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Travel Insurance",
                description: "Comprehensive coverage for peace of mind during your travels.",
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "24/7 Support",
                description: "Round-the-clock customer support wherever you are in the world.",
              },
              {
                icon: <MapPin className="h-8 w-8 text-blue-600" />,
                title: "Custom Itineraries",
                description: "Personalized travel plans tailored to your preferences and budget.",
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Group Travel",
                description: "Special packages and discounts for group bookings and events.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specially curated travel packages offering the best value and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "European Grand Tour",
                description:
                  "14 days exploring Paris, Rome, Barcelona, and Amsterdam with guided tours and luxury accommodations.",
                image: "/placeholder.svg?height=300&width=500",
                price: "$3,299",
                duration: "14 Days",
                includes: ["Flights", "Hotels", "Tours", "Meals"],
              },
              {
                title: "Tropical Paradise Escape",
                description: "7 days in Maldives with overwater villa, spa treatments, and water sports activities.",
                image: "/placeholder.svg?height=300&width=500",
                price: "$4,599",
                duration: "7 Days",
                includes: ["Flights", "Villa", "Spa", "Activities"],
              },
            ].map((pkg, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      width={500}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{pkg.duration}</Badge>
                      <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.includes.map((item, i) => (
                          <Badge key={i} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Book This Package</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers who have experienced amazing journeys with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                comment:
                  "WanderLust made our honeymoon in Santorini absolutely perfect. Every detail was taken care of, and the experience exceeded our expectations!",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Michael Chen",
                location: "Toronto, Canada",
                rating: 5,
                comment:
                  "The European Grand Tour was incredible. Our guide was knowledgeable, and the itinerary was perfectly balanced between sightseeing and relaxation.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                rating: 5,
                comment:
                  "Outstanding service from start to finish. The 24/7 support was invaluable when we had a flight delay. Highly recommend WanderLust!",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, travel tips, and destination inspiration.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-white" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Plane className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">WanderLust</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted travel partner for unforgettable adventures around the world.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Travel Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Travel Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@wanderlust.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>123 Travel St, Adventure City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WanderLust Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

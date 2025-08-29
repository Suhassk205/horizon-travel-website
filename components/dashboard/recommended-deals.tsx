"use client"

import { Star, Heart, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function RecommendedDeals() {
  const deals = [
    {
      id: 1,
      title: "Maldives Paradise Package",
      location: "Maldives",
      originalPrice: "$2,999",
      discountedPrice: "$1,999",
      discount: "33% OFF",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=300",
      duration: "5N/6D",
      includes: ["Flights", "Resort", "Meals"],
    },
    {
      id: 2,
      title: "European Grand Tour",
      location: "Paris, Rome, Barcelona",
      originalPrice: "$3,499",
      discountedPrice: "$2,799",
      discount: "20% OFF",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=300",
      duration: "10N/11D",
      includes: ["Flights", "Hotels", "Tours"],
    },
    {
      id: 3,
      title: "Himalayan Adventure",
      location: "Nepal",
      originalPrice: "$1,299",
      discountedPrice: "$999",
      discount: "23% OFF",
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=300",
      duration: "7N/8D",
      includes: ["Trekking", "Guide", "Meals"],
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
        <Button variant="outline" size="sm">
          View All Deals
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <Image
                src={deal.image || "/placeholder.svg"}
                alt={deal.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Discount Badge */}
              <Badge className="absolute top-3 left-3 bg-red-500 text-white">{deal.discount}</Badge>

              {/* Heart Icon */}
              <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>

              {/* Duration Badge */}
              <Badge className="absolute bottom-3 left-3 bg-black/70 text-white">{deal.duration}</Badge>
            </div>

            <CardContent className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 mb-1">{deal.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="h-3 w-3" />
                  <span>{deal.location}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{deal.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({deal.reviews} reviews)</span>
              </div>

              {/* Includes */}
              <div className="flex flex-wrap gap-1 mb-3">
                {deal.includes.map((item, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">{deal.discountedPrice}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">{deal.originalPrice}</span>
                  <div className="text-xs text-gray-500">per person</div>
                </div>

                <Button size="sm" className="bg-[#ff6600] hover:bg-[#e55a00]">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

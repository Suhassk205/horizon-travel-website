"use client"

import { Calendar, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function UpcomingTrips() {
  const trips = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      dates: "Mar 15 - Mar 22, 2024",
      daysLeft: 15,
      image: "/placeholder.svg?height=200&width=300",
      status: "Confirmed",
      travelers: 2,
      bookingRef: "HZ123456",
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      dates: "Apr 10 - Apr 17, 2024",
      daysLeft: 41,
      image: "/placeholder.svg?height=200&width=300",
      status: "Pending",
      travelers: 1,
      bookingRef: "HZ789012",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Upcoming Trips</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {trips.map((trip) => (
          <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/3">
                <Image
                  src={trip.image || "/placeholder.svg"}
                  alt={trip.destination}
                  width={300}
                  height={200}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.destination}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{trip.dates}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>
                          {trip.travelers} traveler{trip.travelers > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{trip.daysLeft} days to go</span>
                    </div>
                  </div>

                  <Badge
                    variant={trip.status === "Confirmed" ? "default" : "secondary"}
                    className={trip.status === "Confirmed" ? "bg-green-500" : ""}
                  >
                    {trip.status}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Booking Ref: {trip.bookingRef}</span>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-[#ff6600] hover:bg-[#e55a00]">
                      Manage Trip
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

"use client"

import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function RecentBookings() {
  const bookings = [
    {
      id: 1,
      type: "Hotel",
      name: "Grand Hyatt Bali",
      location: "Nusa Dua, Bali",
      date: "Mar 15, 2024",
      amount: "$1,250",
      status: "Confirmed",
    },
    {
      id: 2,
      type: "Flight",
      name: "Singapore Airlines",
      location: "SIN → DPS",
      date: "Mar 14, 2024",
      amount: "$680",
      status: "Confirmed",
    },
    {
      id: 3,
      type: "Activity",
      name: "Mount Batur Sunrise Trek",
      location: "Kintamani, Bali",
      date: "Mar 18, 2024",
      amount: "$45",
      status: "Pending",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Recent Bookings</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#ff6600] rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{booking.type.charAt(0)}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{booking.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-gray-900 mb-1">{booking.amount}</div>
                    <Badge
                      variant={booking.status === "Confirmed" ? "default" : "secondary"}
                      className={booking.status === "Confirmed" ? "bg-green-500" : ""}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

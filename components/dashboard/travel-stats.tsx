"use client"

import { Plane, MapPin, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TravelStats() {
  const stats = [
    {
      icon: <Plane className="h-5 w-5 text-blue-500" />,
      label: "Total Trips",
      value: "12",
      change: "+2 this year",
    },
    {
      icon: <MapPin className="h-5 w-5 text-green-500" />,
      label: "Countries Visited",
      value: "8",
      change: "+3 new",
    },
    {
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
      label: "Travel Days",
      value: "89",
      change: "This year",
    },
    {
      icon: <Award className="h-5 w-5 text-orange-500" />,
      label: "Reward Points",
      value: "2,450",
      change: "Available",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Your Travel Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">{stat.icon}</div>
              <div>
                <div className="font-semibold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-right">{stat.change}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

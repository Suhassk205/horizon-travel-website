"use client"

import { Plane, Building2, Car, Mountain, Ship, Train } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function QuickActions() {
  const actions = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Flights",
      description: "Book flights",
      color: "bg-blue-500",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Hotels",
      description: "Find stays",
      color: "bg-green-500",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Car Rental",
      description: "Rent a car",
      color: "bg-purple-500",
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Activities",
      description: "Things to do",
      color: "bg-orange-500",
    },
    {
      icon: <Ship className="h-6 w-6" />,
      title: "Cruises",
      description: "Cruise deals",
      color: "bg-cyan-500",
    },
    {
      icon: <Train className="h-6 w-6" />,
      title: "Trains",
      description: "Rail travel",
      color: "bg-red-500",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div
                className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                {action.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

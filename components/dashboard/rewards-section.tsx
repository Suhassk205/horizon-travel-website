"use client"

import { Gift, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function RewardsSection() {
  return (
    <div className="space-y-6">
      {/* Rewards Points */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Gift className="h-5 w-5 text-[#ff6600]" />
            Reward Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-[#ff6600] mb-1">2,450</div>
            <div className="text-sm text-gray-600">Available Points</div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Next reward at 3,000 points</span>
              <span>550 to go</span>
            </div>
            <Progress value={81.7} className="h-2" />
          </div>

          <Button className="w-full mt-4 bg-[#ff6600] hover:bg-[#e55a00]" size="sm">
            Redeem Points
          </Button>
        </CardContent>
      </Card>

      {/* Membership Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Membership
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-xl font-bold text-gray-900 mb-1">Silver Member</div>
            <div className="text-sm text-gray-600">Since March 2023</div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Benefits unlocked:</span>
              <span className="font-medium">5/8</span>
            </div>
            <div className="text-gray-600">
              • Priority customer support • Exclusive deals access • Free cancellation
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4" size="sm">
            Upgrade to Gold
          </Button>
        </CardContent>
      </Card>

      {/* Recent Achievement */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Latest Achievement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="font-semibold text-gray-900 mb-1">Explorer Badge</div>
            <div className="text-sm text-gray-600 mb-3">Visited 5+ countries in a year</div>
            <div className="text-xs text-gray-500">Earned 2 days ago</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

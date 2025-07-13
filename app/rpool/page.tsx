import { Users, MapPin, Clock, Star, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RPoolPage() {
  const rides = [
    {
      id: 1,
      driver: "Ramesh Sharma",
      rating: 4.8,
      from: "Kathmandu",
      to: "Pokhara",
      date: "Today",
      time: "08:00 AM",
      price: "Rs. 1500",
      seats: 3,
      car: "Toyota Hiace",
    },
    {
      id: 2,
      driver: "Sita Gurung",
      rating: 4.6,
      from: "Pokhara",
      to: "Chitwan",
      date: "Tomorrow",
      time: "09:30 AM",
      price: "Rs. 1200",
      seats: 2,
      car: "Mahindra Bolero",
    },
    {
      id: 3,
      driver: "Krishna Thapa",
      rating: 4.9,
      from: "Kathmandu",
      to: "Biratnagar",
      date: "16 Jan",
      time: "06:00 AM",
      price: "Rs. 2000",
      seats: 4,
      car: "Hyundai H1",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Ride, Save Money</h1>
            <p className="text-xl opacity-90">Find or offer rides across Nepal</p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">FROM</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Kathmandu" className="pl-10 h-12" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">TO</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Pokhara" className="pl-10 h-12" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">DATE</label>
                    <Input type="date" className="h-12" defaultValue="2024-01-15" />
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">FIND RIDES</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Rides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Available Rides</h2>
            <Button asChild variant="outline">
              <Link href="/rpool/offer">Offer a Ride</Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {rides.map((ride) => (
              <Card key={ride.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Driver Info */}
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{ride.driver}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{ride.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Route */}
                    <div className="md:col-span-3">
                      <div className="text-center">
                        <div className="font-semibold">{ride.from}</div>
                        <div className="text-gray-400 my-1">→</div>
                        <div className="font-semibold">{ride.to}</div>
                      </div>
                    </div>

                    {/* Time & Car */}
                    <div className="md:col-span-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>
                            {ride.date} at {ride.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-gray-500" />
                          <span>{ride.car}</span>
                        </div>
                        <Badge variant="secondary">{ride.seats} seats available</Badge>
                      </div>
                    </div>

                    {/* Price & Book */}
                    <div className="md:col-span-3 text-right">
                      <div className="text-2xl font-bold text-blue-600">{ride.price}</div>
                      <div className="text-sm text-gray-500 mb-3">per person</div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Book Ride</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

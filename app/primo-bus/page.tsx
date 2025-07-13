import { Crown, Wifi, Coffee, Tv, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function PrimoBusPage() {
  const primoBuses = [
    {
      id: 1,
      operator: "Greenline Tours",
      route: "Kathmandu - Pokhara",
      type: "Luxury AC",
      price: "Rs. 1500",
      rating: 4.8,
      amenities: ["wifi", "coffee", "tv", "reclining"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      operator: "Golden Travels",
      route: "Kathmandu - Chitwan",
      type: "Premium Sleeper",
      price: "Rs. 1200",
      rating: 4.6,
      amenities: ["wifi", "tv", "reclining"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      operator: "Deluxe Express",
      route: "Pokhara - Lumbini",
      type: "Luxury Coach",
      price: "Rs. 1000",
      rating: 4.7,
      amenities: ["wifi", "coffee", "tv"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Primo Bus</h1>
            </div>
            <p className="text-xl opacity-90 mb-8">Experience luxury travel across Nepal</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Wifi className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-semibold mb-2">Free WiFi</h3>
                <p className="text-sm opacity-80">Stay connected throughout your journey</p>
              </div>
              <div className="text-center">
                <Coffee className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-semibold mb-2">Complimentary Snacks</h3>
                <p className="text-sm opacity-80">Enjoy refreshments during travel</p>
              </div>
              <div className="text-center">
                <Tv className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-semibold mb-2">Entertainment</h3>
                <p className="text-sm opacity-80">Movies and music for your comfort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Buses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Bus Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primoBuses.map((bus) => (
              <Card key={bus.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={bus.image || "/placeholder.svg"}
                    alt={bus.operator}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600">
                    <Crown className="h-3 w-3 mr-1" />
                    Primo
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{bus.operator}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{bus.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{bus.route}</p>
                  <p className="text-sm text-gray-500 mb-4">{bus.type}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {bus.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">{bus.price}</span>
                      <span className="text-sm text-gray-500 ml-1">onwards</span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Primo Bus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Luxury Experience</h3>
              <p className="text-gray-600 text-sm">Premium comfort and service</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Modern Amenities</h3>
              <p className="text-gray-600 text-sm">WiFi, entertainment, and more</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Complimentary Service</h3>
              <p className="text-gray-600 text-sm">Snacks and beverages included</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Top Rated</h3>
              <p className="text-gray-600 text-sm">Highest customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

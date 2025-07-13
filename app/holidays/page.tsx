import { Mountain, Camera, MapPin, Calendar, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HolidaysPage() {
  const packages = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      duration: "14 Days",
      price: "Rs. 85,000",
      rating: 4.9,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Everest Base Camp", "Sherpa Culture", "Mountain Views"],
      difficulty: "Challenging",
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      duration: "12 Days",
      price: "Rs. 65,000",
      rating: 4.8,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Thorong La Pass", "Hot Springs", "Diverse Landscapes"],
      difficulty: "Moderate",
    },
    {
      id: 3,
      title: "Chitwan Safari",
      duration: "3 Days",
      price: "Rs. 15,000",
      rating: 4.6,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Wildlife Safari", "Elephant Ride", "Cultural Show"],
      difficulty: "Easy",
    },
    {
      id: 4,
      title: "Pokhara Lake Tour",
      duration: "4 Days",
      price: "Rs. 25,000",
      rating: 4.7,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Phewa Lake", "Peace Pagoda", "Paragliding"],
      difficulty: "Easy",
    },
    {
      id: 5,
      title: "Lumbini Pilgrimage",
      duration: "2 Days",
      price: "Rs. 12,000",
      rating: 4.5,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Maya Devi Temple", "Monasteries", "Sacred Garden"],
      difficulty: "Easy",
    },
    {
      id: 6,
      title: "Kathmandu Heritage Tour",
      duration: "3 Days",
      price: "Rs. 18,000",
      rating: 4.4,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Durbar Squares", "Temples", "Local Markets"],
      difficulty: "Easy",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Nepal</h1>
            <p className="text-xl opacity-90 mb-8">Unforgettable holiday packages across the Himalayas</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Mountain className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-semibold mb-2">Mountain Adventures</h3>
                <p className="text-sm opacity-80">Trek to the world's highest peaks</p>
              </div>
              <div className="text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-semibold mb-2">Cultural Tours</h3>
                <p className="text-sm opacity-80">Explore ancient temples and traditions</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-semibold mb-2">Wildlife Safari</h3>
                <p className="text-sm opacity-80">Encounter exotic wildlife in national parks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["All Packages", "Trekking", "Cultural", "Wildlife", "Adventure", "Pilgrimage"].map((category) => (
              <Button
                key={category}
                variant={category === "All Packages" ? "default" : "outline"}
                className={category === "All Packages" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Holiday Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">{pkg.difficulty}</Badge>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {pkg.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{pkg.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{pkg.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Holiday Packages?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Local experts with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Routes</h3>
              <p className="text-gray-600 text-sm">Carefully planned itineraries</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Memorable Experiences</h3>
              <p className="text-gray-600 text-sm">Create lifelong memories</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
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

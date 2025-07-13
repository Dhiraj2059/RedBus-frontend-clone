"use client"

import { useState } from "react"
import { ArrowLeft, Filter, Star, Wifi, BatteryChargingIcon as ChargingStation, Tv, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

const buses = [
  {
    id: 1,
    operator: "VRL Travels",
    type: "AC Sleeper (2+1)",
    departure: "22:30",
    arrival: "06:00+1",
    duration: "7h 30m",
    price: 850,
    rating: 4.2,
    reviews: 1250,
    amenities: ["wifi", "charging", "tv", "ac"],
    seatsAvailable: 15,
  },
  {
    id: 2,
    operator: "SRS Travels",
    type: "AC Semi Sleeper",
    departure: "23:00",
    arrival: "06:30+1",
    duration: "7h 30m",
    price: 750,
    rating: 4.0,
    reviews: 890,
    amenities: ["wifi", "charging", "ac"],
    seatsAvailable: 8,
  },
  {
    id: 3,
    operator: "Kallada Travels",
    type: "AC Sleeper (2+1)",
    departure: "21:45",
    arrival: "05:15+1",
    duration: "7h 30m",
    price: 900,
    rating: 4.5,
    reviews: 2100,
    amenities: ["wifi", "charging", "tv", "ac"],
    seatsAvailable: 22,
  },
  {
    id: 4,
    operator: "Orange Travels",
    type: "Non AC Sleeper",
    departure: "22:00",
    arrival: "05:30+1",
    duration: "7h 30m",
    price: 650,
    rating: 3.8,
    reviews: 650,
    amenities: ["charging"],
    seatsAvailable: 12,
  },
]

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState([500, 1000])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "charging":
        return <ChargingStation className="h-4 w-4" />
      case "tv":
        return <Tv className="h-4 w-4" />
      case "ac":
        return <Snowflake className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div className="text-lg font-semibold">Kathmandu → Pokhara</div>
              <Badge variant="secondary">15 Jan 2024</Badge>
            </div>
            <div className="text-sm text-gray-600">{buses.length} buses found</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h3 className="font-semibold">Filters</h3>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1500}
                    min={300}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Rs.{priceRange[0]}</span>
                    <span>Rs.{priceRange[1]}</span>
                  </div>
                </div>

                {/* Bus Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Bus Type</h4>
                  <div className="space-y-2">
                    {["AC Sleeper", "Non AC Sleeper", "AC Semi Sleeper", "Seater"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Amenities</h4>
                  <div className="space-y-2">
                    {[
                      { id: "wifi", label: "WiFi" },
                      { id: "charging", label: "Charging Point" },
                      { id: "tv", label: "Entertainment" },
                      { id: "ac", label: "Air Conditioning" },
                    ].map((amenity) => (
                      <div key={amenity.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity.id}
                          checked={selectedAmenities.includes(amenity.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedAmenities([...selectedAmenities, amenity.id])
                            } else {
                              setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity.id))
                            }
                          }}
                        />
                        <label htmlFor={amenity.id} className="text-sm">
                          {amenity.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Bus List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {buses.map((bus) => (
                <Card key={bus.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Bus Info */}
                      <div className="md:col-span-3">
                        <h3 className="font-semibold text-lg">{bus.operator}</h3>
                        <p className="text-sm text-gray-600">{bus.type}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{bus.rating}</span>
                          <span className="text-sm text-gray-500">({bus.reviews})</span>
                        </div>
                      </div>

                      {/* Timing */}
                      <div className="md:col-span-3">
                        <div className="text-center">
                          <div className="text-xl font-semibold">{bus.departure}</div>
                          <div className="text-sm text-gray-600">Kathmandu</div>
                        </div>
                        <div className="text-center my-2">
                          <div className="text-sm text-gray-500">{bus.duration}</div>
                          <div className="border-t border-gray-300 my-1"></div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-semibold">{bus.arrival}</div>
                          <div className="text-sm text-gray-600">Pokhara</div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="md:col-span-2">
                        <div className="flex flex-wrap gap-2">
                          {bus.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center gap-1 text-gray-600">
                              {getAmenityIcon(amenity)}
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-green-600 mt-2">{bus.seatsAvailable} seats available</div>
                      </div>

                      {/* Price & Book */}
                      <div className="md:col-span-4 text-right">
                        <div className="text-2xl font-bold text-gray-900">Rs.{bus.price}</div>
                        <div className="text-sm text-gray-500 mb-3">per person</div>
                        <Button asChild className="bg-red-600 hover:bg-red-700">
                          <Link href={`/bus/${bus.id}`}>View Seats</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

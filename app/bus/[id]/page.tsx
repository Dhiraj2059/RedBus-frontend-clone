"use client"

import { useState } from "react"
import { ArrowLeft, Star, Wifi, BatteryChargingIcon as ChargingStation, Tv, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const busDetails = {
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
  route: [
    { location: "Kathmandu", time: "22:30", type: "departure" },
    { location: "Thankot", time: "23:15", type: "stop" },
    { location: "Naubise", time: "00:30", type: "stop" },
    { location: "Mugling", time: "02:00", type: "stop" },
    { location: "Pokhara", time: "06:00", type: "arrival" },
  ],
}

// Seat layout (L = Lower, U = Upper, D = Driver, A = Available, B = Booked, S = Selected)
const seatLayout = {
  lower: [
    ["A", "A", "", "A", "A"],
    ["B", "A", "", "A", "B"],
    ["A", "B", "", "B", "A"],
    ["A", "A", "", "A", "A"],
    ["B", "A", "", "A", "A"],
    ["A", "A", "", "B", "A"],
    ["A", "B", "", "A", "A"],
    ["A", "A", "", "A", "B"],
    ["B", "A", "", "A", "A"],
    ["A", "A", "", "A", "A"],
  ],
  upper: [
    ["A", "A", "", "A", "A"],
    ["A", "B", "", "B", "A"],
    ["B", "A", "", "A", "A"],
    ["A", "A", "", "A", "B"],
    ["A", "B", "", "A", "A"],
    ["B", "A", "", "A", "A"],
    ["A", "A", "", "B", "A"],
    ["A", "A", "", "A", "A"],
    ["A", "B", "", "A", "A"],
    ["A", "A", "", "A", "A"],
  ],
}

export default function BusDetailsPage() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<"seats" | "route">("seats")

  const handleSeatClick = (level: "lower" | "upper", row: number, col: number) => {
    const seatId = `${level}-${row}-${col}`
    const seat = seatLayout[level][row][col]

    if (seat === "B") return // Booked seats can't be selected

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }

  const getSeatClass = (seat: string, isSelected: boolean) => {
    if (seat === "B") return "bg-red-500 cursor-not-allowed"
    if (isSelected) return "bg-green-500 text-white"
    if (seat === "A") return "bg-gray-200 hover:bg-gray-300 cursor-pointer"
    return "invisible"
  }

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

  const totalPrice = selectedSeats.length * busDetails.price

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/search">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Results
                </Link>
              </Button>
              <div>
                <h1 className="text-xl font-semibold">{busDetails.operator}</h1>
                <p className="text-sm text-gray-600">{busDetails.type}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">Rs.{busDetails.price}</div>
              <div className="text-sm text-gray-500">per seat</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Bus Info Card */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Departure</h3>
                    <div className="text-2xl font-bold">{busDetails.departure}</div>
                    <div className="text-gray-600">Kathmandu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{busDetails.duration}</div>
                    <div className="border-t border-gray-300"></div>
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold mb-2">Arrival</h3>
                    <div className="text-2xl font-bold">{busDetails.arrival}</div>
                    <div className="text-gray-600">Pokhara</div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{busDetails.rating}</span>
                      <span className="text-gray-500">({busDetails.reviews})</span>
                    </div>
                    <div className="flex gap-2">
                      {busDetails.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-1 text-gray-600">
                          {getAmenityIcon(amenity)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              <Button
                variant={activeTab === "seats" ? "default" : "outline"}
                onClick={() => setActiveTab("seats")}
                className={activeTab === "seats" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Select Seats
              </Button>
              <Button
                variant={activeTab === "route" ? "default" : "outline"}
                onClick={() => setActiveTab("route")}
                className={activeTab === "route" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Route & Stops
              </Button>
            </div>

            {/* Seat Selection */}
            {activeTab === "seats" && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Your Seats</CardTitle>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>Booked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Selected</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lower Berth */}
                    <div>
                      <h4 className="font-medium mb-4 text-center">Lower Berth</h4>
                      <div className="space-y-2">
                        {seatLayout.lower.map((row, rowIndex) => (
                          <div key={rowIndex} className="flex gap-2 justify-center">
                            {row.map((seat, colIndex) => (
                              <div
                                key={colIndex}
                                className={`w-8 h-8 rounded text-xs flex items-center justify-center font-medium ${getSeatClass(
                                  seat,
                                  selectedSeats.includes(`lower-${rowIndex}-${colIndex}`),
                                )}`}
                                onClick={() => handleSeatClick("lower", rowIndex, colIndex)}
                              >
                                {seat !== "" && seat !== "A" && seat !== "B"
                                  ? seat
                                  : colIndex === 2
                                    ? ""
                                    : `L${rowIndex + 1}`}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upper Berth */}
                    <div>
                      <h4 className="font-medium mb-4 text-center">Upper Berth</h4>
                      <div className="space-y-2">
                        {seatLayout.upper.map((row, rowIndex) => (
                          <div key={rowIndex} className="flex gap-2 justify-center">
                            {row.map((seat, colIndex) => (
                              <div
                                key={colIndex}
                                className={`w-8 h-8 rounded text-xs flex items-center justify-center font-medium ${getSeatClass(
                                  seat,
                                  selectedSeats.includes(`upper-${rowIndex}-${colIndex}`),
                                )}`}
                                onClick={() => handleSeatClick("upper", rowIndex, colIndex)}
                              >
                                {seat !== "" && seat !== "A" && seat !== "B"
                                  ? seat
                                  : colIndex === 2
                                    ? ""
                                    : `U${rowIndex + 1}`}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Route Information */}
            {activeTab === "route" && (
              <Card>
                <CardHeader>
                  <CardTitle>Route & Boarding Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {busDetails.route.map((stop, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              stop.type === "departure"
                                ? "bg-green-500"
                                : stop.type === "arrival"
                                  ? "bg-red-500"
                                  : "bg-gray-400"
                            }`}
                          ></div>
                          {index < busDetails.route.length - 1 && <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{stop.location}</div>
                              <div className="text-sm text-gray-600 capitalize">{stop.type}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">{stop.time}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Selected Seats</h4>
                    {selectedSeats.length === 0 ? (
                      <p className="text-gray-500 text-sm">No seats selected</p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedSeats.map((seatId) => (
                          <Badge key={seatId} variant="secondary">
                            {seatId.replace("-", " ").toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>
                        Base Fare ({selectedSeats.length} seat{selectedSeats.length !== 1 ? "s" : ""})
                      </span>
                      <span>Rs.{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Service Tax</span>
                      <span>Rs.{Math.round(totalPrice * 0.05)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>Rs.{totalPrice + Math.round(totalPrice * 0.05)}</span>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700" disabled={selectedSeats.length === 0} asChild>
                    <Link href="/booking">Proceed to Book</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Download, RefreshCw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingBookings = [
    {
      id: "NB001234",
      operator: "VRL Travels",
      route: "Kathmandu → Pokhara",
      date: "2024-01-15",
      departure: "22:30",
      arrival: "06:00+1",
      seats: ["L5", "L6"],
      status: "Confirmed",
      amount: "Rs. 1785",
      bookingDate: "2024-01-10",
    },
    {
      id: "NB001235",
      operator: "Greenline Tours",
      route: "Pokhara → Chitwan",
      date: "2024-01-20",
      departure: "08:00",
      arrival: "14:30",
      seats: ["U12"],
      status: "Confirmed",
      amount: "Rs. 1200",
      bookingDate: "2024-01-12",
    },
  ]

  const pastBookings = [
    {
      id: "NB001230",
      operator: "Golden Travels",
      route: "Kathmandu → Biratnagar",
      date: "2024-01-05",
      departure: "06:00",
      arrival: "18:00",
      seats: ["L8"],
      status: "Completed",
      amount: "Rs. 2000",
      bookingDate: "2024-01-01",
    },
    {
      id: "NB001228",
      operator: "Deluxe Express",
      route: "Chitwan → Kathmandu",
      date: "2023-12-28",
      departure: "15:00",
      arrival: "21:30",
      seats: ["U5", "U6"],
      status: "Completed",
      amount: "Rs. 1400",
      bookingDate: "2023-12-25",
    },
  ]

  const cancelledBookings = [
    {
      id: "NB001232",
      operator: "SRS Travels",
      route: "Kathmandu → Dharan",
      date: "2024-01-08",
      departure: "23:00",
      arrival: "07:30+1",
      seats: ["L10"],
      status: "Cancelled",
      amount: "Rs. 1500",
      bookingDate: "2024-01-05",
      refundAmount: "Rs. 1350",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-blue-100 text-blue-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const BookingCard = ({ booking, showActions = true }: { booking: any; showActions?: boolean }) => (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">{booking.operator}</h3>
            <p className="text-gray-600">Booking ID: {booking.id}</p>
          </div>
          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{booking.route}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{booking.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>
              {booking.departure} - {booking.arrival}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Seats: {booking.seats.join(", ")}</p>
            <p className="font-semibold text-lg">{booking.amount}</p>
            {booking.refundAmount && <p className="text-sm text-green-600">Refund: {booking.refundAmount}</p>}
          </div>

          {showActions && booking.status === "Confirmed" && (
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                Modify
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
            </div>
          )}

          {booking.status === "Completed" && (
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your bus ticket bookings</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
            <TabsTrigger value="past">Past ({pastBookings.length})</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled ({cancelledBookings.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Upcoming Bookings</h3>
                    <p className="text-gray-600 mb-4">You don't have any upcoming bus bookings.</p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href="/">Book a Bus</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-4">
              {pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} showActions={false} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cancelled">
            <div className="space-y-4">
              {cancelledBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} showActions={false} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

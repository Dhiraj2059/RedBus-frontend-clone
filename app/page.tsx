"use client"

import { useState } from "react"
import { Search, MapPin, Users, Star, Shield, Headphones, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DatePicker } from "@/components/date-picker"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-16 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Bus background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/bus-hero-bg.png')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nepal's No. 1 Online Bus Ticket Booking Site</h1>
            <p className="text-xl opacity-90">Book bus tickets online in just a few clicks</p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">FROM</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                      <Input
                        placeholder="Kathmandu"
                        className="pl-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        defaultValue="Kathmandu"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">TO</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                      <Input
                        placeholder="Pokhara"
                        className="pl-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        defaultValue="Pokhara"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">DATE</label>
                    <DatePicker date={selectedDate} onDateChange={setSelectedDate} placeholder="Select travel date" />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">PASSENGERS</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                      <Input
                        placeholder="1"
                        className="pl-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        defaultValue="1"
                        type="number"
                        min="1"
                        max="9"
                      />
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Button asChild className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold">
                      <Link href="/search">
                        <Search className="mr-2 h-4 w-4" />
                        SEARCH BUSES
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NepBus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">Your safety is our priority. We ensure secure transactions.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Easy Payment</h3>
              <p className="text-gray-600 text-sm">Multiple payment options for your convenience.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round the clock customer support for assistance.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Price</h3>
              <p className="text-gray-600 text-sm">Get the best deals and offers on bus bookings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Bus Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { from: "Kathmandu", to: "Pokhara", price: "Rs. 800" },
              { from: "Kathmandu", to: "Chitwan", price: "Rs. 600" },
              { from: "Pokhara", to: "Lumbini", price: "Rs. 700" },
              { from: "Kathmandu", to: "Biratnagar", price: "Rs. 1200" },
              { from: "Pokhara", to: "Kathmandu", price: "Rs. 800" },
              { from: "Chitwan", to: "Lumbini", price: "Rs. 500" },
              { from: "Kathmandu", to: "Dharan", price: "Rs. 1000" },
              { from: "Butwal", to: "Kathmandu", price: "Rs. 900" },
            ].map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{route.from}</span>
                    <span className="text-gray-400">→</span>
                    <span className="font-medium">{route.to}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-red-600 font-semibold">Starting from {route.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Download NepBus App</h2>
              <p className="text-xl mb-6 opacity-90">Book bus tickets on the go with our mobile app</p>
              <div className="flex gap-4">
                <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">
                  <Image src="/placeholder.svg" width={20} height={20} alt="Play Store" className="mr-2" />
                  Google Play
                </Button>
                <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">
                  <Image src="/placeholder.svg" width={20} height={20} alt="App Store" className="mr-2" />
                  App Store
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image src="/placeholder.svg" width={300} height={400} alt="Mobile App" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

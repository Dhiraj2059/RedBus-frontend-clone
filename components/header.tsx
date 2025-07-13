"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold">N</div>
            <span className="text-xl font-bold text-gray-900">NepBus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">
              Bus Tickets
            </Link>
            <Link href="/rpool" className="text-gray-700 hover:text-red-600 font-medium">
              rPool
            </Link>
            <Link href="/primo-bus" className="text-gray-700 hover:text-red-600 font-medium">
              Primo Bus
            </Link>
            <Link href="/holidays" className="text-gray-700 hover:text-red-600 font-medium">
              Holidays
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/help" className="text-gray-700 hover:text-red-600 font-medium">
              Help
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Account</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signup">Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookings">My Bookings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Bus Tickets
                </Link>
                <Link
                  href="/rpool"
                  className="text-lg font-medium text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  rPool
                </Link>
                <Link
                  href="/primo-bus"
                  className="text-lg font-medium text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Primo Bus
                </Link>
                <Link
                  href="/holidays"
                  className="text-lg font-medium text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Holidays
                </Link>
                <Link
                  href="/help"
                  className="text-lg font-medium text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Help
                </Link>
                <div className="border-t pt-4">
                  <Link
                    href="/login"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600 mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600 mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/bookings"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600"
                    onClick={() => setIsOpen(false)}
                  >
                    My Bookings
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

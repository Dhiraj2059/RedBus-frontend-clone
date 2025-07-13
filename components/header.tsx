import { Menu, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white text-red-600 px-3 py-1 rounded font-bold text-xl">NepBus</div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/bus-tickets" className="hover:text-red-200 transition-colors">
              Bus Tickets
            </Link>
            <Link href="/rpool" className="hover:text-red-200 transition-colors">
              rPool
            </Link>
            <Link href="/primo-bus" className="hover:text-red-200 transition-colors">
              Primo Bus
            </Link>
            <Link href="/holiday-packages" className="hover:text-red-200 transition-colors">
              Holiday Packages
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Help */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>Help</span>
            </div>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-red-200 hover:bg-red-700">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/signup">Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/bookings">My Bookings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-white hover:text-red-200 hover:bg-red-700">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/bus-tickets">Bus Tickets</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/rpool">rPool</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/primo-bus">Primo Bus</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/holiday-packages">Holiday Packages</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Help</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

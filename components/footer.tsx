import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold">N</div>
              <span className="text-xl font-bold">NepBus</span>
            </div>
            <p className="text-gray-400 mb-4">
              Nepal's leading online bus ticket booking platform. Safe, secure, and convenient travel booking.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Bus Tickets
                </Link>
              </li>
              <li>
                <Link href="/rpool" className="text-gray-400 hover:text-white">
                  rPool
                </Link>
              </li>
              <li>
                <Link href="/primo-bus" className="text-gray-400 hover:text-white">
                  Primo Bus
                </Link>
              </li>
              <li>
                <Link href="/holidays" className="text-gray-400 hover:text-white">
                  Holidays
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Routes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search?from=Kathmandu&to=Pokhara" className="text-gray-400 hover:text-white">
                  Kathmandu to Pokhara
                </Link>
              </li>
              <li>
                <Link href="/search?from=Kathmandu&to=Chitwan" className="text-gray-400 hover:text-white">
                  Kathmandu to Chitwan
                </Link>
              </li>
              <li>
                <Link href="/search?from=Pokhara&to=Lumbini" className="text-gray-400 hover:text-white">
                  Pokhara to Lumbini
                </Link>
              </li>
              <li>
                <Link href="/search?from=Kathmandu&to=Biratnagar" className="text-gray-400 hover:text-white">
                  Kathmandu to Biratnagar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">+977-1-4567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">support@nepbus.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 NepBus Nepal Pvt Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-white text-sm">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About NepBus */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About NepBus</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mobile Version
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  NepBus on Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  T & C
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Bus Operator Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Agent Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Insurance Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  User Agreement
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Sites */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Global Sites</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Nepal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Kathmandu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pokhara
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Chitwan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  India
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Singapore
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Malaysia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Indonesia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Peru
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Colombia
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Partners */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Partners</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Goibibo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Makemytrip
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">© 2024 NepBus Nepal Pvt Ltd. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

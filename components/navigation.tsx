"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-serif text-red-600">
            Pasta La Vista
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-all ${
                isActive("/")
                  ? "text-red-600 font-semibold border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`transition-all ${
                isActive("/menu")
                  ? "text-red-600 font-semibold border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/order"
              className={`transition-all ${
                isActive("/order")
                  ? "text-red-600 font-semibold border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Order
            </Link>
          </div>
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-600 hover:text-red-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/menu" className="block py-2 text-gray-600 hover:text-red-600" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
            <Link
              href="/order"
              className="block py-2 text-gray-600 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Order
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

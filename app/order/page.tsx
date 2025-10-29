"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function OrderPage() {
  const [quantities, setQuantities] = useState({
    carbonara: 1,
    margherita: 1,
    tiramisu: 1,
  })

  const prices = {
    carbonara: 15.99,
    margherita: 12.99,
    tiramisu: 7.99,
  }

  const updateQuantity = (item: keyof typeof quantities, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(1, prev[item] + delta),
    }))
  }

  const total = Object.entries(quantities).reduce(
    (sum, [item, qty]) => sum + prices[item as keyof typeof prices] * qty,
    0,
  )

  return (
    <div className="bg-gray-50">
      <Navigation />

      {/* Order Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-800">Order Online</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy our authentic Italian cuisine from the comfort of your home.
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Your Information</h2>
            <form>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Your Order</h2>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-xl font-bold">Spaghetti Carbonara</h3>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => updateQuantity("carbonara", -1)}
                      className="text-red-600 hover:text-red-700 px-2 text-xl"
                    >
                      -
                    </button>
                    <span className="mx-2 w-8 text-center">{quantities.carbonara}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity("carbonara", 1)}
                      className="text-red-600 hover:text-red-700 px-2 text-xl"
                    >
                      +
                    </button>
                    <span className="ml-4 font-bold">${(prices.carbonara * quantities.carbonara).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-xl font-bold">Margherita Pizza</h3>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => updateQuantity("margherita", -1)}
                      className="text-red-600 hover:text-red-700 px-2 text-xl"
                    >
                      -
                    </button>
                    <span className="mx-2 w-8 text-center">{quantities.margherita}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity("margherita", 1)}
                      className="text-red-600 hover:text-red-700 px-2 text-xl"
                    >
                      +
                    </button>
                    <span className="ml-4 font-bold">${(prices.margherita * quantities.margherita).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-xl font-bold">Tiramisu</h3>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => updateQuantity("tiramisu", -1)}
                      className="text-red-600 hover:text-red-700 px-2 text-xl"
                    >
                      -
                    </button>
                    <span className="mx-2 w-8 text-center">{quantities.tiramisu}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity("tiramisu", 1)}
                      className="text-red-600 hover:text-red-700 px-2 text-xl"
                    >
                      +
                    </button>
                    <span className="ml-4 font-bold">${(prices.tiramisu * quantities.tiramisu).toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Payment Method</h2>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <input type="radio" id="creditCard" name="payment" className="mr-2" defaultChecked />
                  <label htmlFor="creditCard" className="font-medium">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input type="radio" id="cash" name="payment" className="mr-2" />
                  <label htmlFor="cash" className="font-medium">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link href="/menu" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  <ArrowLeft className="mr-1" size={20} /> Back to Menu
                </Link>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

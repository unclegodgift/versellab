import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-blend-overlay bg-black/50 text-white py-32"
        style={{ backgroundImage: "url('/italian-restaurant-food.png')" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Authentic Italian Cuisine</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Handcrafted with love since 1985. Taste the difference tradition makes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg"
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-full transition-all shadow-lg"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/italian-restaurant-interior.png"
                alt="Restaurant Interior"
                className="rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="font-serif text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1985 by the Rossi family, Pasta La Vista brings authentic Italian flavors to your table. Our
                recipes have been passed down through generations, ensuring every dish tells a story of tradition and
                passion.
              </p>
              <p className="text-gray-600 mb-6">
                We source only the finest ingredients, many imported directly from Italy, to create dishes that
                transport you straight to the heart of Tuscany.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center">
                  <Clock className="text-red-600 mr-2" size={20} />
                  <span>Mon-Sun: 11am - 10pm</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-red-600 mr-2" size={20} />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-gray-800">Today&apos;s Specials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:shadow-xl">
              <img
                src="/truffle-pasta.png"
                alt="Truffle Pasta"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-bold mb-2">Truffle Tagliatelle</h3>
              <p className="text-gray-600 mb-4">
                Fresh handmade tagliatelle with black truffle and parmesan cream sauce.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-red-600">$18.99</span>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm transition-all">
                  Add to Order
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:shadow-xl">
              <img
                src="/margherita-pizza.png"
                alt="Margherita Pizza"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-bold mb-2">Classic Margherita</h3>
              <p className="text-gray-600 mb-4">
                Wood-fired pizza with San Marzano tomatoes, fresh mozzarella and basil.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-red-600">$14.99</span>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm transition-all">
                  Add to Order
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:shadow-xl">
              <img
                src="/classic-tiramisu.png"
                alt="Tiramisu"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-bold mb-2">Homemade Tiramisu</h3>
              <p className="text-gray-600 mb-4">
                Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone cream.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-red-600">$8.99</span>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm transition-all">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

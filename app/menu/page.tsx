import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <div className="bg-gray-50">
      <Navigation />

      {/* Menu Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Authentic Italian dishes made with the finest ingredients and traditional recipes.
          </p>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <div className="sticky top-16 bg-white shadow-sm z-40">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-6 py-4">
            <a href="#antipasti" className="whitespace-nowrap text-red-600 font-medium">
              Antipasti
            </a>
            <a href="#pasta" className="whitespace-nowrap text-gray-600 hover:text-red-600 transition-all">
              Pasta
            </a>
            <a href="#pizza" className="whitespace-nowrap text-gray-600 hover:text-red-600 transition-all">
              Pizza
            </a>
            <a href="#dolci" className="whitespace-nowrap text-gray-600 hover:text-red-600 transition-all">
              Dolci
            </a>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Antipasti */}
          <div id="antipasti" className="mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Antipasti</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Bruschetta al Pomodoro</h3>
                    <p className="text-gray-600">
                      Toasted bread topped with fresh tomatoes, garlic, basil and olive oil.
                    </p>
                  </div>
                  <span className="font-bold text-red-600">$8.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Caprese Salad</h3>
                    <p className="text-gray-600">
                      Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil.
                    </p>
                  </div>
                  <span className="font-bold text-red-600">$10.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Calamari Fritti</h3>
                    <p className="text-gray-600">Lightly fried squid served with marinara sauce and lemon wedges.</p>
                  </div>
                  <span className="font-bold text-red-600">$12.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Prosciutto e Melone</h3>
                    <p className="text-gray-600">Thinly sliced cured ham served with fresh cantaloupe.</p>
                  </div>
                  <span className="font-bold text-red-600">$11.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pasta */}
          <div id="pasta" className="mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Pasta</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Spaghetti Carbonara</h3>
                    <p className="text-gray-600">Classic Roman pasta with eggs, cheese, pancetta, and black pepper.</p>
                  </div>
                  <span className="font-bold text-red-600">$15.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Fettuccine Alfredo</h3>
                    <p className="text-gray-600">Handmade fettuccine with creamy parmesan sauce.</p>
                  </div>
                  <span className="font-bold text-red-600">$14.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Penne all&apos;Arrabbiata</h3>
                    <p className="text-gray-600">Penne pasta with spicy tomato sauce, garlic, and chili peppers.</p>
                  </div>
                  <span className="font-bold text-red-600">$13.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Lasagna Bolognese</h3>
                    <p className="text-gray-600">Layers of pasta, meat sauce, béchamel, and parmesan cheese.</p>
                  </div>
                  <span className="font-bold text-red-600">$16.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pizza */}
          <div id="pizza" className="mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Pizza</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Margherita</h3>
                    <p className="text-gray-600">Tomato sauce, mozzarella, basil, olive oil.</p>
                  </div>
                  <span className="font-bold text-red-600">$12.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Quattro Formaggi</h3>
                    <p className="text-gray-600">Four cheese blend: mozzarella, gorgonzola, parmesan, and fontina.</p>
                  </div>
                  <span className="font-bold text-red-600">$14.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Diavola</h3>
                    <p className="text-gray-600">Spicy salami, tomato sauce, mozzarella, chili flakes.</p>
                  </div>
                  <span className="font-bold text-red-600">$15.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Prosciutto e Funghi</h3>
                    <p className="text-gray-600">Tomato sauce, mozzarella, ham, mushrooms.</p>
                  </div>
                  <span className="font-bold text-red-600">$16.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dolci */}
          <div id="dolci" className="mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Dolci</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Tiramisu</h3>
                    <p className="text-gray-600">
                      Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.
                    </p>
                  </div>
                  <span className="font-bold text-red-600">$7.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Panna Cotta</h3>
                    <p className="text-gray-600">Creamy vanilla custard served with berry compote.</p>
                  </div>
                  <span className="font-bold text-red-600">$6.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Cannoli Siciliani</h3>
                    <p className="text-gray-600">Crispy pastry tubes filled with sweet ricotta cream.</p>
                  </div>
                  <span className="font-bold text-red-600">$5.99</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">Gelato</h3>
                    <p className="text-gray-600">Homemade Italian ice cream. Ask for daily flavors.</p>
                  </div>
                  <span className="font-bold text-red-600">$4.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to taste authentic Italian cuisine?</h2>
          <Link
            href="/order"
            className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

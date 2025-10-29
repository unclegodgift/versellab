import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Pasta La Vista</h3>
            <p className="text-gray-300">
              123 Culinary Street
              <br />
              Flavortown, FT 12345
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-300">
              Monday - Sunday
              <br />
              11:00 AM - 10:00 PM
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Pasta La Vista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

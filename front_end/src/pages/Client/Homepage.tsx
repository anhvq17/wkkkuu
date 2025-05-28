import { Link } from "react-router-dom"
import { ArrowRight, Package, Shield, CreditCard } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic Monochrome Tees",
    price: 35.0,
    status: "IN STOCK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBFL-BQb-rJbGjC6akalUoqe8u3zsvmK1jA&s",
  },
  {
    id: 2,
    name: "Monochromatic Wardrobe",
    price: 35.0,
    status: "IN STOCK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBFL-BQb-rJbGjC6akalUoqe8u3zsvmK1jA&s",
  },
  {
    id: 3,
    name: "Essential Neutrals",
    price: 35.0,
    status: "IN STOCK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBFL-BQb-rJbGjC6akalUoqe8u3zsvmK1jA&s",
  },
  {
    id: 4,
    name: "ULTRANET Black",
    price: 35.0,
    status: "IN STOCK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBFL-BQb-rJbGjC6akalUoqe8u3zsvmK1jA&s",
  },
];

const Homepage = () => {
  return (
    <div className="relative w-full">
      <img src="/img/banner.jpg" className="w-full h-auto object-cover" />

      <section className="py-16 bg-gray-">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Upgrade your style today and get FREE shipping on all orders! Don't miss out.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Shop confidently with our Satisfaction Guarantee. Love it or get a refund.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Your security is our priority. Your payments are secure with us.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-black text-center">Best Selling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-black text-sm">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-black">{product.status}</div>
                  <div className="font-medium text-gray-500">${product.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl text-gray-600 font-bold mb-4">Browse Our Fashion Paradise!</h2>
              <p className="text-black mb-6">
                Step into a world of style and explore our diverse collection of clothing categories.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-gray-900 hover:text-white text-white font-medium rounded hover:bg-gray-800 transition-colors"
              >
                Start Browsing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                height={"400px"} width={"300px"}
                alt="Fashion category showcase"
                className="max-w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="inline-flex border-b">
              <button className="px-4 py-2 text-sm font-medium border-b-2 text-black border-gray-900">Featured</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500">Latest</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-black text-sm">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-black">{product.status}</div>
                  <div className="font-medium text-gray-500">${product.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage

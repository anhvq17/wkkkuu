import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  _id: string;
  name: string;
}

interface Brand {
  _id: string;
  name: string;
}

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  categoryId: Category;
  brandId: Brand;
}

const categories = [
  "GUCCI",
  "Nước hoa Unisex",
  "Nước hoa mini",
  "Nước hoa chiết",
  "Kiến thức",
];
const tags = [
  "Nước hoa nữ",
  "Xu hướng",
  "Nước hoa mini",
  "GUCCI",
  "DIOR",
  "Nước hoa nam",
  "UNISEX",
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        const allProducts: Product[] = res.data.data;
        setProducts(allProducts);

        // Lọc sản phẩm mới theo category "Nước hoa chiết"
        let filteredNewProducts = allProducts.filter(
          (p) => p.categoryId?.name === "Nước hoa chiết"
        );

        // Nếu không đủ 3 sản phẩm thì lấy 3 sản phẩm đầu tiên làm dự phòng
        if (filteredNewProducts.length < 3) {
          filteredNewProducts = allProducts.slice(0, 3);
        } else {
          filteredNewProducts = filteredNewProducts.slice(0, 3);
        }
        setNewProducts(filteredNewProducts);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <aside className="lg:w-1/4 space-y-6">
        {/* Danh mục */}
        <div>
          <h2 className="font-bold mb-2 border-b pb-1">THƯ MỤC</h2>
          <ul className="space-y-1 text-sm">
            {categories.map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sản phẩm mới */}
        <div>
          <h2 className="font-bold mb-2 border-b pb-1">
            Các sản phẩm mới ra mắt
          </h2>
          {newProducts.length === 0 ? (
            <p>Đang tải sản phẩm mới...</p>
          ) : (
           <ul className="space-y-3">
  {newProducts.map((prod) => (
    <li key={prod._id} className="flex items-start gap-3 cursor-pointer">
      <Link to={`/productdetails/${prod._id}`} className="flex items-start gap-3">
        <img src={prod.image} alt={prod.name} className="w-12 h-16 object-cover" />
        <p className="text-sm">{prod.name}</p>
      </Link>
    </li>
  ))}
</ul>

          )}
        </div>

        {/* Từ khóa */}
        <div>
          <h2 className="font-bold mb-2 border-b pb-1">TỪ KHÓA</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="lg:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <Link
              key={product._id}
              to={`/productdetails/${product._id}`}
              className="border p-4 rounded hover:shadow transition relative block"
            >
              <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                MỚI
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain mb-3"
              />
              <h3 className="text-sm font-medium leading-5">{product.name}</h3>
              <p className="text-red-600 font-bold">
                {product.price.toLocaleString()} VND
              </p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-2 text-sm">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded ${
                      page === currentPage
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProductList;

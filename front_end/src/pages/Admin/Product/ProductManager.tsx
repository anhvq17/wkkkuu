import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  status: string;
  quantity: number;
  scent: string;
}

const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm('Bạn có chắc muốn xoá sản phẩm này không?');
    if (!confirmDelete) return;

    const updated = products.filter((product) => product.id !== id);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold mb-4">Danh sách sản phẩm</h1>
        <Link to={`/dashboard/products/add`}>
          <button className="border bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs">
            Thêm
          </button>
        </Link>
      </div>

      <table className="min-w-full bg-white border text-sm">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Tên</th>
            <th className="px-4 py-2">Danh mục</th>
            <th className="px-4 py-2">Thương hiệu</th>
            <th className="px-4 py-2">Mô tả</th>
            <th className="px-4 py-2">Trạng thái</th>
            <th className="px-4 py-2">Số lượng</th>
            <th className="px-4 py-2">Mùi hương</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.category}</td>
              <td className="px-4 py-2">{p.brand}</td>
              <td className="px-4 py-2">{p.description}</td>
              <td className="px-4 py-2">{p.status}</td>
              <td className="px-4 py-2">{p.quantity}</td>
              <td className="px-4 py-2">{p.scent}</td>
              <td className="px-4 py-2 space-x-1">
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                >
                  Xoá
                </button>
                <Link to={`/dashboard/products/edit/${p.id}`}>
                  <button className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 text-xs">
                    Sửa
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager;

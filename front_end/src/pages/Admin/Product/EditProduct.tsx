import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      const productList: Product[] = JSON.parse(stored);
      const product = productList.find((p) => p.id === Number(id));
      if (product) {
        setForm(product);
      } else {
        alert('Sản phẩm không tồn tại!');
        navigate('/dashboard/products');
      }
    }
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (!form) return;
    setForm((prev) => ({
      ...(prev as Product),
      [name]: name === 'quantity' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const stored = localStorage.getItem('products');
    if (stored) {
      const productList: Product[] = JSON.parse(stored);
      const updatedList = productList.map((p) => (p.id === form.id ? form : p));
      localStorage.setItem('products', JSON.stringify(updatedList));
      alert('✅ Cập nhật sản phẩm thành công!');
      navigate('/dashboard/products');
    }
  };

  if (!form) return <div className="text-center py-8 text-gray-500">Đang tải dữ liệu...</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-xl rounded-xl mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">✏️ Chỉnh Sửa Sản Phẩm</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Thương hiệu</label>
          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mùi hương</label>
          <input
            name="scent"
            value={form.scent}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Số lượng</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            min={0}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          >
            <option value="Còn hàng">Còn hàng</option>
            <option value="Hết hàng">Hết hàng</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate('/dashboard/products')}
            className="bg-gray-300 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            🔙 Quay lại
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            💾 Lưu thay đổi
          </button>
        </div>
    </form>
  </div>
  );
};

export default EditProduct;

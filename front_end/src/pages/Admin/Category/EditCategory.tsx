import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Category {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<Category | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('categories');
    if (stored && id) {
      const list: Category[] = JSON.parse(stored);
      const found = list.find((c) => c._id === id);
      if (found) {
        setForm(found);
      } else {
        alert('❌ Danh mục không tồn tại!');
        navigate('/dashboard/categories');
      }
    }
  }, [id, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (!form) return;
    setForm((prev) => ({
      ...(prev as Category),
      [name]: name === 'status' ? value === 'true' : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const stored = localStorage.getItem('categories');
    if (stored) {
      const list: Category[] = JSON.parse(stored);
      const updatedList = list.map((c) =>
        c._id === form._id
          ? { ...form, updatedAt: new Date().toISOString() }
          : c
      );
      localStorage.setItem('categories', JSON.stringify(updatedList));
      alert('✅ Cập nhật danh mục thành công!');
      navigate('/dashboard/categories');
    }
  };

  if (!form) return <div className="text-center py-8 text-gray-500">Đang tải danh mục...</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-xl rounded-xl mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">✏️ Chỉnh Sửa Danh Mục</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Tên danh mục</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
          <select
            id="status"
            name="status"
            value={form.status.toString()}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          >
            <option value="true">Hoạt động</option>
            <option value="false">Tạm khoá</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
          <textarea
            id="description"
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
            onClick={() => navigate('/dashboard/categories')}
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

export default EditCategory;

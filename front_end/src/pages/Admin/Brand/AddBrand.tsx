import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Brand {
  _id: string;
  name: string;
  image: string | ArrayBuffer | null;
  createdAt: string;
  updatedAt: string;
}

const AddBrand = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<{ name: string; image: File | null }>({
    name: '',
    image: null,
  });
  const [preview, setPreview] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      const file = files[0];
      setForm((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, image } = form;

    if (!name || !image) {
      alert('Vui lòng nhập tên thương hiệu và chọn hình ảnh.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const stored = localStorage.getItem('brands');
      const brandList = stored ? JSON.parse(stored) : [];

      const newBrand: Brand = {
        _id: Date.now().toString(),
        name,
        image: reader.result,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const updatedList = [newBrand, ...brandList];
      localStorage.setItem('brands', JSON.stringify(updatedList));

      alert('🎉 Thêm thương hiệu thành công!');
      navigate('/dashboard/brands');
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-xl rounded-xl mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">🛍️ Thêm Thương Hiệu Mới</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tên thương hiệu</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="Xem trước"
            className="w-32 h-32 object-cover border rounded mb-4"
          />
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate('/dashboard/brands')}
            className="bg-gray-300 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            🔙 Quay lại
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ➕ Thêm thương hiệu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrand;

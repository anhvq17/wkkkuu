import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Brand {
  _id: string;
  name: string;
  image: string | ArrayBuffer | null;
  createdAt: string;
  updatedAt: string;
}

const EditBrand = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<Brand | null>(null);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("brands");
    if (stored && id) {
      const brands: Brand[] = JSON.parse(stored);
      const brand = brands.find((b) => b._id === id);
      if (brand) {
        setForm(brand);
      } else {
        alert("❌ Thương hiệu không tồn tại!");
        navigate("/dashboard/brands");
      }
    }
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (!form) return;

    if (name === "image" && files && files[0]) {
      const file = files[0];
      setNewImageFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setForm((prev) => ({
        ...(prev as Brand),
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const stored = localStorage.getItem("brands");
    if (!stored) return;

    const brands: Brand[] = JSON.parse(stored);

    const updateAndSave = (newImage: string | ArrayBuffer | null) => {
      const updatedList = brands.map((b) =>
        b._id === form._id
          ? {
              ...form,
              name: form.name,
              image: newImage ?? form.image,
              updatedAt: new Date().toISOString(),
            }
          : b
      );

      localStorage.setItem("brands", JSON.stringify(updatedList));
      alert("✅ Cập nhật thương hiệu thành công!");
      navigate("/dashboard/brands");
    };

    if (newImageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateAndSave(reader.result);
      };
      reader.readAsDataURL(newImageFile);
    } else {
      updateAndSave(form.image);
    }
  };

  if (!form) return <div className="text-center py-8 text-gray-500">Đang tải dữ liệu...</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-xl rounded-xl mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">✏️ Chỉnh Sửa Thương Hiệu</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tên thương hiệu</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {(preview || form.image) && (
          <img
            src={preview || (form.image as string)}
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
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            💾 Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBrand;

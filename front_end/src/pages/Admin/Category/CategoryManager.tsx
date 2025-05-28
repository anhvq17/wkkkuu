import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

interface Category {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('categories');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCategories(parsed);
        }
      }
    } catch (error) {
      console.error('Lỗi khi đọc dữ liệu từ localStorage:', error);
    }
  }, []);

  const handleDelete = (_id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xoá danh mục này?')) {
      const updated = categories.filter((c) => c._id !== _id);
      setCategories(updated);
      localStorage.setItem('categories', JSON.stringify(updated));
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Danh sách danh mục</h1>
        <Link to="/dashboard/categories/add">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
            Thêm
          </button>
        </Link>
      </div>

      
        <table className="min-w-full bg-white border text-sm">
          <thead className="bg-black text-white text-left">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Tên</th>
              <th className="px-4 py-2">Mô tả</th>
              <th className="px-4 py-2">Trạng thái</th>
              <th className="px-4 py-2">Ngày tạo</th>
              <th className="px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{category._id}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.description}</td>
                <td className="px-4 py-2">
                  <span className={category.status ? 'text-green-600' : 'text-red-600'}>
                    {category.status ? 'Hoạt động' : 'Tạm khoá'}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {new Date(category.createdAt).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-4 py-2 space-x-1">
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs"
                  >
                    Xoá
                  </button>
                  <Link to={`/dashboard/categories/edit/${category._id}`}>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs">
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

export default CategoryManager;

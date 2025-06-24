import { Link } from "react-router-dom";
import { Edit, Trash } from "lucide-react";

const TrashAttribute = () => {
  return (
    <div className="p-1">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold">Thùng rác thuộc tính</h1>
      </div>

      {/* Menu tab */}
      <div className="flex gap-6 border-b my-4 text-base font-medium text-gray-500">
        <Link
          to="/admin/attributes"
          className="pb-2 hover:text-blue-500 hover:border-b-2 hover:border-blue-300"
        >
          Thuộc tính đang hoạt động
        </Link>
        <Link
          to="/admin/attributes/trash"
          className="pb-2 border-b-2 border-blue-500 text-blue-600"
        >
          Thùng rác
        </Link>
      </div>

      {/* Bảng danh sách */}
      <table className="min-w-full bg-white border text-sm">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="px-4 py-2">STT</th>
            <th className="px-4 py-2">Tên thuộc tính</th>
            <th className="px-4 py-2">Mã thuộc tính</th>
            <th className="px-4 py-2">Mô tả</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* Dữ liệu sẽ render ở đây */}
        </tbody>
      </table>
    </div>
  );
};

export default TrashAttribute;

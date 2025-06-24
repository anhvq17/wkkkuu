import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash, Plus } from "lucide-react";
import axios from "axios";

type AttributeValue = {
  _id: string;
  value: string;
  valueCode: string;
  attributeId: {
    _id: string;
    name: string;
  };
};

const AttributeValueManager = () => {
  const [attributeValues, setAttributeValues] = useState<AttributeValue[]>([]);

  const fetchAttributeValues = async () => {
    try {
      const res = await axios.get("http://localhost:3000/attribute-value");
      setAttributeValues(res.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách giá trị thuộc tính:", error);
    }
  };

  useEffect(() => {
    fetchAttributeValues();
  }, []);

  // Xử lý xóa mềm
  const handleSoftDelete = async (id: string) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa giá trị này?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/attribute-value/soft/${id}`);
      alert("Đã chuyển vào thùng rác");
      fetchAttributeValues();
    } catch (error) {
      console.error("Lỗi xóa mềm:", error);
      alert("Xóa thất bại");
    }
  };

  return (
    <div className="p-1">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold">Danh sách giá trị thuộc tính</h1>
        <Link to="/admin/attribute-values/add">
          <button className="w-8 h-8 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center">
            <Plus size={14} />
          </button>
        </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-6 border-b my-4 text-base font-medium text-gray-500">
        <Link
          to="/admin/attribute-values"
          className="pb-2 border-b-2 border-blue-500 text-blue-600"
        >
          Giá trị đang hoạt động
        </Link>
        <Link
          to="/admin/attribute-values/trash"
          className="pb-2 hover:text-blue-500 hover:border-b-2 hover:border-blue-300"
        >
          Thùng rác
        </Link>
      </div>

      {/* Bảng danh sách */}
      <table className="min-w-full bg-white border text-sm">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="px-4 py-2">STT</th>
            <th className="px-4 py-2">Giá trị</th>
            <th className="px-4 py-2">Mã giá trị</th>
            <th className="px-4 py-2">Tên thuộc tính</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {attributeValues.map((item, index) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.value}</td>
              <td className="px-4 py-2">{item.valueCode}</td>
              <td className="px-4 py-2">{item.attributeId?.name || "Không xác định"}</td>
              <td className="px-4 py-2">
                <div className="flex gap-1">
                  <Link to={`/admin/attribute-values/edit/${item._id}`}>
                    <button className="w-8 h-8 bg-green-600 text-white rounded hover:bg-green-700 flex items-center justify-center">
                      <Edit size={14} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleSoftDelete(item._id)}
                    className="w-8 h-8 bg-red-600 text-white rounded hover:bg-red-700 flex items-center justify-center"
                  >
                    <Trash size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttributeValueManager;

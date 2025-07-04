import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  volume: string;
  fragrance?: string;
}

interface OrderDetail {
  _id: string;
  userId: string;
  fullName: string;
  phone: string;
  totalAmount: number;
  paymentMethod: string;
  status: string;
  address: {
    province: string;
    district: string;
    ward: string;
    detail: string;
  };
  items: OrderItem[];
  createdAt?: string;
}

const DetailOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:3000/orders/${orderId}`);
        const data = await res.json();
        setOrder(data);
        setStatus(data.status || "pending");
      } catch (err) {
        console.error("Lỗi khi lấy đơn hàng:", err);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handleSaveStatus = async () => {
    try {
      const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setOrder((prev) => (prev ? { ...prev, status } : prev));
        setIsModalOpen(false);
      } else {
        alert("Không thể cập nhật trạng thái");
      }
    } catch (err) {
      console.error("Lỗi khi cập nhật trạng thái:", err);
    }
  };

  if (!order) return <div className="p-4">Đang tải đơn hàng...</div>;

  const fullAddress = order.address
    ? `${order.address.detail}, ${order.address.ward}, ${order.address.district}, ${order.address.province}`
    : "Không rõ";

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">
        Chi tiết đơn hàng - {order._id}
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <strong>Khách hàng:</strong> {order.fullName}
        </div>
        <div>
          <strong>Ngày đặt hàng:</strong>{" "}
          {new Date(order.createdAt || "").toLocaleDateString()}
        </div>
        <div>
          <strong>Mã khách hàng:</strong> {order.userId}
        </div>
        <div>
          <strong>Trạng thái:</strong> {getStatusText(order.status)}
        </div>
        <div>
          <strong>Phương thức thanh toán:</strong>{" "}
          {order.paymentMethod === "cod" ? "COD" : "VNPAY"}
        </div>
        <div className="col-span-2">
          <strong>Địa chỉ giao hàng:</strong> {fullAddress}
        </div>
      </div>

      <table className="w-full border border-gray-300 mb-4 text-sm">
        <thead className="bg-black text-white text-left">
          <tr>
            <th className="px-4 py-2">Tên sản phẩm</th>
            <th className="px-4 py-2">Dung tích</th>
            <th className="px-4 py-2">Số lượng</th>
            <th className="px-4 py-2">Đơn giá</th>
            <th className="px-4 py-2">Thành tiền</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {order.items?.length ? (
            order.items.map((item, index) => (
              <tr key={index} className="border">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.volume}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.price.toLocaleString()}₫</td>
                <td className="px-4 py-2">
                  {(item.price * item.quantity).toLocaleString()}₫
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="border bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-gray-500 italic py-4">
                Không có sản phẩm nào trong đơn hàng
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-end mt-3">
        <Link to="/admin/orders">
          <button className="border bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-md text-xs">
            Quay lại
          </button>
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Thay đổi trạng thái đơn hàng
            </h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border px-4 py-2 mb-4 rounded"
            >
              <option value="pending">Đang xử lý</option>
              <option value="processing">Đang giao hàng</option>
              <option value="success">Giao thành công</option>
              <option value="refund">Đã hoàn hàng</option>
              <option value="cancel">Đã hủy</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white px-3 py-1 rounded text-xs"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveStatus}
                className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getStatusText = (status: string) => {
  switch (status) {
    case "pending":
      return "Đang xử lý";
    case "processing":
      return "Đang giao hàng";
    case "success":
      return "Giao thành công";
    case "refund":
      return "Đã hoàn hàng";
    case "cancel":
      return "Đã hủy";
    default:
      return status;
  }
};

export default DetailOrder;

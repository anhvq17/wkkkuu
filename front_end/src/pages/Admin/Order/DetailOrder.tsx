import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

interface OrderItem {
  variantId: {
    productId: { name: string };
    attributes: { valueId: { value: string } }[];
  };
  price: number;
  quantity: number;
}

interface Address {
  province: string;
  district: string;
  ward: string;
  detail: string;
}

interface User {
  _id: string;
}

interface OrderDetail {
  _id: string;
  userId: User;
  fullName: string;
  phone: string;
  totalAmount: number;
  paymentMethod: string;
  status: string;
  address: Address;
  createdAt?: string;
}

interface OrderResponse {
  order: OrderDetail;
  items: OrderItem[];
}

const DetailOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:3000/orders/${orderId}`);
        const data = await res.json();
        setOrder(data);
        setStatus(data.order.status || "pending");
      } catch (err) {
        console.error("Lỗi khi lấy đơn hàng:", err);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handleSaveStatus = async () => {
    try {
      const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        // Cập nhật local state
        setOrder((prev) =>
          prev ? { ...prev, order: { ...prev.order, status } } : prev
        );

        // 🔥 Phát sự kiện WebSocket sau khi cập nhật thành công
        socket.emit("orderStatusChanged", {
          orderId,
          status,
        });
      } else {
        alert("Không thể cập nhật trạng thái");
      }
    } catch (err) {
      console.error("Lỗi khi cập nhật trạng thái:", err);
    }
  };

  if (!order) return <div className="p-4">Đang tải đơn hàng...</div>;

  const fullAddress = order.order.address
    ? `${order.order.address.detail}, ${order.order.address.ward}, ${order.order.address.district}, ${order.order.address.province}`
    : "Không rõ";

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">
        Chi tiết đơn hàng - {order.order._id}
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <strong>Khách hàng:</strong> {order.order.fullName}
        </div>
        <div>
          <strong>Ngày đặt hàng:</strong>{" "}
          {new Date(order.order.createdAt || "").toLocaleDateString()}
        </div>
        <div>
          <strong>Mã khách hàng:</strong> {order.order.userId._id}
        </div>
        <div>
          <strong>Trạng thái:</strong> {getStatusText(order.order.status)}
        </div>
        <div>
          <strong>Phương thức thanh toán:</strong>{" "}
          {order.order.paymentMethod === "cod" ? "COD" : "VNPAY"}
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
                <td className="px-4 py-2">{item.variantId.productId.name}</td>
                <td className="px-4 py-2">
                  {item.variantId.attributes[0].valueId.value}
                </td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.price.toLocaleString()}₫</td>
                <td className="px-4 py-2">
                  {(item.price * item.quantity).toLocaleString()}₫
                </td>
                <td className="px-4 py-2">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-fit h-8 px-2 rounded-md bg-white text-gray-700 outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="pending">Chờ xác nhận</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="processing">Đang giao hàng</option>
                    <option value="delivered">Đã giao hàng</option>
                    <option value="success">Giao hàng thành công</option>
                    <option value="cancel">Đã hủy</option>
                  </select>

                  <button
                    onClick={handleSaveStatus}
                    className="ml-2 px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Lưu
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
    </div>
  );
};

const getStatusText = (status: string) => {
  switch (status) {
    case "pending":
      return "Đang xử lý";
    case "confirmed":
      return "Đã xác nhận";
    case "processing":
      return "Đang giao hàng";
    case "delivered":
      return "Đã giao hàng";
    case "success":
      return "Giao thành công";
    case "cancel":
      return "Đã hủy";
    default:
      return status;
  }
};

export default DetailOrder;

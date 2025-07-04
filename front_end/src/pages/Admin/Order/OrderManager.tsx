import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Order {
  _id: string;
  userId: string;
  totalAmount: number;
  status: string;
  discountCode?: string;
}

const OrderManager = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:3000/orders");
        if (!res.ok) throw new Error("Lỗi khi lấy danh sách đơn hàng");
        const data = await res.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message || "Đã xảy ra lỗi");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Danh sách đơn hàng</h2>

      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="min-w-full bg-white border text-sm">
          <thead>
            <tr className="bg-black text-white text-left">
              <th className="px-4 py-2">Mã đơn hàng</th>
              <th className="px-4 py-2">Mã khách hàng</th>
              <th className="px-4 py-2">Trạng thái</th>
              <th className="px-4 py-2">Tổng tiền</th>
              <th className="px-4 py-2">Mã giảm giá</th>
              <th className="px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td
                  className="px-4 py-4 text-center text-gray-500 italic"
                  colSpan={6}
                >
                  Chưa có đơn hàng nào.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="border-t">
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">{order.userId}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      order.status === "success"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {getStatusText(order.status)}
                  </td>
                  <td className="px-4 py-2 text-red-600 font-semibold">
                    {order.totalAmount.toLocaleString()}₫
                  </td>
                  <td className="px-4 py-2">
                    {order.discountCode || "Không có"}
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/admin/orderDetails/${order._id}`}
                      className="border bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs transition duration-200"
                    >
                      Xem chi tiết
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

const getStatusText = (status: string) => {
  switch (status) {
    case "pending":
      return "Chờ xử lý";
    case "processing":
      return "Đang giao hàng";
    case "success":
      return "Giao thành công";
    case "cancel":
      return "Đã huỷ";
    default:
      return status;
  }
};

export default OrderManager;

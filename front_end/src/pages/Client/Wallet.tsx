import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Transaction = {
  _id?: string;
  type: "add" | "withdraw" | "refund";
  amount: number;
  date: string;
  status?: "completed" | "failed";
  note?: string;
};

const Wallet: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message] = useState<string | null>(null);
  const [history, setHistory] = useState<Transaction[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    fetchWallet();
    fetchHistory();
  }, []);

  const fetchWallet = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Bạn chưa đăng nhập");
        return;
      }
      const res = await axios.get("http://localhost:3000/api/wallet", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBalance(res.data.wallet);
      setError(null);
    } catch {
      setError("Lỗi khi lấy dữ liệu ví");
    }
  };

  const fetchHistory = async () => {
    setLoadingHistory(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Bạn chưa đăng nhập");
        setLoadingHistory(false);
        return;
      }
      const res = await axios.get("http://localhost:3000/api/wallet/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data.history);
    } catch {
      setError("Lỗi khi lấy lịch sử giao dịch");
    } finally {
      setLoadingHistory(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Trang chủ</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">Ví của tôi</span>
      </div>

      {error && <p className="mb-4 text-center text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}
      {message && <p className="mb-4 text-center text-green-600 bg-green-100 p-3 rounded-lg">{message}</p>}

      <div className="bg-white text-[#5f518e] border-2 border-[#5f518e] p-6 mt-14 mb-8 text-center max-w-3xl mx-auto">
        {balance !== null ? (
          <>
            <p className="text-lg opacity-80 mb-1">Số dư khả dụng</p>
            <p className="text-4xl font-extrabold">
              {balance.toLocaleString()} <span className="text-2xl"></span>
            </p>
          </>
        ) : (
          <p>Đang tải...</p>
        )}
      </div>

      <div className="bg-white border-2 border-[#5f518e] text-center max-w-5xl mx-auto mb-10 p-4">
        <div className="border-b-2 border-[#5f518e] -mx-4 mb-4 pb-4">
          <h2 className="text-lg text-[#5f518e]">Lịch sử giao dịch</h2>
        </div>
        {loadingHistory ? (
          <p className="text-center text-gray-500">Đang tải...</p>
        ) : history.length === 0 ? (
          <p className="text-center text-gray-500">Chưa có giao dịch nào</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg">
              <tbody>
                {history.map((tx, i) => (
                  <tr
                    key={i}
                    className={`text-center ${
                      tx.type === "withdraw"
                        ? "text-red-600"
                        : tx.type === "refund"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    <td className="p-3">
                      {tx.type === "withdraw"
                        ? "Thanh toán"
                        : tx.type === "refund"
                        ? "Hoàn tiền"
                        : "Không xác định"}
                    </td>
                    <td className="p-3">{tx.note || "-"}</td>
                    <td className="p-3">{tx.amount.toLocaleString()}</td>
                    <td className="p-3">{new Date(tx.date).toLocaleString()}</td>
                    <td className="p-3 font-semibold">
                      {tx.status === "completed" ? (
                        <span className="text-green-600">Thành công</span>
                      ) : tx.status === "failed" ? (
                        <span className="text-red-600">Thất bại</span>
                      ) : (
                        "Chưa xác định"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
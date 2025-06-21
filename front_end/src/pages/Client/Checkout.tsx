import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  type Province,
  type District,
  type Ward,
} from "sub-vn";
import AddressSelector from "../../components/AddressSelector";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [address, setAddress] = useState<{
    province?: Province;
    district?: District;
    ward?: Ward;
  }>({});
  const [detailAddress, setDetailAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
    if (userInfo) {
      setFullName(userInfo.username || "");
      setPhone(userInfo.phone || "");
    }
  }, []);

  const { province: selectedProvince, district: selectedDistrict, ward: selectedWard } = address;

  const isFormValid = () => {
    return fullName && phone && selectedProvince && selectedDistrict && selectedWard && detailAddress;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log("Thông tin giao hàng:", {
        fullName,
        phone,
        address: {
          province: selectedProvince?.name,
          district: selectedDistrict?.name,
          ward: selectedWard?.name,
          detail: detailAddress,
        },
        paymentMethod,
      });
      setIsLoading(false);
      window.location.href = "/ordersuccessfully";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/cart" className="text-gray-500 hover:text-gray-900">
            Giỏ hàng
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium text-black">Thanh toán</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Thông tin giao hàng</h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium text-gray-700">Thông tin người nhận</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nhập họ và tên"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-medium text-gray-700">Địa chỉ giao hàng</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tỉnh/Thành phố, Quận/Huyện, Phường/Xã <span className="text-red-500">*</span>
                      </label>
                      <AddressSelector 
                        value={address}
                        onChange={setAddress}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Địa chỉ chi tiết <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={detailAddress}
                        onChange={(e) => setDetailAddress(e.target.value)}
                        placeholder="Số nhà, tên đường, tổ, khu phố..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  {detailAddress && selectedWard && selectedDistrict && selectedProvince && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-600">
                        <strong>Địa chỉ giao hàng:</strong>
                      </p>
                      <p className="text-sm text-gray-800 mt-1">
                        {detailAddress}, {selectedWard.name}, {selectedDistrict.name}, {selectedProvince.name}
                      </p>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-md font-medium text-gray-700">Phương thức thanh toán</h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                      />
                      <div className="ml-3">
                        <span className="text-gray-700 font-medium">Thanh toán khi nhận hàng (COD)</span>
                        <p className="text-sm text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</p>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "vnpay"}
                        onChange={() => setPaymentMethod("vnpay")}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                      />
                      <div className="ml-3">
                        <span className="text-gray-700 font-medium">VNPay</span>
                        <p className="text-sm text-gray-500">Thanh toán qua cổng VNPay</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-6">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Đơn hàng của bạn</h2>
              </div>

              {/* Order Items */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://byvn.net/CD9y"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">JEAN PAUL GAULTIER</h4>
                    <p className="text-sm text-gray-500">Dung tích: 100ml</p>
                    <p className="text-sm text-gray-500">Hương vị: Nhẹ nhàng</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">70.000₫</p>
                    <p className="text-sm text-gray-500">x1</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tạm tính</span>
                    <span className="text-gray-800">70.000₫</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Phí vận chuyển</span>
                    <span className="text-green-600 font-medium">Miễn phí</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Giảm giá</span>
                    <span className="text-red-600">-0₫</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Tổng cộng</span>
                    <span className="text-xl font-bold text-orange-500">70.000₫</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Đã bao gồm VAT</p>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid() || isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-200"
                >
                  {isLoading ? "Đang xử lý..." : "Đặt hàng"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Bằng việc đặt hàng, bạn đồng ý với{" "}
                  <Link to="/terms" className="text-orange-500 hover:underline">
                    Điều khoản sử dụng
                  </Link>{" "}
                  và{" "}
                  <Link to="/privacy" className="text-orange-500 hover:underline">
                    Chính sách bảo mật
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
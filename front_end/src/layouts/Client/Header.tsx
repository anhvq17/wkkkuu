import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ClientHeader = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?q=${encodeURIComponent(keyword.trim())}`);
      setKeyword("");
    }
  };

  return (
    <header className="w-full h-[60px] bg-[#fdfdfd] shadow-md">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="h-full flex items-center">
          <Link to={"/"}>
            <img src="/img/logo.png" alt="Logo" className="h-6 object-contain" />
          </Link>
        </div>

        <nav className="flex items-center space-x-8 text-sm font-bold uppercase">
          <div className="relative group cursor-pointer">
            <span className="hover:text-gray-700">Nước hoa nam <i className="fas fa-angle-down ml-1"></i></span>
          </div>
          <div className="relative group cursor-pointer">
            <span className="hover:text-gray-700">Nước hoa nữ <i className="fas fa-angle-down ml-1"></i></span>
          </div>
          <div className="relative group cursor-pointer">
            <span className="hover:text-gray-700">Thương hiệu <i className="fas fa-angle-down ml-1"></i></span>
          </div>
        </nav>

        <div className="flex items-center space-x-6 text-xl text-black">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button type="submit">
              <i className="fas fa-search absolute right-3 top-1 text-base text-gray-600"></i>
            </button>
          </form>
          <div className="h-5 border-l border-gray-300"></div>
          <Link to={"/login"} className="hover:text-gray-600">
            <i className="fas fa-user text-base"></i>
          </Link>
          <div className="h-5 border-l border-gray-300"></div>
          <Link to={"/cart"} className="hover:text-gray-600">
            <i className="fas fa-cart-shopping text-base"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;

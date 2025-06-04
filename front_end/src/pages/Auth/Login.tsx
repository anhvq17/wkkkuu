import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Đăng nhập thất bại');
      } else {
        setMessage('Đăng nhập thành công');
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role); // lưu role

        setTimeout(() => {
          if (data.user.role === 'admin') {
            navigate('/dashboard');
          } else {
            navigate('/');
          }
        }, 0);
      }
    } catch (err) {
      setMessage('Lỗi server');
      console.error(err);
    }
  };

  return (
    <div className=" w-screen flex justify-center items-center dark:bg-gray-900">
      <div className="grid gap-8">
        <div className=" m-4">
          <div className=" p-10 m-2">
           

            {message && <p className="text-center text-red-500 mb-4">{message}</p>}

            <form onSubmit={handleLogin} className="bg-[#7f7cb4] p-8 rounded-lg flex flex-col md:flex-row items-center text-white space-y-6 md:space-y-0 md:space-x-10">
              {/* //cột trái logo chữ */}
              <div className="space-y-2 text-5xl font-extrabold leading-tight text-center">
                <div className="bg-[url('https://i.ibb.co/ZJxF2jw/mosaic.jpg')] bg-cover bg-clip-text text-transparent">
                  SECOND
                </div>
               
              </div>
              {/* // cột phải form đăng nhập */}

              <div className="w-80">
                <h2 className="text-2xl font-semibold mb-6 text-center">ĐĂNG NHẬP</h2>
               

                <input
                id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                  className="w-full px-4 py-2 mb-4 rounded-md text-black focus:outline-none"
                  required
                />

                <div className="relative mb-4">
                  <input
                   id="password"
                    type="password"
                     value={password}
                    placeholder="Nhập mật khẩu"
                     onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                    required
                  />
                  <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">👁️</span>
                </div>
           

                <button
                  type="submit"
                  className="w-full py-2 bg-[#9f86c0] hover:bg-[#a892c9] text-white font-semibold rounded-md mb-4"
                >
                  Xác nhận
                </button>

                <div className="flex items-center my-4">
                  <hr className="flex-grow border-white" />
                  <span className="px-3 text-white">hoặc</span>
                  <hr className="flex-grow border-white" />
                </div>

                <p className="text-center text-sm">
                  Bạn chưa có tài khoản?
                  <a href="#" className="text-[#dcc4f2] hover:underline">Đăng ký</a>
                </p>
              </div>
              {/* kthuc */}
              
            </form>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

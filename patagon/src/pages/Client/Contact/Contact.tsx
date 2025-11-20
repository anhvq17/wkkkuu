import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-[#464134] flex items-center justify-center p-24">
      <div className="w-full max-w-5xl rounded-3xl bg-[#f4f4f1] p-12">
        <h1 className="text-7xl text-[#464134] font-bold font-orbitron tracking-tight mb-12">Contact</h1>
        <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12">
          <div className="text-[#464134]">
            <h2 className="text-3xl font-bold font-orbitron mb-3">Call</h2>
            <p className="font-mono mb-1">+84 (977) 907-877</p>
            <p className="font-mono">+84 (728) 246-667</p>
          </div>
          <div className="text-[#464134]">
            <h2 className="text-3xl font-bold font-orbitron mb-3">Email</h2>
            <p className="font-mono mb-1">us@patagon.com</p>
            <p className="font-mono">help@patagon.com</p>
          </div>

          <div className="text-[#464134]">
            <h2 className="text-3xl font-bold font-orbitron mb-3">Visit</h2>
            <p className="font-mono">3/98 Vu Trong Phung,</p>
            <p className="font-mono">Thanh Xuan, Hanoi,</p>
            <p className="font-mono">Vietnam</p>
          </div>
          <div className="text-[#464134]">
            <h2 className="text-3xl font-bold font-orbitron mb-3">Social</h2>
            <p className="font-mono mb-1">Instagram</p>
            <p className="font-mono mb-1">X (Twitter)</p>
            <p className="font-mono">LinkedIn</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold font-orbitron text-[#464134] mb-6">Send Us a Message</h2>
          <div className="space-y-5 font-mono">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[#464134] font-normal mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 bg-white border-none rounded-lg text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[#464134] font-normal mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 bg-white border-none rounded-lg text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[#464134] font-normal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border-none rounded-lg text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[#464134] font-normal mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-white border-none rounded-lg text-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#464134] font-normal mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={4}
                className="w-full px-4 py-3 bg-white border-none rounded-lg text-sm focus:outline-none resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full text-white bg-[#f5797e] font-normal font-mono py-3 rounded-2xl transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
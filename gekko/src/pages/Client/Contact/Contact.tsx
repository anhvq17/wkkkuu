const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-24 relative">
      <div className="w-full max-w-5xl bg-[#f4f4f1] p-12">
        <h1 className="text-7xl font-bold font-oswald tracking-tight mb-12">Get in Touch</h1>
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          <div>
            <h2 className="text-2xl font-bold font-oswald mb-3">Hotline</h2>
            <p className="font-oswald mb-1">+84 (977) 907-877</p>
            <p className="font-oswald">+84 (728) 246-667</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-oswald mb-3">Email</h2>
            <p className="font-oswald mb-1">us@gekko.com</p>
            <p className="font-oswald">help@gekko.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-oswald mb-3">Address</h2>
            <p className="font-oswald">3/98 Vu Trong Phung,</p>
            <p className="font-oswald">Thanh Xuan, Hanoi,</p>
            <p className="font-oswald">Vietnam</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-oswald mb-3">Social</h2>
            <p className="font-oswald mb-1">Facebook</p>
            <p className="font-oswald mb-1">Instagram</p>
            <p className="font-oswald">X (Twitter)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
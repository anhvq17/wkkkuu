const AdminHeader = () => {
  return (
    <header className="h-[64px] bg-white border-b flex items-center justify-between px-6 fixed top-0 left-[240px] z-40 w-[calc(100%-240px)]">
      <h1 className="text-xl font-semibold uppercase">Trang quản trị Website bán nước hoa Sevend</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Xin chào, Admin!</span>
      </div>
    </header>
  )
}

export default AdminHeader

const AddProduct = () => {

  return (
    <form className="max-w-4xl mx-auto p-6 bg-white space-y-6">
      <h2 className="text-xl font-semibold">THÊM MỚI SẢN PHẨM</h2>

      <div>
        <label className="block font-medium mb-1">
          <span className="text-red-500">*</span> Tên sản phẩm
        </label>
        <input className="w-full border rounded px-3 py-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">
            <span className="text-red-500">*</span> Danh mục
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option value="">-- Chọn danh mục --</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            <span className="text-red-500">*</span> Thương hiệu
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option value="">-- Chọn thương hiệu --</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">
          <span className="text-red-500">*</span> Mô tả
        </label>
        <textarea className="w-full border rounded px-3 py-2 h-24" />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Biến thể sản phẩm</h3>

        {/* Biến thể mẫu */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Hương vị</label>
            <input placeholder="Hương vị" className="border px-2 py-1 rounded w-full" />
          </div>

          <div>
            <label className="block font-medium mb-1">Thể tích (ml)</label>
            <input placeholder="Thể tích" className="border px-2 py-1 rounded w-full" />
          </div>

          <div>
            <label className="block font-medium mb-1">Giá (vnđ)</label>
            <input placeholder="Giá" className="border px-2 py-1 rounded w-full" />
          </div>

          <div>
            <label className="block font-medium mb-1">Số lượng</label>
            <input placeholder="Số lượng" className="border px-2 py-1 rounded w-full" />
          </div>

          <div>
            <label className="block font-medium mb-1">Ảnh</label>
            <input type="file" accept="image/*" className="border px-2 py-1 rounded w-full" />
            <img src="" alt="Preview" className="mt-2 w-20 h-20 object-cover border rounded" />
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 h-fit"
            >
              Xóa
            </button>
          </div>
        </div>

        <button
          type="button"
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          + Thêm biến thể
        </button>
      </div>

      <div>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Thêm sản phẩm
        </button>
      </div>
    </form>
  );
};


export default AddProduct;

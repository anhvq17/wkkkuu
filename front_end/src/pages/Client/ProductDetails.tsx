import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart } from 'lucide-react';

interface ProductDetailType {
  _id: string;
  name: string;
  price: number;
  image: string;
  brandId?: { name: string };
  description?: string;
  status?: string;
  code?: string;
  categoryId?: { _id: string; name: string };
}

interface VariantType {
  _id: string;
  productId: { _id: string; name: string };
  volume: number;
  flavors: string;
  price: number;
  stock_quantity: number;
  image: string;
}

interface CommentType {
  _id: string;
  userId: { _id: string; username: string };
  content: string;
  createdAt: string;
}

interface UserInfoType {
  _id: string;
  username: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [mainImg, setMainImg] = useState('');
  const [relatedProducts, setRelatedProducts] = useState<ProductDetailType[]>([]);
  const [variants, setVariants] = useState<VariantType[]>([]);
  const [selectedScent, setSelectedScent] = useState('');
  const [selectedVolume, setSelectedVolume] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<VariantType | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'review'>('description');
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUserInfo] = useState<UserInfoType | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed && parsed._id && parsed.username) {
          setUserInfo(parsed);
        }
      } catch (err) {
        console.error('Lỗi parse userInfo:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchProduct();
      fetchComments();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(res.data.data);
      setMainImg(res.data.data.image);
      fetchVariants(res.data.data._id);
      if (res.data.data.categoryId?._id) {
        fetchRelatedProducts(res.data.data.categoryId._id, res.data.data._id);
      }
    } catch (err) {
      console.error('Lỗi khi tải sản phẩm:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchVariants = async (productId: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/variant`, { params: { productId } });
      setVariants(res.data.data);
    } catch (err) {
      console.error('Lỗi khi lấy danh sách biến thể:', err);
    }
  };

  const fetchRelatedProducts = async (categoryId: string, currentId: string) => {
    try {
      const res = await axios.get('http://localhost:3000/products', { params: { categoryId } });
      const related = res.data.data.filter((p: ProductDetailType) => p._id !== currentId).slice(0, 4);
      setRelatedProducts(related);
    } catch {
      setRelatedProducts([]);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/comments/product/${id}`);
      setComments(res.data);
    } catch {
      setComments([]);
    }
  };

  useEffect(() => {
    if (!selectedVolume || !selectedScent || variants.length === 0) {
      setSelectedVariant(null);
      return;
    }

    const matched = variants.find(
      (v) => v.volume.toString() === selectedVolume && v.flavors === selectedScent
    );

    if (matched) {
      setSelectedVariant(matched);
      setMainImg(matched.image);
    } else {
      setSelectedVariant(null);
    }
  }, [selectedVolume, selectedScent, variants]);

  const addToCart = () => {
    if (!product || !selectedVariant) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(
      (item: any) => item.variantId === selectedVariant._id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        variantId: selectedVariant._id,
        productId: product._id,
        name: product.name,
        image: selectedVariant.image,
        price: selectedVariant.price,
        selectedScent,
        selectedVolume,
        quantity: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleAddToCart = () => {
    if (!selectedScent || !selectedVolume) {
      alert('Vui lòng chọn hương và dung tích!');
      return;
    }
    addToCart();
    alert('Đã thêm vào giỏ hàng!');
  };

  const handleBuyNow = () => {
    if (!selectedScent || !selectedVolume) {
      alert('Vui lòng chọn hương và dung tích!');
      return;
    }
    addToCart();
    navigate('/cart');
  };

  const handleCommentSubmit = async () => {
    if (!user || !newComment.trim()) {
      alert('Bạn phải đăng nhập và viết nội dung.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/comments', {
        productId: id,
        userId: user._id,
        content: newComment.trim(),
      });
      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error('Lỗi gửi bình luận:', err);
      alert('Không thể gửi bình luận.');
    }
  };

  if (!id || loading || !product) return <div>Đang tải hoặc lỗi dữ liệu...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={mainImg} alt={product.name} className="w-full max-h-[400px] object-contain" />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-red-600 text-xl mb-4">
            {(selectedVariant?.price || product.price || 0).toFixed(3)} VND
          </p>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Mùi hương:</label>
            <div className="flex gap-2">
              {[...new Set(variants.map((v) => v.flavors))].map((scent) => (
                <button
                  key={scent}
                  onClick={() => setSelectedScent(scent)}
                  className={`px-3 py-1 border rounded ${selectedScent === scent ? 'bg-blue-500 text-white' : ''}`}
                >
                  {scent}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Dung tích:</label>
            <div className="flex gap-2">
              {[...new Set(variants.map((v) => v.volume.toString()))].map((vol) => (
                <button
                  key={vol}
                  onClick={() => setSelectedVolume(vol)}
                  className={`px-3 py-1 border rounded ${selectedVolume === vol ? 'bg-blue-500 text-white' : ''}`}
                >
                  {vol}ml
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleAddToCart} className="bg-green-600 text-white px-4 py-2 rounded">Thêm vào giỏ</button>
            <button onClick={handleBuyNow} className="bg-blue-600 text-white px-4 py-2 rounded">Mua ngay</button>
          </div>
        </div>
      </div>

      {/* Mô tả và bình luận */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Mô tả sản phẩm</h2>
        <p>{product.description || 'Chưa có mô tả.'}</p>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2">Bình luận</h3>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết bình luận..."
            className="w-full border p-2 rounded"
          />
          <button onClick={handleCommentSubmit} className="mt-2 bg-purple-600 text-white px-4 py-2 rounded">
            Gửi
          </button>

          <ul className="mt-4 space-y-3">
            {comments.map((c) => (
              <li key={c._id} className="border p-3 rounded">
                <p className="font-medium">{c.userId.username}</p>
                <p className="text-sm text-gray-500">{new Date(c.createdAt).toLocaleString()}</p>
                <p>{c.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
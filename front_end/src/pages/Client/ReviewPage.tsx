import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import moment from "moment";

interface Comment {
  _id: string;
  userId: {
    name: string;
  };
  content: string;
  rating: number;
  image?: string[];
  createdAt: string;
}

const ReviewPage = () => {
  const { productId } = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/comments/product/${productId}`
      );
      setComments(res.data);
    } catch (err) {
      console.log("Lỗi khi tải bình luận:", err);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchComments();
    }
  }, [productId]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Vui lòng đăng nhập để đánh giá sản phẩm.");
      return;
    }

    if (!content || rating === 0) {
      alert("Vui lòng nhập nội dung và chọn số sao.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("productId", productId || "");
      formData.append("content", content);
      formData.append("rating", rating.toString());
      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.post("http://localhost:3000/comments", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setContent("");
      setRating(0);
      setImageFile(null);
      fetchComments();
    } catch (err) {
      console.log("Lỗi khi gửi bình luận:", err);
      alert("Đã có lỗi xảy ra khi gửi đánh giá.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Đánh giá sản phẩm</h2>

      {/* Form đánh giá */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer mr-1 ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* File upload */}
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          ref={fileInputRef}
          onChange={(e) =>
            setImageFile(e.target.files ? e.target.files[0] : null)
          }
        />
         
        <label
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer text-blue-600 hover:underline mb-2 inline-block"
        >
          {imageFile ? `Đã chọn: ${imageFile.name}` : "Chọn hình ảnh (tùy chọn)"}
        </label>

        <textarea
          className="w-full border rounded p-2 mt-2"
          rows={3}
          placeholder="Nhập đánh giá của bạn..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {loading ? "Đang gửi..." : "Gửi đánh giá"}
        </button>
      </div>

      {/* Danh sách đánh giá */}
      <div>
        {comments.length === 0 ? (
          <p className="text-gray-500">Chưa có đánh giá nào.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="border-b py-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-medium">
                {comment.userId.name}
                <span className="text-sm text-gray-500">
                  {moment(comment.createdAt).format("DD/MM/YYYY HH:mm")}
                </span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`${
                      star <= comment.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p>{comment.content}</p>
              {comment.image && (
              <a
                href={`http://localhost:3000/uploads/${comment.image}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`http://localhost:3000/uploads/${comment.image}`}
                  alt="Ảnh đánh giá"
                  className="w-40 h-40 object-cover rounded border hover:brightness-75 transition"
                />
              </a>
            )}

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;

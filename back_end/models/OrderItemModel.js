import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders", required: true },
    variantId: { type: mongoose.Schema.Types.ObjectId, ref: "product_variants", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    isReviewed: { type: Boolean, default: false },
    snapshot: {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
      productName: { type: String, required: true },
      productImage: { type: String, required: true },
      variantId: { type: mongoose.Schema.Types.ObjectId, ref: "product_variants" },
      variantName: { type: String },
      variantImage: { type: String },
      variantPrice: { type: Number, required: true }
    },
  },
  { timestamps: true }
);

export default mongoose.model("order_items", orderItemSchema);
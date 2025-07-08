import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  variantId: { type: mongoose.Schema.Types.ObjectId, ref: 'product_variants', required: true },
  quantity: { type: Number, required: true, min: 1 },
}, { timestamps: true });

export default mongoose.model('cart_items', cartItemSchema);

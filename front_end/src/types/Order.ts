export interface CartItem {
  id: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  volume: string;
  fragrance: string;
  image: { src: string };
}

export interface Address {
  province: string;
  district: string;
  ward: string;
  detail: string;
}

export interface ShippingInfo {
  fullName: string;
  phone: string;
  address: {
    province: string;
    district: string;
    ward: string;
    detailAddress: string;
  };
}
  
export interface CreateOrderPayload {
  userId: string;
  items: {
    variantId: string;
    quantity: number;
    price: number;
  }[];
  shippingInfo: ShippingInfo;
  paymentMethod: 'cod' | 'vnpay';
}

export interface Order {
  _id: string;
  userId: string;
  fullName: string;
  phone: string;
  address: Address;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  paymentMethod: 'cod' | 'vnpay';
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  _id: string;
  orderId: string;
  variantId: string;
  quantity: number;
  price: number;
}

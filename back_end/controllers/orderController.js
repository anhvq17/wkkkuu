import Order from '../models/orderModel.js';
import OrderItem from '../models/OrderItemModel.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, fullName, phone, address, paymentMethod, items } = req.body;

    if (!userId || !fullName || !phone || !address || !items?.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = await Order.create({
      userId,
      fullName,
      phone,
      address,
      paymentMethod,
      totalAmount,
      orderStatus: 'Chờ xử lý',
      paymentStatus: 'Chưa thanh toán'
    });

    await Promise.all(items.map(item => OrderItem.create({
      orderId: order._id,
      variantId: item.variantId,
      quantity: item.quantity,
      price: item.price
    })));

    return res.status(201).json({ message: 'Order created', orderId: order._id });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};


export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId');
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('userId');
    if (!order) return res.status(404).json({ error: 'Order not found' });

    const items = await OrderItem.find({ orderId: order._id }).populate({
      path: 'variantId',
      populate: [
        { path: 'productId', model: 'products' },
        { path: 'attributes.attributeId', model: 'attributes' },
        { path: 'attributes.valueId', model: 'attribute_values' }
      ]
    });

    return res.status(200).json({ order, items });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getOrdersByUserWithItems = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    const ordersWithItems = await Promise.all(
      orders.map(async (order) => {
        const items = await OrderItem.find({ orderId: order._id }).populate({
          path: 'variantId',
          populate: [
            { path: 'productId', model: 'products' },
            { path: 'attributes.attributeId', model: 'attributes' },
            { path: 'attributes.valueId', model: 'attribute_values' }
          ]
        });
        return { ...order.toObject(), items };
      })
    );
    return res.status(200).json(ordersWithItems);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updateData = { ...req.body };
    
    // Kiểm tra quy tắc cập nhật trạng thái tuần tự
    if (req.body.orderStatus) {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      const statusOrder = [
        'Chờ xử lý',
        'Đã xử lý', 
        'Đang giao hàng',
        'Đã giao hàng',
        'Đã nhận hàng'
      ];

      const currentIndex = statusOrder.indexOf(order.orderStatus);
      const newIndex = statusOrder.indexOf(req.body.orderStatus);

      // Kiểm tra quy tắc chuyển đổi
      const isValidTransition = 
        currentIndex === newIndex || // Cùng trạng thái
        newIndex === currentIndex + 1 || // Lên trạng thái tiếp theo
        newIndex === currentIndex - 1 || // Xuống trạng thái trước đó (để sửa lỗi)
        (req.body.orderStatus === 'Đã huỷ đơn hàng' && (order.orderStatus === 'Chờ xử lý' || order.orderStatus === 'Đã xử lý')); // Hủy đơn hàng chỉ khi ở trạng thái Chờ xử lý hoặc Đã xử lý

      if (!isValidTransition) {
        if (req.body.orderStatus === 'Đã huỷ đơn hàng') {
          return res.status(400).json({ 
            error: 'Chỉ có thể hủy đơn hàng khi đang ở trạng thái "Chờ xử lý" hoặc "Đã xử lý"' 
          });
        } else {
          return res.status(400).json({ 
            error: 'Không thể chuyển từ trạng thái hiện tại sang trạng thái này. Vui lòng cập nhật theo thứ tự: Chờ xử lý → Đã xử lý → Đang giao hàng → Đã giao hàng → Đã nhận hàng' 
          });
        }
      }
    }
    
    // Nếu trạng thái đơn hàng được cập nhật thành "Đã nhận hàng" 
    // thì tự động cập nhật trạng thái thanh toán thành "Đã thanh toán"
    if (req.body.orderStatus === 'Đã nhận hàng') {
      updateData.paymentStatus = 'Đã thanh toán';
    }
    
    const updated = await Order.findByIdAndUpdate(req.params.id, updateData, { new: true });
    return res.status(200).json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await OrderItem.deleteMany({ orderId: req.params.id });
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
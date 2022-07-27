import OrderModel, { IOrder } from '../models/order.model';

class OrderService {
  private orderModel = OrderModel;

  async getAll() {
    const query = {};
    return this.orderModel.find(query);
  }

  async getById(id: string) {
    const order = await this.orderModel.findById(id);
    if (!order) throw new Error('Order does not exist');
    return order;
  }

  async create(data: IOrder) {
    const neworder = new this.orderModel(data);
    return neworder.save();
  }

  async updateById(id: string, data: IOrder) {
    const order = await this.orderModel.findByIdAndUpdate(id, { ...data, updatedAt: new Date() }, { new: true });
    if (!order) throw new Error('Can not update order');
    return order;
  }

  async deleteById(id: string) {
    const order = await this.orderModel.findByIdAndDelete(id);
    if (!order) throw new Error('Can not delete order');
    return order;
  }
}

export default new OrderService();

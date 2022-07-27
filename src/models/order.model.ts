import { Document, Schema, model } from 'mongoose';
import { ORDER_STATUS, USER_STATUS } from '../common/constants';

interface Address {
  country: string;
  city: string;
  state: string;
  zipCode: string;
  street: string;
}

export interface IOrder {
  products: string;
  description: string;
  address: Address;
  amountTotal: string;
  shippingFee: string;
  userId: string;
  orderStatus: string;
}

export interface IOrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema(
  {
    products: { type: Schema.Types.ObjectId, ref: 'Product' },
    description: { type: String, required: false },
    address: {
      country: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      zipCode: { type: String, required: false },
      street: { type: String, required: false },
    },
    amountTotal: { type: Number, required: false },
    shippingFee: { type: String, required: false },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    orderStatus: { type: Number, enum: ORDER_STATUS, default: ORDER_STATUS.PENDDING },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model<IOrderModel>('Order', OrderSchema);

export default OrderModel;

import { Document, Schema, model } from 'mongoose';
import { USER_STATUS } from '../common/constants';

export interface IProduct {
  category: string;
  name: string;
  title: string;
  image: string;
  unitPrice: Number;
  oldPrice: Number;
  description: string;
  status: string;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    category: { type: String, required: false },
    name: { type: String, required: false },
    title: { type: String, required: false },
    image: { type: String, required: false },
    unitPrice: { type: String, required: false },
    oldPrice: { type: String, required: false },
    description: { type: String, required: false },
    status: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model<IProductModel>('Product', ProductSchema);

export default ProductModel;

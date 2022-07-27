import ProductModel, { IProduct } from '../models/product.model';

class ProductService {
  private productModel = ProductModel;

  async getAll() {
    const query = {};
    return this.productModel.find(query);
  }

  async getById(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) throw new Error('Product does not exist');
    return product;
  }

  async create(data: IProduct) {
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }

  async updateById(id: string, data: IProduct) {
    const product = await this.productModel.findByIdAndUpdate(id, { ...data, updatedAt: new Date() }, { new: true });
    if (!product) throw new Error('Can not update product');
    return product;
  }

  async deleteById(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) throw new Error('Can not delete product');
    return product;
  }
}

export default new ProductService();

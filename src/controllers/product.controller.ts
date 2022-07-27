import { Request, Response } from 'express';
import { IProduct } from '../models/product.model';
import { IUser } from '../models/user.model';
import productService from '../services/product.service';

export class ProductController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await productService.getAll();
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const data = await productService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send('lỗi');
    }
  }

  async create(req: Request, res: Response) {
    try {
      const body: IProduct = req.body;

      const data = await productService.create(body);
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send('lỗi');
    }
  }

  async updateById(req: Request, res: Response) {
    try {
      const body: IProduct = req.body;
      console.log('hoho', req.body);

      const data = await productService.updateById(req.params.id, body);
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send('lỗi');
    }
  }

  async deleteById(req: Request, res: Response) {
    try {
      const data = await productService.deleteById(req.params.id);
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send('lỗi');
    }
  }
}

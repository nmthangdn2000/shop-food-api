import { HTTP_METHOD } from '../common/constants';
import { BaseRouter } from './basic.router';
import { ProductController } from '../controllers/product.controller';

export class OrderRouter extends BaseRouter {
  private productController = new ProductController();

  constructor() {
    super();
    this.init();
  }

  init() {
    this.route({ method: HTTP_METHOD.GET, url: '/', action: this.productController.getAll, middleware: [] });
    this.route({ method: HTTP_METHOD.GET, url: '/:id', action: this.productController.getById, middleware: [] });
    this.route({ method: HTTP_METHOD.POST, url: '/', action: this.productController.create, middleware: [] });
    this.route({ method: HTTP_METHOD.PUT, url: '/:id', action: this.productController.updateById, middleware: [] });
    this.route({ method: HTTP_METHOD.DELETE, url: '/:id', action: this.productController.deleteById, middleware: [] });
  }
}

import { Application } from 'express';
import { AuthRouter } from '../routers/auth.router';
import { OrderRouter } from '../routers/order.router';
import { ProductRouter } from '../routers/product.router';

export class RouteConfig {
  private authRouter = new AuthRouter();
  private productRouter = new ProductRouter();
  private orderRouter = new OrderRouter();

  init(app: Application) {
    app.use('/auth', this.authRouter.addRoot());
    app.use('/api/products', this.productRouter.addRoot());
    app.use('/api/orders', this.orderRouter.addRoot());
  }
}

import { Application } from 'express';
import { AuthRouter } from '../routers/auth.router';

export class RouteCongig {
  private authRouter: AuthRouter;
  constructor() {
    this.authRouter = new AuthRouter();
  }

  init(app: Application) {
    app.use('/auth', this.authRouter.addRoot());
  }
}

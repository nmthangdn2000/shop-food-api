import { HTTP_METHOD } from '../common/constants';
import { BaseRouter } from './basic.router';
import { AuthController } from '../controllers/auth.controller';

export class AuthRouter extends BaseRouter {
  private authController = new AuthController();

  constructor() {
    super();
    this.init();
  }

  init() {
    this.route({ method: HTTP_METHOD.POST, url: '/login', action: this.authController.login, middleware: [] });
    this.route({ method: HTTP_METHOD.POST, url: '/register', action: this.authController.register, middleware: [] });
  }
}

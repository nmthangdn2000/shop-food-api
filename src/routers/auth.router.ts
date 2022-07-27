import { HTTP_METHOD } from '../common/constants';
import { BaseRouter } from './basic.router';
import authController from '../controllers/auth.controller';

export class AuthRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.route({ method: HTTP_METHOD.POST, url: '/login', action: authController.login, middleware: [] });
    this.route({ method: HTTP_METHOD.POST, url: '/register', action: authController.register, middleware: [] });
  }
}

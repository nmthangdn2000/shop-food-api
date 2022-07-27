import { Request, Response } from 'express';
import { IUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService;
  }
  async login(req: Request, res: Response) {
    try {
      const data = await this.authService.login();
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const body: IUser = req.body;
      console.log('hoho', req.body);

      const data = await this.authService.register(body);
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.send('lỗi');
    }
  }
}

export default new AuthController();

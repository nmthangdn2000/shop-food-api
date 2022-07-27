import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response) {
    try {
      const data = await this.authService.login();
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  async register(req: Request, res: Response) {
    try {
      console.log('hoho', req.body);

      const data = await this.authService.register(req.body);
      return res.status(200).json(data);
    } catch (error) {
      return res.send(error);
    }
  }
}

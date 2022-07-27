import { NextFunction, Request, Response } from 'express';
import appConfig from '../configs/appConfig';
import jwt from 'jsonwebtoken';

export interface UserAuth extends Request {
  uid: string;
}

export interface CustomRequest extends Request {
  user: UserAuth;
}

export class AuthMiddlewares {
  static verifyUser(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1] || '';
      const decoded = jwt.verify(token, appConfig.KEY_SECRET_JWT);
      console.log(decoded);
      req.user = decoded as UserAuth;
      next();
      // res.send('ok');
    } catch (error) {
      return res.status(403).json({
        message: 'Authorization failed',
      });
    }
  }
}

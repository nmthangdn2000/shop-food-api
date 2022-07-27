import { Model } from 'mongoose';
import { USER_STATUS } from '../common/constants';
import hashPassword from '../common/hashPassword';
import UserModel, { IUserModel, IUser } from '../models/user.model';

export class AuthService {
  private userModel = UserModel;

  async login() {}

  async register(data: IUser) {
    console.log('aaaaaa');

    const existingUser = await this.userModel.findOne({ email: data.email }).lean();
    if (existingUser) throw new Error('Email already exists');

    data.password = hashPassword.sha512(`${data.email}${data.password}`);
    data.status = USER_STATUS.ACTIVE;

    const newUser = new this.userModel(data);
    return newUser.save();
  }
}

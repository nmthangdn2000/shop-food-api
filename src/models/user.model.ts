import { Document, Schema, model } from 'mongoose';
import { USER_STATUS } from '../common/constants';

export interface IUser {
  email: string;
  password: string;
  sdt?: string;
  fullname?: string;
  status?: USER_STATUS;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sdt: { type: String, required: false },
    fullname: { type: String, required: false },
    status: { type: Number, enum: USER_STATUS, default: USER_STATUS.ACTIVE },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model<IUserModel>('User', UserSchema);

export default UserModel;

import { Model } from 'sequelize';

interface ModelBase {
  id?: number,
  createdAt?: string,
  updatedAt?: string
}

// User model
export interface UserProps extends ModelBase {
  fullName: string,
  userName: string,
  avatarUrl: string,
  isActive: boolean,
  phone: string,
  email: string,
}
export interface UserInstance extends Model<UserProps>, UserProps {};

// Code model
export interface CodeProps extends ModelBase {
  userId?: number,
  code: string
}
export interface CodeInstance extends Model<CodeProps>, CodeProps {};
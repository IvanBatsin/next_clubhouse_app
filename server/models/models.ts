import { db } from '../db';
import { DataTypes } from 'sequelize';
import { CodeInstance, UserInstance } from './interfaces';

export const User = db.define<UserInstance>('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  fullName: {type: DataTypes.STRING},
  userName: {type: DataTypes.STRING},
  avatarUrl: {type: DataTypes.STRING},
  isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
  phone: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING}
}, {
  timestamps: true
});

export const Code = db.define<CodeInstance>('code', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  code: {type: DataTypes.STRING} 
});

User.hasOne(Code);
Code.belongsTo(User);
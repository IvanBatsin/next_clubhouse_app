import jwt from 'jsonwebtoken';

export const createJWT = (data: any): string => {
  return jwt.sign(data, process.env.SECRET_JWT_KEY || 'secret string', {algorithm: 'HS256', expiresIn: process.env.JWT_MAX_AGE});
}
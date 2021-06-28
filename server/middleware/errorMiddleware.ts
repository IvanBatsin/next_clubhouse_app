import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.status) {
    return res.status(error.status).json({message: error.message, error: error.errors});
  }

  return res.status(500).json({message: 'Server Error'});
} 
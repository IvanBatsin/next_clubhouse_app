import { Response, Request, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ErrorException } from '../exeption/errorExeption';
import { Code, User } from '../models/models';
import { transporter } from '../core/nodemailer';
import { createCode } from '../utils/createCode';

class Controller {
  getMe(req: Request, res: Response): void {
    res.send(req.user);
  }

  async setEmail(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw ErrorException.BadRequest(errors.array()[0].msg);
      }

      const { email } = req.body;
      const existEmail = await User.findOne({where: {email}});

      if (existEmail) {
        return next(ErrorException.BadRequest('Email already exist'));
      }

      await User.update({email}, {where: {id: req.user!.id}});
      res.status(201);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async sendCode(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const user = await User.findOne({where: {id: req.user!.id}});

      const condidateCode = await Code.findOne({where: {userId: user!.id}}); 
      if (condidateCode) {
        throw ErrorException.BadRequest('Code already exists');
      }

      const code = await Code.create({code: createCode().toString(), userId: user!.id});

      await transporter.sendMail({
        subject: 'Confirmation code',
        from: process.env.NODEMAILER_USER,
        to: user!.email,
        text: "",
        html: 
          `
            <div>
              <h1>Your Confirmation code - ${code.code}</h1>
            </div>
          ` 
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export const AuthController = new Controller();
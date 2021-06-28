import { body } from 'express-validator';

export const emailCheck = [
  body('email')
    .isEmail().withMessage('Enter correct email')
];
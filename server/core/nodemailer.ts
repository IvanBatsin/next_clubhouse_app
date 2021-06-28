import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
  }
});
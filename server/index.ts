import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path: path.join(__dirname, '../', '.env')});
import express, { Application, NextFunction, Request, Response } from 'express';
import { passport } from './core/passport';
import morgan from 'morgan';
import cors from 'cors';
import { db } from './db';
import { upload } from './core/multer';
import sharp from 'sharp';
import fs from 'fs';
import { createFileName } from './utils/createFileName';

import { errorMiddleware } from './middleware/errorMiddleware';
 
// Controllers
import { AuthController } from './controllers/AuthController';

// Validators
import { emailCheck } from './validators/userValidator';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

app.post('/upload', upload.single('avatar'), (req: Request, res: Response) => {
  const newFileName = `${createFileName()}.jpeg`;
  sharp(req.file.path)
    .resize(150, 150)
    .toFormat('jpeg')
    .toFile(path.resolve('public', 'avatars', newFileName), err => {
      if (err) {
        throw err;
      }
    });

    fs.stat(req.file.path, err => {
      if (err) {
        console.log('We have an error with stats file');
      }

      fs.unlink(req.file.path, err => {
        if (err) {
          console.log('File unlink error');
        }
      });
    });
  res.json({avatar: `/avatars/${newFileName}`});
});

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.send(`<script>window.opener.postMessage('${JSON.stringify(req.user)}', '*');window.close();</script>`);
  });

app.post('/phone', passport.authenticate('jwt', { session: false }), (req: Request, res: Response) => {
  res.send('/phone');
});

app.get('/', (req: Request, res: Response) => {
  res.send(process.env.GITHUB_CLIENT_ID);
});

app.get('/auth/me', passport.authenticate('jwt', { session: false }), AuthController.getMe);
app.post('/auth/email', passport.authenticate('jwt', { session: false }), emailCheck, AuthController.setEmail);

const start = async (): Promise<void> => {
  try {
    await db.authenticate();
    await db.sync({force: true});
    app.listen(+process.env.PORT! || 4000, () => console.log('we on air'));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

app.use(errorMiddleware);

start();
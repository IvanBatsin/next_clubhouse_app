import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path: path.join(__dirname, '../', '.env')});
import express, { Application, Request, Response } from 'express';
import { passport } from './core/passport';
import morgan from 'morgan';
import cors from 'cors';
import { db } from './db';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.send();
  });

app.get('/', (req: Request, res: Response) => {
  res.send(process.env.GITHUB_CLIENT_ID);
});

const start = async (): Promise<void> => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(+process.env.PORT! || 4000, () => console.log('we on air'));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
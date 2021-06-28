import multer from 'multer';
import path from 'path';
import { createFileName } from '../utils/createFileName';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = path.resolve('public', 'avatars');
    cb(null, dir);
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({storage});
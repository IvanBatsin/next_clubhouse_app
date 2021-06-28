import { UserProps } from './models/interfaces';

declare global {
  namespace Express {
    interface User extends UserProps {
      token?: string
    }
  }
}

// types/express/index.d.ts

import { User } from '../../models/user.model'; // তোমার actual user model import করো (type অথবা interface)

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name?: string;
        email?: string;
        role?: string;
      };
    }
  }
}

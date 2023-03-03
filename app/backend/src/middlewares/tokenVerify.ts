import { verify } from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET as string;

const tokenVerify = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = verify(token, JWT_SECRET);
    res.locals.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenVerify;

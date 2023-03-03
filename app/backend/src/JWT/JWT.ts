import { sign, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET as string;

const gnToken = (payload: unknown, expiresIn = '10d') => {
  const jwtConfig: SignOptions = {
    expiresIn,
    algorithm: 'HS256',
  };

  const token = sign({ payload }, JWT_SECRET, jwtConfig);
  return token;
};

export default gnToken;

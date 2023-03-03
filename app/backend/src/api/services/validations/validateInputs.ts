import { ObjectSchema } from 'joi';
import { login } from './schema';
import IUser from '../../interfaces/IUser';

const validate = <T>(body: T, callback: ObjectSchema) => {
  const { error } = callback.validate(body);
  if (error) return error.message;
  return null;
};

const validateLogin = (body: IUser) => validate<IUser>(body, login);

const next = () => ({});

export { validateLogin, next };

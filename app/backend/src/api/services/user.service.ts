import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import User from '../../database/models/User';
import JWT from '../../JWT/JWT';
import IUser from '../interfaces/IUser';
import IResponse from '../interfaces/IResponse';
import { validateLogin } from './validations/validateInputs';
import { generateResponse, generateResponseError } from '../../utils/generateResponse';

class UserService {
  private model: ModelStatic<User> = User;

  async login(body: IUser): Promise<IResponse> {
    const findAllUsers = await this.model.findAll();
    const findUser = findAllUsers.find((e) => e.email === body.email);

    const loginValidate = validateLogin(body);
    if (loginValidate) return generateResponseError(401, 'Invalid email or password');

    const validatePass = bcrypt.compareSync(body.password, findUser?.password || '_');

    if (!findUser || !validatePass) return generateResponseError(401, 'Invalid email or password');

    const { id, email, role, username } = findUser;
    const token = JWT({ id, email, role, username });
    return generateResponse(200, { token });
  }
}

export default UserService;

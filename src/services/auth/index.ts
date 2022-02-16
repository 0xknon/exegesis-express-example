import { v4 } from 'uuid';
import UserService from 'src/services/user';
import { User } from 'src/interfaces/user';

const authenticate = (token: string): User => {
  // TODO: validate token
  console.log(token);

  return UserService.getUserbyId(v4());
};

export default {
  authenticate,
};

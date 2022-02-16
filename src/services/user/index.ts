import { User } from 'src/interfaces/user';

const getUserbyId = (id: string): User => {
  return {
    id,
    name: 'Bob',
    age: 18,
  };
};

export default { getUserbyId };

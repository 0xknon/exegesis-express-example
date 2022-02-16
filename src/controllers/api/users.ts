import { ExegesisExpressContext, ResourceNotFoundError, ErrorCode } from 'src/interfaces/common';
import UserService from 'src/services/user';

export const getUser = (context: ExegesisExpressContext): void => {
  const {
    req,
    params: {
      path: { id },
    },
  } = context;
  const { res } = req;
  const user = UserService.getUserbyId(id);

  if (!user) {
    throw new ResourceNotFoundError(ErrorCode.USER_NOT_FOUND);
  }

  res.status(200).send(user);
};

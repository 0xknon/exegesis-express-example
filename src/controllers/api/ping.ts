// const asyncHandler = require('../../middlewares/asyncHandler')
import { ExegesisExpressContext } from 'src/interfaces/common';

export const ping = (context: ExegesisExpressContext): void => {
  const { req } = context;
  const { res } = req;
  res.status(200).send({ status: 200 });
};

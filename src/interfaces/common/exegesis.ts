import { Response, NextFunction } from 'express';
import { ExegesisContext, HttpIncomingMessage } from 'exegesis-express';

export interface ExegesisExpressContext extends ExegesisContext {
  req: ExegesisExpressRequest;
}

export interface ExegesisExpressRequest extends HttpIncomingMessage {
  res: Response;
  next: NextFunction;
}

import { ExegesisPluginContext, AuthenticatorInfo, Authenticator } from 'exegesis-express';
import { ErrorCode } from 'src/interfaces/common';
import AuthService from 'src/services/auth';

// Ref: https://github.com/exegesis-js/exegesis/blob/master/docs/OAS3%20Security.md
export const BearerAuthenticator: Authenticator = (
  context: ExegesisPluginContext,
  info: AuthenticatorInfo,
) => {
  try {
    const {
      req: {
        headers: { authorization },
      },
    } = context;

    if (!authorization) {
      return { type: 'missing', statusCode: 401, message: ErrorCode.AUTH_HEADER_MISSING };
    }

    const token = authorization.substring('Bearer '.length);
    const user = AuthService.authenticate(token);

    return { type: 'success', user };
  } catch (error) {
    return { type: 'invalid', statusCode: 401, message: ErrorCode.AUTH_UNAUTORIZAED };
  }
};

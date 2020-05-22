import JWT from 'jsonwebtoken';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { IUserSchema } from 'common/types/user/user-schema';
import config from 'server/config';

export interface IVerifiedUserRequest extends Request {
  decodedUser?: IUserSchema;
}

export default function verifyToken(req: IVerifiedUserRequest, res: Response, next: NextFunction) {
  const BEARER_START = 'Bearer ';
  let token = req.headers.authorization;

  if (token) {
    if (token.startsWith(BEARER_START)) {
      token = token.slice(BEARER_START.length, token.length);
    }

    if (config.jwt.secret) {
      JWT.verify(token, config.jwt.secret, (err, decodedUser) => {
        if (err) {
          return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message,
          });
        }

        req.decodedUser = decodedUser as IUserSchema;
        return next();
      });
    } else {
      throw new Error('JWT secret is not found');
    }
  } else {
    return res.status(HTTPStatuses.BAD_REQUEST).json({
      success: false,
      message: 'No token provided',
    });
  }
}

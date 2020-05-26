import JWT from 'jsonwebtoken';
import HTTPStatuses from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { IUserInterfaceDB } from 'common/types/user/user-schema';
import config from 'server/config';

export interface IVerifiedUserRequest extends Request {
  decodedUser: IUserInterfaceDB;
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

        if (!decodedUser) {
          return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error during authorization',
          });
        }

        req.decodedUser = decodedUser as IUserInterfaceDB;
        return next();
      });
    } else {
      throw new Error('JWT secret is not found');
    }
  } else {
    return res.status(HTTPStatuses.BAD_REQUEST).json({
      success: false,
      message: 'No token provided or token invalid',
    });
  }
}

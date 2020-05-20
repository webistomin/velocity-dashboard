import JWT from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { IUserSchema } from '../../../models/user';
import config from '../../../config';

export interface IExtendedUserSchema extends IUserSchema {
  _id: string;
}

export interface ITokenRequest extends Request {
  decoded: IExtendedUserSchema | undefined;
}

export default function verifyToken(req: ITokenRequest, res: Response, next: NextFunction) {
  const BEARER_START = 'Bearer ';
  let token = req.headers.authorization;

  if (token) {
    if (token.startsWith(BEARER_START)) {
      token = token.slice(BEARER_START.length, token.length);
    }

    if (config.jwt.secret) {
      JWT.verify(token, config.jwt.secret, (err, decoded) => {
        if (err) {
          res.json({
            success: false,
            message: err.message,
          });
        }

        req.decoded = decoded as IExtendedUserSchema;
        next();
      });
    }
  } else {
    res.json({
      success: false,
      message: 'No token provided',
    });
  }
}

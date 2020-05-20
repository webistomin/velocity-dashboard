import JWT from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../../config';
import { IUserSchema } from '../../models/user';

export interface IExtendedUserSchema extends IUserSchema {
  _id: string;
}

export interface ITokenRequest extends Request {
  decoded: IExtendedUserSchema | undefined;
}

export default function verifyToken(req: ITokenRequest, res: Response, next: NextFunction) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  const checkBearer = 'Bearer ';

  if (token) {
    // @ts-ignore
    if (token.startsWith(checkBearer)) {
      token = token.slice(checkBearer.length, token.length);
    }

    if (config.jwt.secret) {
      // @ts-ignore
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

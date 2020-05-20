import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import JWT from 'jsonwebtoken';
import User from 'server/models/user';
import config from 'server/config';
import { WEEK } from 'common/consts/times';

export default async (req: Request, res: Response) => {
  try {
    let token = null;
    const { firstName, lastName, role, email, password } = req.body;
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.role = role;
    newUser.email = email;
    newUser.password = password;
    await newUser.save();

    if (config.jwt.secret) {
      token = JWT.sign(newUser.toJSON(), config.jwt.secret, {
        expiresIn: WEEK,
      });
    }

    await res.status(HTTPStatuses.CREATED).json({
      success: true,
      token,
      message: 'User created',
    });
  } catch (e) {
    await res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: e.message,
    });
  }
};

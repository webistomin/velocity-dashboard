import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import User from '../../../../models/user';
import config from '../../../../config';

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
        expiresIn: 60480,
      });
    }

    await res.status(201).json({
      success: true,
      token,
      message: 'User created',
    });
  } catch (e) {
    await res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import User from '../../../../models/user';
import config from '../../../../config';

export default async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      await res.status(403).json({
        success: false,
        message: 'User is not found',
      });
    } else if (foundUser.comparePassword(password) && config.jwt.secret) {
      const token = JWT.sign(foundUser.toJSON(), config.jwt.secret, {
        expiresIn: 604800,
      });

      await res.json({
        success: true,
        token,
      });
    } else {
      res.status(403).json({
        success: false,
        message: 'Wrong password',
      });
    }
  } catch (e) {
    await res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

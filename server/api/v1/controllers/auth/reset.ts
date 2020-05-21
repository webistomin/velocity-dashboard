import { Request, Response } from 'express';
import User from 'server/models/user/user';
import PasswordReset from 'server/models/auth/password-reset';
import bcrypt from 'bcrypt';

export default async (req: Request, res: Response) => {
  // @ts-ignore
  const { user } = req;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      throw new Error(err.message);
    }

    bcrypt.hash(req.body.password, salt, async function(err, hash) {
      if (err) {
        throw new Error(err.message);
      }

      await User.findOneAndUpdate(
        {
          email: user.email,
        },
        {
          password: hash,
        }
      );
    });
  });

  await PasswordReset.findOneAndDelete({ email: user.email });

  return res.json({
    success: true,
    message: 'Password has been successfully reset',
  });
};

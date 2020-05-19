import { Router, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import User from '../../models/user';
import config from '../../config';

const router = Router();

export default (app: Router) => {
  app.use('/auth', router);

  router.post('/signup', async (req: Request, res: Response) => {
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
  });

  router.post('/signin', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({ email });
      console.log(foundUser);

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
  });
};

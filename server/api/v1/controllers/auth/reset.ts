import { Request, Response } from 'express';
import HTTPStatuses from 'http-status-codes';
import User from 'server/models/user';
import { GMAIL_TRANSPORT, VIEW_OPTIONS } from 'server/config/email';
// @ts-ignore
import hbs from 'nodemailer-express-handlebars';
import { SentMessageInfo } from 'nodemailer';

export default async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      await res.status(HTTPStatuses.UNAUTHORIZED).json({
        success: false,
        message: 'Account does not exist',
      });
    } else {
      VIEW_OPTIONS(GMAIL_TRANSPORT, hbs);

      const HelperOptions = {
        from: '"Tariqul islam" <tariqul.islam.rony@gmail.com>',
        to: email,
        subject: 'Hello world!',
        template: 'test',
        context: {
          name: 'tariqul_islam',
          email: 'tariqul.islam.rony@gmail.com',
          address: '52, Kadamtola Shubag dhaka',
        },
      };

      GMAIL_TRANSPORT.sendMail(HelperOptions, (error: Error | null, info: SentMessageInfo) => {
        if (error) {
          console.log(error);
        }
        console.log('email is send');
        console.log(info);
      });

      await res.json({
        success: true,
      });
    }
  } catch (e) {
    await res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: e.message,
    });
  }
};

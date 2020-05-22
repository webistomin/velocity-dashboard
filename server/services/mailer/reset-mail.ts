import { GMAIL_TRANSPORT, VIEW_OPTIONS } from 'server/config/email';
// @ts-ignore
import hbs from 'nodemailer-express-handlebars';
import { SentMessageInfo } from 'nodemailer';

import config from 'server/config';

export const sendResetMail = (email: string, token: string): Promise<SentMessageInfo> => {
  VIEW_OPTIONS(GMAIL_TRANSPORT, hbs);

  const HelperOptions = {
    from: `"Alexey Istomin" <${config.gmail.userName}>`,
    to: email,
    subject: 'Password reset',
    template: '/password-reset/password-reset',
    context: {
      link: `${config.base}/reset-password/${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    GMAIL_TRANSPORT.sendMail(HelperOptions, (error: Error | null, info: SentMessageInfo) => {
      if (error) {
        reject(error);
      }

      resolve(info);
    });
  });
};

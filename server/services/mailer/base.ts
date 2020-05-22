import { GMAIL_TRANSPORT, VIEW_OPTIONS } from 'server/config/email';
// @ts-ignore
import hbs from 'nodemailer-express-handlebars';
import { SentMessageInfo } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';

export const BASE_MAILER = (options: MailOptions): Promise<SentMessageInfo> => {
  VIEW_OPTIONS(GMAIL_TRANSPORT, hbs);

  return new Promise((resolve, reject) => {
    GMAIL_TRANSPORT.sendMail(options, (error: Error | null, info: SentMessageInfo) => {
      if (error) {
        reject(error);
      }

      resolve(info);
    });
  });
};

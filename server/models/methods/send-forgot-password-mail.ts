import { SentMessageInfo } from 'nodemailer';
import { nanoid } from 'nanoid';
import consola from 'consola';

import { sendResetMail } from 'server/services/mailer/reset-mail';
import PasswordReset from 'server/models/auth/password-reset';

export default async function sendForgotPasswordMail(): Promise<SentMessageInfo> {
  const token = nanoid(72);

  return new Promise((resolve, reject) => {
    sendResetMail(this.email, token)
      .then(async (info) => {
        await PasswordReset.create({
          email: this.email,
          token,
          createdAt: new Date(),
        });
        resolve(info);
        consola.success({
          badge: true,
          message: `Reset mail successfully sent: ${JSON.stringify(info)}`,
        });
      })
      .catch((error) => {
        reject(error);
        consola.error({
          badge: true,
          message: `Error during sending reset email: ${JSON.stringify(error)}`,
        });
      });
  });
}

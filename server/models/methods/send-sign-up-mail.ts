import { SentMessageInfo } from 'nodemailer';
import consola from 'consola';

import { sendSignUpMail } from 'server/services/mailer/reset-mail';

export default async function sendSignUpSuccessfulMail(): Promise<SentMessageInfo> {
  return await new Promise((resolve, reject) => {
    sendSignUpMail(this)
      .then((info) => {
        resolve(info);
        consola.success({
          badge: true,
          message: `Sign up mail successfully sent: ${JSON.stringify(info)}`,
        });
      })
      .catch((error) => {
        reject(error);
        consola.error({
          badge: true,
          message: `Error during sending sign up email: ${JSON.stringify(error)}`,
        });
      });
  });
}

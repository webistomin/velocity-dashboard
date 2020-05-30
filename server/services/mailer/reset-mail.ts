import { SentMessageInfo } from 'nodemailer';

import config from 'server/config';
import { IAuthPasswordReset } from 'common/types/auth/reset';
import { IUserInterface } from 'common/types/user/user-schema';
import { BASE_MAILER } from './base';

export const sendResetMail = (
  email: IAuthPasswordReset['email'],
  token: IAuthPasswordReset['token']
): Promise<SentMessageInfo> => {
  const HelperOptions = {
    from: `"Alexey Istomin" <${config.gmail.userName}>`,
    to: email,
    subject: 'Password reset',
    template: '/password-reset/password-reset',
    context: {
      link: `${config.base}/reset-password/${token}`,
    },
  };

  return BASE_MAILER(HelperOptions);
};

export const sendSignUpMail = (user: IUserInterface): Promise<SentMessageInfo> => {
  const HelperOptions = {
    from: `"Alexey Istomin" <${config.gmail.userName}>`,
    to: user.email,
    subject: 'Successful registration',
    template: '/sign-up/sign-up',
    context: {
      firstName: user.firstName,
      lastName: user.lastName,
      supportEmail: config.gmail.userName,
      link: `${config.base}/login`,
    },
  };

  return BASE_MAILER(HelperOptions);
};

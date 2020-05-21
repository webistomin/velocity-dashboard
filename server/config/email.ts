import nodemailer, { Transporter, TransportOptions } from 'nodemailer';
import config from './index';

export const GMAIL_TRANSPORT = nodemailer.createTransport({
  service: config.gmail.serviceName,
  host: config.gmail.serviceHost,
  secure: config.gmail.serviceSecure,
  port: config.gmail.servicePort,
  auth: {
    user: config.gmail.userName,
    pass: config.gmail.userPassword,
  },
} as TransportOptions);

export const VIEW_OPTIONS = (transport: Transporter, hbs: any) => {
  transport.use(
    'compile',
    hbs({
      viewEngine: {
        extName: '.hbs',
        partialsDir: 'server/mails',
        layoutsDir: 'server/mails',
        defaultLayout: 'test.hbs',
      },
      viewPath: 'server/mails',
      extName: '.hbs',
    })
  );
};

import signInController from './sign-in';
import signUpController from './sign-up';
import logoutController from './logout';
import forgotController from './forgot';
import resetController from './reset';

export const authControllers = {
  signIn: signInController,
  signUp: signUpController,
  logout: logoutController,
  forgot: forgotController,
  reset: resetController,
};

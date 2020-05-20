import { Context } from '@nuxt/types';

/**
 * Redirect to login page if user is not authorized
 */
export default async function({ $auth, redirect }: Context) {
  if (!$auth.loggedIn) {
    const REDIRECT_URL = '/login';
    await redirect(REDIRECT_URL);
  }
}

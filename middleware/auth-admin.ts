import { Context } from '@nuxt/types';

/**
 * If user is not admin – redirect him from protected route
 */
export default function ({ $auth, redirect }: Context) {
  const user = $auth.user;
  if (user && user.role !== 'admin') {
    redirect('/');
  }
}

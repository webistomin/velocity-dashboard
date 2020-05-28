export const serverUrls = {
  auth: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    logout: '/auth/logout',
    forgot: '/auth/forgot',
    reset: '/auth/reset',
  },
  healthcheck: {
    status: '/status',
  },
  profile: {
    own: '/profile/own',
    update: '/profile/update',
    uploadAvatar: '/profile/avatar',
  },
  weather: {
    current: '/weather/current',
  },
  statistics: {
    tripsByType: '/statistics/trips-by-type',
  },
  trips: {
    add: '/trips/add',
    start: '/trips/start',
    end: '/trips/end',
  },
  passenger: {
    signUp: '/passenger/sign-up',
  },
  driver: {
    signUp: '/driver/sign-up',
  },
  pages: {
    home: '/pages/home',
    analytics: '/pages/analytics',
  },
};

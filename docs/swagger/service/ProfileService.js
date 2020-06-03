/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/**
 * Update user avatar
 * By passing in the appropriate options, user can update avatar
 *
 * body ProfileAvatarSchema
 * returns ProfileAvatarSchemaSuccess
 **/
exports.profileAvatar = function (body) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
      message: 'Avatar has been updated',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get user profile object
 * By passing in the appropriate options, user can get profile
 *
 * authorization String
 * returns ProfileOwnSchema
 **/
exports.profileOwn = function (authorization) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      firstName: 'Alexey',
      lastName: 'Istomin',
      password: '123',
      role: 'operator',
      phone: '+7(999)-99-99',
      dob: '10.02.1997',
      bio: 'Just a man',
      theme: 'shelob',
      location: 'New York, NY',
      socials: {
        twitter: 'https://twitter.com/',
      },
      email: 'example@example.com',
      notifications: {
        isPushNotificationsEnabled: false,
        isEmailNotificationsEnabled: false,
        isQuarterNotificationsEnabled: false,
        isMonthlyNotificationsEnabled: false,
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update user profile
 * By passing in the appropriate options, user can update profile
 *
 * body ProfileUpdateSchema
 * returns ProfileUpdateSchemaSuccess
 **/
exports.profileUpdate = function (body) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
      message: 'Profile successfully updated',
      token: 'g8789fg789dgkjdfgkhd',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

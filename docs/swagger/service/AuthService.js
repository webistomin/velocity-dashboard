/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/**
 * Reset user password
 * By passing in the appropriate options, user can get email with reset link
 *
 * body UserForgotSchema
 * returns UserForgotSchemaSuccess
 **/
exports.authForgot = function (body) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
      message: 'Password reset link sent',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Set new user password
 * By passing in the appropriate options, user can change password
 *
 * body UserResetSchema
 * returns UserResetSchemaSuccess
 **/
exports.authReset = function (body) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
      message: 'Password has been successfully reset',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Logout user
 *
 * returns UserLoggedOutSchemaSuccess
 **/
exports.logOut = function () {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Authorize user
 * By passing in the appropriate options, user can login through website form
 *
 * body UserSignInSchema
 * returns UserSignInSchemaSuccess
 **/
exports.signIn = function (body) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
      token: 'g8789fg789dgkjdfgkhd',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Sign up user
 * By passing in the appropriate options, user can create new account for work
 *
 * body UserSignUpSchema
 * returns UserSignUpSchemaSuccess
 **/
exports.signUp = function (body) {
  return new Promise(function (resolve, reject) {
    const examples = {};
    examples['application/json'] = {
      success: true,
      message: 'User created',
      token: 'g8789fg789dgkjdfgkhd',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

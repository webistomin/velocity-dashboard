/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/**
 * Sign up driver
 * By passing in the appropriate options, driver can create new account for work
 *
 * body DriverSignUpSchema
 * returns DriverSignUpSchemaSuccess
 **/
exports.driverSignUp = function (body) {
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

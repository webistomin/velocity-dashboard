/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/**
 * Get server status
 * Get server status
 *
 * returns Healthcheck
 **/
exports.healthCheckGet = function () {
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
 * Get server status
 * Get server status
 *
 * returns Healthcheck
 **/
exports.healthCheckHead = function () {
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

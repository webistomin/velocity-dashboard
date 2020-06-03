/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const utils = require('../utils/writer.js');
const Auth = require('../service/AuthService');

module.exports.authForgot = function authForgot(req, res, next, body) {
  Auth.authForgot(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authReset = function authReset(req, res, next, body) {
  Auth.authReset(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logOut = function logOut(req, res, next) {
  Auth.logOut()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signIn = function signIn(req, res, next, body) {
  Auth.signIn(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signUp = function signUp(req, res, next, body) {
  Auth.signUp(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const utils = require('../utils/writer.js');
const Profile = require('../service/ProfileService');

module.exports.profileAvatar = function profileAvatar(req, res, next, body) {
  Profile.profileAvatar(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileOwn = function profileOwn(req, res, next, authorization) {
  Profile.profileOwn(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileUpdate = function profileUpdate(req, res, next, body) {
  Profile.profileUpdate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

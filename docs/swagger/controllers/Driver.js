/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const utils = require('../utils/writer.js');
const Driver = require('../service/DriverService');

module.exports.driverSignUp = function driverSignUp(req, res, next, body) {
  Driver.driverSignUp(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

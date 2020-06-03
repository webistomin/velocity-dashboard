/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const utils = require('../utils/writer.js');
const Healthcheck = require('../service/HealthcheckService');

module.exports.healthCheckGet = function healthCheckGet(req, res, next) {
  Healthcheck.healthCheckGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.healthCheckHead = function healthCheckHead(req, res, next) {
  Healthcheck.healthCheckHead()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

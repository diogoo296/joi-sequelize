'use strict'; // jshint ignore:line
let _ = require('lodash');
let fn = require('./lib/functions');

let JoiSequelize = function(Sequelize, model, options = {}) {
  this._joi = {};
  this._model = model;
  this._types = {};
  this._allowNull = [];
  this.omitVirtualFields = options.omitVirtualFields || true;
  this.sequelize = {
    define: require('./lib/define').bind(this),
    fn: Sequelize.fn.bind(Sequelize),
  };
  this.datatypes = require('./lib/datatypes');
  model(this.sequelize, this.datatypes);
};

_.merge(JoiSequelize.prototype, fn);


module.exports = JoiSequelize;

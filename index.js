
'use strict';

/**
 * Has own property
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Types methods
 */

var array = {};
var object = {};

/**
 * Array each
 * @param {Array} obj
 * @param {Function} fn
 * @api private
 */

array.each = function(obj, fn) {
  for (var i = 0; i < obj.length; i++) {
    fn(obj[i], i);
  }
};

/**
 * Array reverse each
 * @param {Array} obj
 * @param {Function} fn
 * @api private
 */

array.reverse = function(obj, fn) {
  for (var i = obj.length - 1; i >= 0 ; i--) {
    fn(obj[i], i);
  }
};

/**
 * Object each
 * @param {Object} obj
 * @param {Function} fn
 * @api private
 */

object.each = function(obj, fn) {
  for (var i in obj) {
    if (has.call(obj, i)) {
      fn(obj[i], i);
    }
  }
};

/**
 * Object reverse each
 * @param {Object} obj
 * @param {Function} fn
 * @api private
 */

object.reverse = function(obj, fn) {
  var keys = [];
  for (var k in obj) {
    if (has.call(obj, k)) {
      keys.push(k);
    }
  }
  for (var i = keys.length - 1; i >= 0; i--) {
    fn(obj[keys[i]], keys[i]);
  }
};

/**
 * Each router
 * @param  {String} method
 * @param  {Object|Array} obj
 * @param  {Function} fn
 * @return {Function}
 * @api private
 */

function route(method, obj, fn) {
  if (typeof fn === 'function') {
    switch (is(obj)) {
      case 'array' :
        return array[method](obj, fn);
      case 'object' :
        return object[method](obj, fn);
    }
  }
}

/**
 * Typeof
 * @param  {Object|Array} obj
 * @return {String}
 * @api private
 */

function is(obj) {
  return Object.prototype.toString.call(obj)
    .replace(/\[\w+\s(\w+)\]/i, '$1').toLowerCase();
}

/**
 * Module
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

function ea(obj, fn) {
  return ea.each(obj, fn);
}

/**
 * Each
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

ea.each = function(obj, fn) {
  return route('each', obj, fn);
};

/**
 * Reverse each
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

ea.reverse = function(obj, fn) {
  return route('reverse', obj, fn);
};

/**
 * Module exports
 */

module.exports = ea;

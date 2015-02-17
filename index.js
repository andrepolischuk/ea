
'use strict';

/**
 * Super methods
 * @api private
 */

var sup = {};

/**
 * Array each
 * @param {Function} fn
 * @api private
 */

sup.arrayEach = function(obj, fn) {
  for (var i = 0; i < obj.length; i++) {
    fn(obj[i], i);
  }
};

/**
 * Array reverse each
 * @param {Function} fn
 * @api private
 */

sup.arrayReverse = function(obj, fn) {
  for (var i = obj.length - 1; i >= 0 ; i--) {
    fn(obj[i], i);
  }
};

/**
 * Object each
 * @param {Function} fn
 * @api private
 */

sup.objectEach = function(obj, fn) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn(obj[i], i);
    }
  }
};

/**
 * Object reverse each
 * @param {Function} fn
 * @api private
 */

sup.objectReverse = function(obj, fn) {
  var keys = [];
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  for (var i = keys.length - 1; i >= 0; i--) {
    fn(obj[keys[i]], keys[i]);
  }
};

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
 * Super each
 * @param {Object|Array} obj
 * @param {Function} fn
 * @api public
 */

ea.each = function(obj, fn) {
  sup[ea.is(obj) + 'Each'](obj, fn);
};

/**
 * Super reverse each
 * @param {Object|Array} obj
 * @param {Function} fn
 * @api public
 */

ea.reverse = function(obj, fn) {
  sup[ea.is(obj) + 'Reverse'](obj, fn);
};

/**
 * Super typeof
 * @param  {Object|Array} obj
 * @return {String}
 * @api public
 */

ea.is = function(obj) {
  return Object.prototype.toString.call(obj)
    .replace(/\[\w+\s(\w+)\]/i, '$1').toLowerCase();
};

/**
 * Module exports
 */

module.exports = ea;

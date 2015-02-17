(function umd(require){
  if ('object' == typeof exports) {
    module.exports = require('1');
  } else if ('function' == typeof define && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['ea'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {

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

}, {}]}, {}, {"1":""})
);

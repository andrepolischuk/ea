
var ea = require('..');
var assert = require('assert');

var user = {
  name : 'Petr',
  age : 25
};

describe('ea(obj, fn)', function() {
  it('should return index', function() {
    var vals = [];
    ea(user, function(val, key) {
      vals.push(key);
    });
    assert.deepEqual(['name', 'age'], vals);
  });

  it('should return key/value pairs', function() {
    var vals = [];
    ea(user, function(val, key) {
      vals.push([key, val]);
    });
    assert.deepEqual([['name', 'Petr'], ['age', 25]], vals);
  });
});

describe('ea.reverse(obj, fn)', function() {
  it('should return reverse index', function() {
    var vals = [];
    ea.reverse(user, function(val, key) {
      vals.push(key);
    });
    assert.deepEqual(['age', 'name'], vals);
  });

  it('should return reverse key/value pairs', function() {
    var vals = [];
    ea.reverse(user, function(val, key) {
      vals.push([key, val]);
    });
    assert.deepEqual([['age', 25], ['name', 'Petr']], vals);
  });
});

var cities = [
  'Moscow',
  'Peterburg',
  'Novgorod'
];

describe('ea(arr, fn)', function() {
  it('should return index', function() {
    var vals = [];
    ea(cities, function(val, i) {
      vals.push(i);
    });
    assert.deepEqual([0, 1, 2], vals);
  });

  it('should return values', function() {
    var vals = [];
    ea(cities, function(val, i) {
      vals.push(val);
    });
    assert.deepEqual(['Moscow', 'Peterburg', 'Novgorod'], vals);
  });
});

describe('ea.reverse(arr, fn)', function() {
  it('should return reverse index', function() {
    var vals = [];
    ea.reverse(cities, function(val, i) {
      vals.push(i);
    });
    assert.deepEqual([2, 1, 0], vals);
  });

  it('should return reverse values', function() {
    var vals = [];
    ea.reverse(cities, function(val, i) {
      vals.push(val);
    });
    assert.deepEqual(['Novgorod', 'Peterburg', 'Moscow'], vals);
  });
});

var hello = 'hello';

describe('ea(str, fn)', function() {
  it('should return values', function() {
    var vals = [];
    ea(hello, function(val, i) {
      vals.push(val);
    });
    assert.deepEqual(['h', 'e', 'l', 'l', 'o'], vals);
  });
});

describe('ea.reverse(str, fn)', function() {
  it('should return reverse values', function() {
    var vals = [];
    ea.reverse(hello, function(val, i) {
      vals.push(val);
    });
    assert.deepEqual(['o', 'l', 'l', 'e', 'h'], vals);
  });
});

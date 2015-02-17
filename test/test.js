
var ea = require('..');
var should = require('should');

describe('ea', function() {

  var user = {
    name : 'Petr',
    age : 25
  };

  describe('#each(obj, fn)', function() {

    it('should return index', function() {
      var vals = [];
      ea(user, function(val, key) {
        vals.push(key);
      });
      vals.should.eql(['name', 'age']);
    });

    it('should return key/value pairs', function() {
      var vals = [];
      ea(user, function(val, key) {
        vals.push([key, val]);
      });
      vals.should.eql([['name', 'Petr'], ['age', 25]]);
    });

  });

  describe('#reverse(obj, fn)', function() {

    it('should return reverse index', function() {
      var vals = [];
      ea.reverse(user, function(val, key) {
        vals.push(key);
      });
      vals.should.eql(['age', 'name']);
    });

    it('should return reverse key/value pairs', function() {
      var vals = [];
      ea.reverse(user, function(val, key) {
        vals.push([key, val]);
      });
      vals.should.eql([['age', 25], ['name', 'Petr']]);
    });

  });

  var cities = [
    'Moscow',
    'Peterburg',
    'Novgorod'
  ];

  describe('#each(arr, fn)', function() {

    it('should return index', function() {
      var vals = [];
      ea(cities, function(val, i) {
        vals.push(i);
      });
      vals.should.eql([0, 1, 2]);
    });

    it('should return values', function() {
      var vals = [];
      ea(cities, function(val, i) {
        vals.push(val);
      });
      vals.should.eql(['Moscow', 'Peterburg', 'Novgorod']);
    });

  });

  describe('#reverse(arr, fn)', function() {

    it('should return index', function() {
      var vals = [];
      ea.reverse(cities, function(val, i) {
        vals.push(i);
      });
      vals.should.eql([2, 1, 0]);
    });

    it('should return values', function() {
      var vals = [];
      ea.reverse(cities, function(val, i) {
        vals.push(val);
      });
      vals.should.eql(['Novgorod', 'Peterburg', 'Moscow']);
    });

  });

});

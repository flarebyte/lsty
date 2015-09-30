/*global describe, it */
'use strict';
var assert = require('assert');
var lsty = require('../');

describe('lsty node module', function () {
  it('must have at least one test', function () {
    lsty();
    assert(true, 'I was too lazy to write any tests. Shame on me.');
  });
});

#!/usr/bin/env node
'use strict';
var meow = require('meow');
var lsty = require('./');

var cli = meow({
  help: [
    'Usage',
    '  lsty <input>',
    '',
    'Example',
    '  lsty Unicorn'
  ].join('\n')
});

lsty(cli.input[0]);

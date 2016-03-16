// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('../lib/utils/common').assign;

var inflate   = require('../lib/inflate');
var constants = require('../lib/zlib/constants');

var pako = {};

assign(pako, inflate, constants);

module.exports = pako;

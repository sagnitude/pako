// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('../lib/utils/common').assign;

var deflate   = require('../lib/deflate');
var constants = require('../lib/zlib/constants');

var pako = {};

assign(pako, deflate, constants);

window.pako = pako;

module.exports = pako;

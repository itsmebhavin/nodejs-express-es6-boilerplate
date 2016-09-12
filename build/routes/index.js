'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Arrow functions
// Import node module
router.get('/', function (req, res) {
  res.send({ message: 'Hello World from Index!!' });
});
// Exporting an object as the default import for this module
exports.default = router;
//# sourceMappingURL=index.js.map
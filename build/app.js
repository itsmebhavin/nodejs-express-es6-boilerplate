"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _winstonLogger = require('./helpers/winston-logger');

var _winstonLogger2 = _interopRequireDefault(_winstonLogger);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//using let
var logger = new _winstonLogger2.default();
//-----------------------------------------------

console.log(logger);
var app = (0, _express2.default)();

//This is an example for ES6 template string
var person = {
    name: 'John Doe'
};
console.log('My name is ' + person.name);
//END of template string 

/*
 * Sample way to use winston info and error logger. Info logger comes below error access level so it will have all your information + errors.
 * { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 * @private
 */
logger.info('Hello logger');
logger.info('Hello Info', {
    anything: 'this is metdata'
});
logger.error('errorlog', 'Hello Error');
logger.info('Hello Info', {
    anything: 'this is metdata'
});
logger.log('info', 'test message %s', 'my string'); // info: test message my string
logger.log('info', 'test message %d', 123); // info: test message 123
logger.log('info', 'test message %j', {
    number: 123
}, {}); // info: test message {"number":123} & meta = {}
logger.log('info', 'test message %s, %s', 'first', 'second', {
    number: 123
}); // info: test message first, second & meta = {number: 123}
logger.log('info', 'test message', 'first', 'second', {
    number: 123
}); // info: test message first second &  meta = {number: 123}
logger.log('info', 'test message %s, %s', 'first', 'second', {
    number: 123
}, function () {}); // info: test message first, second &  meta = {number: 123} with callback = function(){}
logger.log('info', 'test message', 'first', 'second', {
    number: 123
}, function () {}); // info: test message first second & meta = {number: 123} with callback = function(){}
/* END of winston Logger examples */

// General Express and Node API Settings - configure CORS for local dev
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
});
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
//Settings END

app.use('/', _index2.default);
app.use('/users', _users2.default);

// using arrow syntax for general API not found
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//module.exports = app;
// arrow functions
var server = app.listen(3000, function () {
    // destructuring
    var _server$address = server.address();

    var address = _server$address.address;
    var port = _server$address.port;

    // string interpolation:

    console.log('Example app listening at http://' + address + ':' + port);
});
import winston from 'winston';
import moment from 'moment';
import fs from 'fs';

const logDir = 'logs';
const env = process.env.NODE_ENV || 'development';
const date = new moment(new Date()).format("MMDDYYYY");
const tsFormat = () => (new Date()).toLocaleTimeString();

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);
winston.emitErrs = true;

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

console.log(tsFormat);
export default class Logger extends winston.Logger {
  constructor() {
    super();
    this.transports = [
        new winston.transports.Console({
          timestamp: tsFormat,
          colorize: true,
          level: 'info'
        }),
        new winston.transports.File({
          name:'infolog',
          timestamp: tsFormat,
          datePattern: 'yyyy-MM-dd',
          prepend: true,
          filename: logDir + '/info_' + date + '.log',
          level: env === 'development' ? 'verbose' : 'info',
          json: true
        }),
        new winston.transports.File({
          name: 'errorlog',
          timestamp: tsFormat,
          datePattern: 'yyyy-MM-dd',
          prepend: true,
          filename: logDir + '/error_' + date + '.log',
          level: 'error',
          json:true
        })
    ];

    this.exceptionHandlers = [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({
             filename: logDir + '/exceptions_' + date + '.log'
           })
    ];

    this.exitOnError = false;

  }
}

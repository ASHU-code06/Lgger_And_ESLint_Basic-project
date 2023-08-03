
// eslint-disable-next-line no-undef
const winston = require("winston");

const customFormat = winston.format.combine(winston.format.timestamp() , winston.format.printf((display)=>{return `${display.timestamp}  - ${display.level.toLocaleUpperCase().padEnd(7)}-${display.message}`}));

const logger = winston.createLogger({
  //level: "verbose",
  format: customFormat,
  transports: [
    new winston.transports.Console({level:"info"}),
    new winston.transports.File({
      filename: "file.log",
      level: "info",
      format: winston.format.json(),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" }),
  ],
});

// eslint-disable-next-line no-undef
module.exports = {
  logger,
  //addTransport,
};

//addTransport(new winston.transports.File({ filename: 'file.log' })),ReferenceError: Cannot access 'logger' before initialization
// function addTransport(transport) {
//   logger.add(transport);
// }


/**here i have done  basic implementation, the logger object contains
 *  five methods (error, warn, info, debug, and silly).
 *  Each method logs the message along with the corresponding log level
 *  to the console using console.error, console.warn, or console.log. */

/**Logging levels in winston conform to the severity ordering specified by RFC5424: severity of all levels is assumed to be numerically ascending from most important to least important.

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}; */
/**.padEnd(7):
The padEnd() method is used here to add padding to the right side of the log level string. It takes two arguments: the first argument specifies the total length of the resulting string, and the second argument (optional) specifies the padding string. In this case, the total length is set to 7.

For example, if the log level is 'info', it has a length of 4. 
By using padEnd(7), it adds 3 spaces to the right of the log level to make it 7 characters long.
 If the log level is already 7 characters or longer, no padding is added. */
const winston = require('winston');

const { combine, timestamp, json,printf,align } = winston.format;

const customFormat = printf( ({ level, message, timestamp , method, url,status,contentLength,responseTime,correlationId, ...metadata}) => {
  if(method && url && status && contentLength && responseTime){
    var httpMsg = `method: ${method}, statusCode: ${status}, content-length: ${contentLength}, response-time: ${responseTime}`
  }
  let msg = `${timestamp} - [${level}] : ${message} `  
  if(httpMsg) {
	  msg += httpMsg
  }
  return msg
});

const options = {
  // file: {
  //   level: 'info',
  //   filename: './logs/app.log',
  //   handleExceptions: true,
  //   json: true,
  //   maxsize: 5242880, // 5MB
  //   maxFiles: 5,
  //   colorize: false,
  // },
  console: {
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  format: combine(
    json(),
    timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    align(),
    customFormat
    
  ),
  transports: [
    //new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: true
})


module.exports = logger;
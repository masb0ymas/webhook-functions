import { formatDate } from '@core/helpers/date'
import chalk from 'chalk'
import path from 'path'
import winston, { format } from 'winston'

// custom format log console
const myFormat = format.printf(({ level, message, label, timestamp }) => {
  const logLabel = chalk.green(`[${label}]:`)
  const logLevel = chalk.blue(`logger - ${level}`)
  const logTime = chalk.cyan(timestamp)

  return `${logLabel} ${logLevel} - ${logTime} ${message}`
})

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'error', // error, warn, info, http, verbose, debug, silly
    filename: `${path.resolve('./logs')}/log-${formatDate(new Date())}.log`,
    format: winston.format.json(),
    handleExceptions: true,
    maxsize: 5 * 1024 * 1024, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    format: winston.format.combine(
      format.label({ label: 'server' }),
      format.timestamp({ format: 'DD/MMM/YYYY HH:mm:ss' }),
      myFormat
    ),
  },
}

// instantiate a new Winston Logger with the settings defined above
export const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
})

// create a stream object with a 'write' function that will be used by `morgan`
export const winstonStream = {
  write: (message: string) => {
    winstonLogger.info(message)
  },
}

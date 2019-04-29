import bunyan from 'bunyan';

export function createLogger(options = {}) {
  return bunyan.createLogger({
    name: 'de-card',
    src: process.env.NODE_ENV === 'development',
    streams: [{
      level: 'error',
      stream: process.stderr
    }, {
      level: 'debug',
      stream: process.stdout
    }],
    serializers: bunyan.stdSerializers,
    ...options
  });
}

export default createLogger();
const path = require('path');
const bootstrap = require('@wix/wix-bootstrap-ng');

let server

if (process.env.NODE_ENV === 'test') {
  server = path.join('.', 'src');
} else {
  server = path.join('.', 'dist', 'src');
}

server = path.join(server, 'server');

bootstrap()
  .express(server)
  .start({ disableCluster: process.env.NODE_ENV !== 'production' });

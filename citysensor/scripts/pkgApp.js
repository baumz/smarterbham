/* eslint-disable import/no-unresolved */
// when pkg-ing the app we set NODE_ENV as production and require src/server.js
process.env.NODE_ENV = 'production';
require('../dist/server.js');

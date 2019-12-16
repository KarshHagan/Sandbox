
'use strict';

require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const auth = require('basic-auth');

const routes = require('./api-v1.js');
const server = express();

const isDev = process.env.NODE_ENV !== 'production';
const env  = isDev ? 'development' : process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

server.set('env', env);
server.set('host', host);
server.set('port', port);

// Development Server Options
if (isDev) {
  server.use(require('connect-livereload')({ port: 35729 }));
}

// Production Server Options
// Force SSL
if (!isDev) {
  server.use(function(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && env !== 'development') {
      console.log('redirect to HTTPS');
      return res.redirect('https://' + req.get('host') + req.url);
    }
    // HTTP authentication
    var credentials = auth(req);
    if (!credentials || credentials.name !== 'karsh' || credentials.pass !== 'hagan') {
      res.statusCode = 401;
      res.setHeader('WWW-Authenticate', 'Basic realm="Karsh Hagan Brand Name Generator"');
      res.end('Access denied.');
      return;
    }
    // set noindex header
    res.set('X-Robots-Tag', 'noindex, nofollow');
    next();
  });
}

// Parse POST data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Create Session
server.use(session({
  store: new FileStore({}),
  resave: true,
  saveUninitialized: true,
  secret: 'your-secret-id'
}));

// create API routes
routes.createRoutes(server);

// static paths for the rest
server.get('/', express.static('./distribution/default'));
server.use(express.static('./distribution'));

// Create the server
http.createServer(server).listen(port);

console.log('=================================');
console.log('  Server listening on port ' + port);
console.log('=================================');

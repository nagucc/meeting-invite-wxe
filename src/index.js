
import 'babel-polyfill';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import { port, auth, analytics, showLog } from './config';

import invite from './invite';

const app = express();


//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(cookieParser('jkef.nagu.cc cookie key'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const morgan = require('morgan');
app.use(morgan('dev'));

/*
注册API
 */
app.use('/invite', invite);

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const template = require('./views/error.jade');
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.send(template({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  }));
});

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});


/* eslint-enable no-console */

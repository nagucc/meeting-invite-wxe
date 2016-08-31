
import 'babel-polyfill';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { port } from './config';

import invite from './invite';
import signin from './signin';

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
app.use('/signin', signin);


app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});


/* eslint-enable no-console */

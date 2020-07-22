'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const serverlessHttp = require('serverless-http');
const app = require('./app');

const awsServerlessExpressServer = awsServerlessExpress.createServer(app);

module.exports.serverlessExpress = async (event, context) =>
  awsServerlessExpress.proxy(awsServerlessExpressServer, event, context);

const serverlessHttpServer = serverlessHttp(app);

module.exports.serverlessHttp = async (event, context) =>
  serverlessHttpServer(event, context);

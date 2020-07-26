'use strict';

const awsServerlessExpress = require('aws-serverless-express-binary');
const serverlessHttp = require('serverless-http');
const app = require('./app');

const awsServerlessExpressServer = awsServerlessExpress.createServer(app);

module.exports.serverlessExpress = async (event, context) =>
  console.log('serverlessExpress:', event, context) ||
  awsServerlessExpress.proxy(awsServerlessExpressServer, event, context);

const serverlessHttpServer = serverlessHttp(app);

module.exports.serverlessHttp = async (event, context) =>
  console.log('serverlessHttp:', event, context) ||
  serverlessHttpServer(event, context);

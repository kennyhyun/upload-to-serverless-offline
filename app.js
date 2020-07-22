'use strict';

const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: '/tmp' });

app.get('/:handler/', (req, res, next) => {
  console.log(`Hello ${req.params.handler}`);
});

app.post(
  '/:handler/upload',
  upload.single('file'),
  (req, res) => {
    const { file } = req;
    console.log(`File uploaded; ${ file && file.originalname }`);
    console.dir(file, req);
  }
);

module.exports = app;

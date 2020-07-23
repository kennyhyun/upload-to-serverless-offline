# upload-to-serverless-offline
An example for uploading with `multer` for serverless-offline env.

Uploading to lambda through API Gateway is not usual.

Let's say you need to upload an image file.

Lambda does not have any consistent storage so it should be saved in an S3 bucket if it should be consistent.
But Lambda is billed by it's running time so uploading from the lambda to S3 is not a good idea.

Rarely, if the payload is relatively small and should be converted/processed before saving, uploading to Lambda would be still required.

This is an example for uploading binary file using multipart/fom-data

BTW, API Gateway added supports binary media type. (https://aws.amazon.com/about-aws/whats-new/2016/11/binary-data-now-supported-by-api-gateway/)

## Serverless offline http proxy

```
$ npm i && npm start
```

## Uploading files to the endpoint from the command line

### Httpie(https://httpie.org/)

```
$ http -vF POST localhost:3000/serverless-http/upload file@"./image1.png"
```

### curl

```
$ curl -v localhost:3000/dev/serverless-http/upload -F "file=@./image1.png"
```

## Enable API Gateway binary support

TODO

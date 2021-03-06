# upload-to-serverless-offline
An example for uploading with `multer` for serverless-offline env.

Uploading to lambda through API Gateway is not usual.

Let's say you need to upload an image file.

Lambda does not have any consistent storage so it should be saved in an S3 bucket if it should be consistent.
But Lambda is billed by it's running time so uploading from the lambda to S3 is not a good idea.

Rarely, if the payload is relatively small and should be converted/processed before saving, uploading to Lambda would be still required.

This is an example for uploading binary file using multipart/fom-data

## Serverless offline http proxy

```
$ npm i && npm start
```

## Uploading files to the endpoint from the command line

### Httpie(https://httpie.org/)

```
$ http -vf POST localhost:3000/dev/serverless-http/upload file@"./image1.png"
```

![image1](https://raw.githubusercontent.com/kennyhyun/upload-to-serverless-offline/master/image1.png)

### curl

```
$ curl -v localhost:3000/dev/serverless-http/upload -F "file=@./image1.png"
```

![image1](https://raw.githubusercontent.com/kennyhyun/upload-to-serverless-offline/master/image2.png)

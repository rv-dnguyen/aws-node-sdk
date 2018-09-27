var AWS = require('aws-sdk');
//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-promises.html

module.exports = {
  createS3Bucket(bucketName) {
    return new Promise((resolve, reject) => {
      // Create name for uploaded object key
      var keyName = 'index.html';

      // Create a promise on S3 service object
      var bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' }).createBucket({
        Bucket: bucketName,
        ACL: "public-read",
      }).promise();

      // Handle promise fulfilled/rejected states
      bucketPromise.then(
        function (data) {
          console.log(data);
          // Create params for putObject call
          var objectParams = {
            ACL: "public-read",
            Bucket: bucketName,
            Key: keyName,
            Body: 'Hello World!',
            ContentType: 'text/html',
            Metadata: {
              "testkey": "testvalue"
            }
          };
          // Create object upload promise
          var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
          uploadPromise.then(
            function (data) {
              //console.log(data);
              //console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
              resolve(bucketName + '.s3.amazonaws.com');
            });
        }).catch(
          function (err) {
            //console.error(err, err.stack);
            reject(err);
          });
    });
  }
}



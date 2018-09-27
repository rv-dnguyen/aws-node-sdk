// Load the SDK and UUID
var AWS = require('aws-sdk');

//NOTE: this might not be neccessary with aws OKTA
// Set the region 
//AWS.config.update({region: 'us-west-2'});

// Create unique bucket name
var bucketName = '1stratapipoc';
// Create name for uploaded object key
var keyName = 'index.html';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({
  Bucket: bucketName,
  ACL: "public-read",
}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    console.log(data);
    // Create params for putObject call
    var objectParams = {
      ACL: "public-read",
      Bucket: bucketName, 
      Key: keyName, 
      Body: 'Hello World!',
      ContentType : 'text/html',   
      Metadata: {
        "testkey": "testvalue"
       }
      };
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log(data);
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});

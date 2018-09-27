// Load the SDK and UUID
let AWS = require('aws-sdk');
let fs = require('fs');
let file = './test/blah.zip'
let data = fs.readFileSync(file);

let params = {
    Code: { /* required */
    //   S3Bucket: 'STRING_VALUE',
    //   S3Key: 'STRING_VALUE',
    //   S3ObjectVersion: 'STRING_VALUE',
      ZipFile: new Buffer(data),//new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */
    },
    FunctionName: 'dev-poc-test', /* required */
    Handler: 'index.handler', /* required */
    Role: 'arn:aws:iam::960785399995:role/LambdaExecution', /* required */
    Runtime: 'nodejs8.10',
    // DeadLetterConfig: {
    //   TargetArn: 'STRING_VALUE'
    // },
    Description: 'dnguyen stratus lambda test',
    //can't have these
    // Environment: {
    //   Variables: {
    //     'Name': 'STRING_VALUE',
    //     /* '<EnvironmentVariableName>': ... */
    //   }
    // },
    // KMSKeyArn: 'STRING_VALUE',
    MemorySize: 128,
    Publish: true,
    Tags: {
      'lambda-console:blueprint': 'cloudfront-http-redirect',
      /* '<TagKey>': ... */
    },
    Timeout: 5,
    // TracingConfig: {
    //   Mode: Active | PassThrough
    // },
    // VpcConfig: {
    //   SecurityGroupIds: [
    //     'STRING_VALUE',
    //     /* more items */
    //   ],
    //   SubnetIds: [
    //     'STRING_VALUE',
    //     /* more items */
    //   ]
    // }
  };
  let lambda = new AWS.Lambda();
  
  lambda.createFunction(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
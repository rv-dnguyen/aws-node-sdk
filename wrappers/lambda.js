// Load the SDK and UUID
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html
let AWS = require('aws-sdk');
let fs = require('fs');
let file = './stratus-edge-hughesnetinternet-net-EdgeFunction.zip'
let data = fs.readFileSync(file);

module.exports = {
  createLambda(fName){
    return new Promise((resolve, reject) => {

      let params = {
        Code: { /* required */
        //   S3Bucket: 'STRING_VALUE',
        //   S3Key: 'STRING_VALUE',
        //   S3ObjectVersion: 'STRING_VALUE',
          ZipFile: new Buffer(data),//new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */
        },
        FunctionName: fName + '-poc-test', /* required */
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
          'nguyen-strat-poc': 'veal',
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
        if (err) {
          reject(err);
        }
        else  {
          resolve(data);
        } 
        
      });
    });
  }
}


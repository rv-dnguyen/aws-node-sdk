const s3Wrapper = require('./wrappers/s3.js');
const lambdaWrapper = require('./wrappers/lambda.js');
const cfWrapper = require('./wrappers/cf.js');
const name = 'stratus-codedeploy-test-final';

console.log('LOG:Creating s3 bucket');
s3Wrapper.createS3Bucket(name).then(function(result){
    console.log(result);
    console.log('LOG:creating lambda');
    return lambdaWrapper.createLambda(name);
})
.then(function(arn){
    console.log(arn);
    console.log('LOG:creating cloudfront');
    return cfWrapper.createCloudfront(name, arn);
})
.then(function(lastresult){
    console.log(lastresult);
    console.log('LOG:finished building stack');
})
.catch((error) => {
    console.log('');
    console.log(error);
});

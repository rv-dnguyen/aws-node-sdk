const s3manager = require('./s3.js');
const lambdaManager = require('./lambda.js');
const cfManager = require('./cf.js');
const name = 'nguyentest14';

s3manager.createS3Bucket(name).then(function(result){
    console.log(result);
    return lambdaManager.createLambda(name);
})
.then(function(arn){
    console.log(arn);
    return cfManager.createCloudfront(name, arn);
})
.then(function(lastresult){
    console.log(lastresult);
})
.catch((error) => {
    console.log(error);
});

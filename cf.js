// Load the SDK and UUID
let AWS = require('aws-sdk');
let uuid = require('uuid');

let cloudfront = new AWS.CloudFront();

let params = {
  DistributionConfig: { /* required */
    CallerReference: 'thisshouldbeunique3', /* required */
    Comment: 'dnguyen test distro3', /* required */
    DefaultCacheBehavior: { /* required */
      ForwardedValues: { /* required */
        Cookies: { /* required */
          Forward: 'none',// | whitelist | all, /* required */
          WhitelistedNames: {
            Quantity: 0, /* required */
            Items: [
              /* more items */
            ]
          }
        },
        QueryString: false,//true || false, /* required */
        Headers: {
          Quantity: 0, /* required */
          Items: [
            /* more items */
          ]
        },
        QueryStringCacheKeys: {
          Quantity: 0, /* required */
          Items: [
            /* more items */
          ]
        }
      },
      MinTTL: 0, /* required */
      //dnguyen: based off origin below
      TargetOriginId: '1stratapipoc', /* required */
      TrustedSigners: { /* required */
        Enabled: false, /* required */
        Quantity: 0, /* required */
        Items: [
        ]
      },
      ViewerProtocolPolicy: 'allow-all',// | https-only | redirect-to-https, /* required */
      AllowedMethods: {
        Items: [ /* required */
          'GET', 'HEAD',//GET | HEAD | POST | PUT | PATCH | OPTIONS | DELETE,
          /* more items */
        ],
        Quantity: 2, /* required */
        CachedMethods: {
          Items: [ /* required */
            'GET', 'HEAD',//GET | HEAD | POST | PUT | PATCH | OPTIONS | DELETE,
            /* more items */
          ],
          Quantity: 2 /* required */
        }
      },
      Compress: false,
      DefaultTTL: 0,
      // FieldLevelEncryptionId: 'STRING_VALUE',
      LambdaFunctionAssociations: {
        Quantity: 2, /* required */
        Items: [
          {
            EventType: 'origin-request',// | origin-response, /* required */
            LambdaFunctionARN: 'arn:aws:lambda:us-east-1:960785399995:function:dev-stratus-home-securityco:84', /* required */
            IncludeBody: false
          },
          {
            EventType: 'origin-response', /* required */
            LambdaFunctionARN: 'arn:aws:lambda:us-east-1:960785399995:function:dev-stratus-home-securityco:84', /* required */
            IncludeBody: false
          },
          /* more items */
        ]
      },
      MaxTTL: 0,
      SmoothStreaming: false
    },
    Enabled: true,// || false, /* required */
    Origins: { /* required */
      Quantity: 1, /* required */
      Items: [
        {
          DomainName: '1stratapipoc.s3.amazonaws.com', /* required */
          Id: '1stratapipoc', /* required */
          // CustomHeaders: {
          //   Quantity: 0, /* required */
          //   Items: [
          //     {
          //       HeaderName: 'STRING_VALUE', /* required */
          //       HeaderValue: 'STRING_VALUE' /* required */
          //     },
          //     /* more items */
          //   ]
          // },
          // CustomOriginConfig: {
          //   HTTPPort: 0, /* required */
          //   HTTPSPort: 0, /* required */
          //   OriginProtocolPolicy: http-only | match-viewer | https-only, /* required */
          //   OriginKeepaliveTimeout: 0,
          //   OriginReadTimeout: 0,
          //   OriginSslProtocols: {
          //     Items: [ /* required */
          //       SSLv3 | TLSv1 | TLSv1.1 | TLSv1.2,
          //       /* more items */
          //     ],
          //     Quantity: 0 /* required */
          //   }
          // },
          // OriginPath: '1stratapipoc.s3.amazonaws.com',
          S3OriginConfig: {
            OriginAccessIdentity: '' /* required */
          }
        },
        /* more items */
      ]
    },
    // Aliases: {
    //   Quantity: 0, /* required */
    //   Items: [
    //     'STRING_VALUE',
    //     /* more items */
    //   ]
    // },
    CacheBehaviors: {
      Quantity: 0, /* required */
      // Items: [
      //   {
      //     ForwardedValues: { /* required */
      //       Cookies: { /* required */
      //         Forward: 'none',// | whitelist | all, /* required */
      //         WhitelistedNames: {
      //           Quantity: 0, /* required */
      //           Items: [
      //             'STRING_VALUE',
      //             /* more items */
      //           ]
      //         }
      //       },
      //       QueryString: true,// || false, /* required */
      //       Headers: {
      //         Quantity: 0, /* required */
      //         Items: [
      //           'STRING_VALUE',
      //           /* more items */
      //         ]
      //       },
      //       QueryStringCacheKeys: {
      //         Quantity: 0, /* required */
      //         Items: [
      //           'STRING_VALUE',
      //           /* more items */
      //         ]
      //       }
      //     },
      //     MinTTL: 0, /* required */
      //     PathPattern: 'STRING_VALUE', /* required */
      //     TargetOriginId: '1stratapipoc', /* required */
      //     TrustedSigners: { /* required */
      //       Enabled: true || false, /* required */
      //       Quantity: 0, /* required */
      //       Items: [
      //         'STRING_VALUE',
      //         /* more items */
      //       ]
      //     },
      //     ViewerProtocolPolicy: 'allow-all',// | https-only | redirect-to-https, /* required */
      //     AllowedMethods: {
      //       Items: [ /* required */
      //         'GET', 'HEAD',//GET | HEAD | POST | PUT | PATCH | OPTIONS | DELETE,
      //         /* more items */
      //       ],
      //       Quantity: 2, /* required */
      //       CachedMethods: {
      //         Items: [ /* required */
      //           'GET', 'HEAD',//GET | HEAD | POST | PUT | PATCH | OPTIONS | DELETE,
      //           /* more items */
      //         ],
      //         Quantity: 2 /* required */
      //       }
      //     },
      //     Compress: true,// || false,
      //     DefaultTTL: 0,
      //     FieldLevelEncryptionId: 'STRING_VALUE',
      //     // LambdaFunctionAssociations: {
      //     //   Quantity: 0, /* required */
      //     //   Items: [
      //     //     {
      //     //       EventType: viewer-request | viewer-response | origin-request | origin-response, /* required */
      //     //       LambdaFunctionARN: 'STRING_VALUE', /* required */
      //     //       IncludeBody: true || false
      //     //     },
      //     //     /* more items */
      //     //   ]
      //     // },
      //     MaxTTL: 0,
      //     SmoothStreaming: false,//true || false
      //   },
      //   /* more items */
      // ]
    },
    // CustomErrorResponses: {
    //   Quantity: 0, /* required */
    //   Items: [
    //     {
    //       ErrorCode: 0, /* required */
    //       ErrorCachingMinTTL: 0,
    //       ResponseCode: 'STRING_VALUE',
    //       ResponsePagePath: 'STRING_VALUE'
    //     },
    //     /* more items */
    //   ]
    // },
    // DefaultRootObject: 'index.html',
    HttpVersion: 'http1.1',// | 'http2,
    // IsIPV6Enabled: true || false,
    // Logging: {
    //   Bucket: 'STRING_VALUE', /* required */
    //   Enabled: true || false, /* required */
    //   IncludeCookies: true || false, /* required */
    //   Prefix: 'STRING_VALUE' /* required */
    // },
    PriceClass: 'PriceClass_All',// | PriceClass_200 | PriceClass_All,
    // Restrictions: {
    //   GeoRestriction: { /* required */
    //     Quantity: 0, /* required */
    //     RestrictionType: blacklist | whitelist | none, /* required */
    //     Items: [
    //       'STRING_VALUE',
    //       /* more items */
    //     ]
    //   }
    // },
    // ViewerCertificate: {
    //   ACMCertificateArn: 'STRING_VALUE',
    //   Certificate: 'STRING_VALUE',
    //   CertificateSource: cloudfront | iam | acm,
    //   CloudFrontDefaultCertificate: true || false,
    //   IAMCertificateId: 'STRING_VALUE',
    //   MinimumProtocolVersion: SSLv3 | TLSv1 | TLSv1_2016 | TLSv1.1_2016 | TLSv1.2_2018,
    //   SSLSupportMethod: sni-only | vip
    // },
    // WebACLId: 'STRING_VALUE'
  }
};

cloudfront.createDistribution(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
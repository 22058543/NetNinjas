var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  console.log('Event: ', event);
  if (event.request.userAttributes.sub) {
    const fullName = event.request.userAttributes.name.split(' ');
    const firstName = fullName.slice(0, -1).join(' ');
    const lastName = fullName[fullName.length - 1];

    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        name: { S: firstName },
        lastName: { S: lastName },
        email: { S: event.request.userAttributes.email },
        isAccountProtected: { BOOL: true },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        _version: { N: '1' },
        _lastChangedAt: { N: Date.now().toString() },
      },
      TableName: 'User-v2kjzjalrvg2hnqurnmomzxkwa-' + process.env.ENV,
    };

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error', err);
    }
    console.log(process.env.API_AMW_USERTABLE_NAME);
    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};

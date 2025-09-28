const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const userId = event.arguments.payload.userId;
  console.log('----userId----', userId);
  try {
    const stories = await dynamoDB
      .query({
        TableName: 'Story-v2kjzjalrvg2hnqurnmomzxkwa-production',
        IndexName: 'byUserId',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': { S: userId },
        },
      })
      .promise();

    await Promise.all(
      stories.Items.map(async story => {
        const storiesUsers = await dynamoDB
          .query({
            TableName: 'StoryUsers-v2kjzjalrvg2hnqurnmomzxkwa-production',
            IndexName: 'byStory',
            KeyConditionExpression: 'storyId = :storyId',
            ExpressionAttributeValues: {
              ':storyId': { S: story.id.S },
            },
          })
          .promise();

        storiesUsers.Items.map(async item => {
          try {
            await docClient
              .update({
                TableName: 'StoryUsers-v2kjzjalrvg2hnqurnmomzxkwa-production',
                Key: {
                  id: item.id.S,
                },
                UpdateExpression: 'SET #del = :r',
                ExpressionAttributeNames: {
                  '#del': '_deleted',
                },
                ExpressionAttributeValues: {
                  ':r': true,
                },
              })
              .promise();
          } catch (error) {}
        });
      }),
    );

    await Promise.all(
      stories.Items.map(async story => {
        await docClient
          .update({
            TableName: 'Story-v2kjzjalrvg2hnqurnmomzxkwa-production',
            Key: {
              id: story.id.S,
            },
            UpdateExpression: 'SET #del = :r',
            ExpressionAttributeNames: {
              '#del': '_deleted',
            },
            ExpressionAttributeValues: {
              ':r': true,
            },
          })
          .promise();
      }),
    );
    return true;
  } catch (error) {
    console.error('Error deleting stories:', error);
    return false;
  }
};

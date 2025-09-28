const pkg = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const s3 = new pkg.S3({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
});

const dynamoDb = new pkg.DynamoDB({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
});

const docClient = new pkg.DynamoDB.DocumentClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
});

const Bucket = process.env.BUCKET;

exports.handler = async (event, context) => {
  try {
    console.log('--triggered--', JSON.stringify(event, null, 2));
    const { userId, actionType, s3Key } = event.arguments.payload;

    if (userId && actionType && s3Key) {
      const tableName =
        'StorageStatistics-v2kjzjalrvg2hnqurnmomzxkwa-production';

      if (actionType === 'ADD') {
        const object = await s3
          .getObject({
            Bucket,
            Key: s3Key,
          })
          .promise();

        let s3FileSize = parseFloat(
          (object.ContentLength / (1024 * 1024)).toFixed(3),
        );
        const uniqueId = uuidv4();
        const createdResult = await docClient
          .put({
            TableName: tableName,
            Item: {
              id: uniqueId,
              fileSize: `${s3FileSize}-MB`,
              storageStatisticsUserId: userId,
              s3Key: s3Key,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              _lastChangedAt: new Date().getTime(),
              _version: 1,
              __typename: 'StorageStatistics',
            },
          })
          .promise();

        console.log('--createdResult--', createdResult);
        return true;
      } else if (actionType === 'DELETE') {
        const userDocuments = await dynamoDb
          .query({
            TableName: tableName,
            IndexName: 'storageStatisticsUserId-index',
            KeyConditionExpression:
              'storageStatisticsUserId = :storageStatisticsUserId',
            ExpressionAttributeValues: {
              ':storageStatisticsUserId': {
                S: userId,
              },
            },
          })
          .promise();

        console.log(
          '--userDocuments--',
          JSON.stringify(userDocuments, null, 2),
        );

        if (userDocuments && userDocuments.Items.length) {
          for (const document of userDocuments.Items) {
            const documentS3Key = document.s3Key.S;
            if (documentS3Key === s3Key) {
              const documentId = document.id.S;
              console.log('-------- documentId :', documentId);
              const deletedResult = await docClient
                .delete({
                  TableName: tableName,
                  Key: { id: documentId },
                })
                .promise();
              console.log('--deletedResult--', deletedResult);
              return true;
            }
          }
          console.log('--No document found with the given s3Key--');
          return false;
        } else {
          console.log('--No documents found');
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log('--error--', error);
    return false;
  }
};

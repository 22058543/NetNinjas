const aws = require('aws-sdk');
const ses = new aws.SES();
exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const payload = event.arguments.payload;
  console.log('====sendEmailPayload====', payload);
  console.log('--process.env.SES_EMAIL---', process.env.SES_EMAIL);
  try {
    await ses
      .sendEmail({
        Destination: {
          ToAddresses: ['report@amomentwith.com'],
        },
        Source: process.env.SES_EMAIL,
        Message: {
          Subject: { Data: 'Reported content' },
          Body: {
            Text: {
              Data: `UserID=${payload.userID}, UserName=${payload?.name}, Reason=${payload.reason}, ReportedContent=${payload.reportedContent}`,
            },
          },
        },
      })
      .promise();
    return true;
  } catch (error) {
    console.log('Error', error);
    return false;
  }
};

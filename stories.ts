import { PutCommand, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "./db";

const STORY_TABLE = "Story-5cgpqaybjvdobmcxjhauyxuie4-devweb";
const BY_USER_INDEX = "byUser";

export async function createStory(story: any) {
  await ddb.send(new PutCommand({ TableName: STORY_TABLE, Item: story }));
}

export async function getStory(id: string) {
  const res = await ddb.send(new GetCommand({
    TableName: STORY_TABLE,
    Key: { id }
  }));
  return res.Item;
}

export async function listStoriesByUser(userId: string) {
  const res = await ddb.send(new QueryCommand({
    TableName: STORY_TABLE,
    IndexName: BY_USER_INDEX,
    KeyConditionExpression: "userId = :u",
    ExpressionAttributeValues: { ":u": userId }
  }));
  return res.Items;
}

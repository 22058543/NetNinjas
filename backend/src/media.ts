import { PutCommand, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "./db";

const MEDIA_TABLE = "Media-5cgpqaybjvdobmcxjhauyxuie4-devweb";
const BY_PARENT_INDEX = "mediaByParentId";

export async function createMedia(item: any) {
  await ddb.send(new PutCommand({ TableName: MEDIA_TABLE, Item: item }));
}

export async function listMediaForParent(parentId: string) {
  const res = await ddb.send(new QueryCommand({
    TableName: MEDIA_TABLE,
    IndexName: BY_PARENT_INDEX,
    KeyConditionExpression: "parentId = :p",
    ExpressionAttributeValues: { ":p": parentId }
  }));
  return res.Items;
}

export async function deleteMedia(id: string) {
  await ddb.send(new DeleteCommand({
    TableName: MEDIA_TABLE,
    Key: { id }
  }));
}

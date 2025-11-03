import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "./db";

const CHAPTER_TABLE = "Chapter-5cgpqaybjvdobmcxjhauyxuie4-devweb";
const BY_STORY_INDEX = "byStory";

export async function createChapter(chapter: any) {
  await ddb.send(new PutCommand({ TableName: CHAPTER_TABLE, Item: chapter }));
}

export async function listChaptersByStory(storyId: string) {
  const res = await ddb.send(new QueryCommand({
    TableName: CHAPTER_TABLE,
    IndexName: BY_STORY_INDEX,
    KeyConditionExpression: "storyId = :s",
    ExpressionAttributeValues: { ":s": storyId }
  }));
  return res.Items;
}

import { PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "./db";

const USER_TABLE = "User-5cgpqaybjvdobmcxjhauyxuie4-devweb";

export async function createUser(user: any) {
  await ddb.send(new PutCommand({ TableName: USER_TABLE, Item: user }));
}

export async function getUser(id: string) {
  const res = await ddb.send(new GetCommand({
    TableName: USER_TABLE,
    Key: { id }
  }));
  return res.Item;
}

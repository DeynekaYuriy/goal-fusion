// utils/mongodb.ts

import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string, {});

export async function connectToDatabase() {
  await client.connect();
  const db = client.db("UsersDB");
  return { db, client };
}

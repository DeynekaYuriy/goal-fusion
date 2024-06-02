// utils/mongodb.ts

import { MongoClient, Db } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  await client.connect();
  const db = client.db('UsersDB',);
  return { db, client };
}

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log("Mongo connected");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("myWallet");

export const collectionUsers = db.collection("users");
export const collectionSessions = db.collection("sessions");
export const collectionTransactions = db.collection("transactions");

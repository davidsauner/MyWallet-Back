const PORT = 5000;
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import joi from "joi";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
    await mongoClient.connect();
    } catch (err) {
    console.log("Erro no mongo.conect", err.message);
    }
        db = mongoClient.db();









app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
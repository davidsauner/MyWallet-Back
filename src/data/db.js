import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'
let db;


const mongoClient = new MongoClient(process.env.DATABASE_URL);


try {
    await mongoClient.connect();
    console.log("Mongo connected")
    } catch (err) {
    console.log("Erro no mongo.conect", err.message);
    }
    db = mongoClient.db("myWallet");
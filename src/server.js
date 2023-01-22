const PORT = 5000;
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();





app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

try {
    await mongoClient.connect();
    } catch (err) {
    console.log("Erro no mongo.conect", err.message);
    }
        db = mongoClient.db();

        app.post("/sign-up", async (req, res) => {
            // nome, email, senha
        const user = req.body;
        
        await db.collection('users').insertOne(user) 
    
        res.sendStatus(201);
    });







app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
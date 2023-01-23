const PORT = 5000;
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routers/AuthRoutes.js"

dotenv.config();

const app = express();





app.use(cors());
app.use(express.json());
app.use(AuthRoutes)







app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
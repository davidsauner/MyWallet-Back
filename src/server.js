const PORT = 5000;
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routers/AuthRoutes.js";
import TransactionRoutes from "./routers/TransactionRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(AuthRoutes);
app.use(TransactionRoutes);

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));

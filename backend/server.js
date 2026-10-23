import mongoose from "mongoose";
import express from "express";
import feedbackRoutes from "./routes/feedbackRoutes.js"
import cors from "cors";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "../frontend")))

app.use(feedbackRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("connected");
})
.catch((error) => {
    console.log("connection fail", error.message);
})

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
})

export default app;
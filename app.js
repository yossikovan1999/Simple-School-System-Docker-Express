import mysql from "mysql2/promise";
import express from "express";
import studentsRouter from "./routes/studentsRouer.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/students", studentsRouter);

app.use(errorMiddleware);

export default app;


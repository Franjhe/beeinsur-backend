import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createPool } from 'mysql2/promise';
import v1AuthRouter from    './v1/routes/authRoutes.js';
import v1NewsRouter from    './v1/routes/newsRoutes.js';
import v1GoalRouter from    './v1/routes/goalsRoutes.js';

const app = express(); 

dotenv.config();

app.use(cors());
app.use(express.json());
app.set("view engine","ejs");
app.use("/api/v1/auth",    v1AuthRouter);
app.use("/api/v1/news",    v1NewsRouter);
app.use("/api/v1/goal",    v1GoalRouter);

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5,
})
;

export default pool;

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
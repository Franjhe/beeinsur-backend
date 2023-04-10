import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';
import v1AuthRouter from    './v1/routes/authRoutes.js';
import v1NewsRouter from    './v1/routes/newsRoutes.js';
import v1GoalRouter from    './v1/routes/goalsRoutes.js';

const app = express(); 

dotenv;

app.use(cors());
app.use(express.json());
app.set("view engine","ejs");
app.use("/api/v1/auth",    v1AuthRouter);
app.use("/api/v1/news",    v1NewsRouter);
app.use("/api/v1/goal",    v1GoalRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar con la base de datos: ', error);
  }
};

connectDB();

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
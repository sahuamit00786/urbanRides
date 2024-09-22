import express from 'express';
import userRoute from './routes/user.route.js';
import bikeRoute from './routes/bike.route.js';
import rentRoute from './routes/rent.route.js';
import { dbConnection } from './config/database.config.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: '*',
  }),
);

// Derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dbConnection();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './resetForm.html')));
app.use(express.static(path.join(__dirname, './public')));
app.use('/api/user', userRoute);
app.use('/api/bike', bikeRoute);
app.use('/api/rent', rentRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import blogRoutes from './routes/blog-routes.js'
import connectDatabase from './config/database.js';

config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*', credentials: true }));
app.use('/api/blog',blogRoutes)
connectDatabase()
app.listen(PORT, () => {
    console.log('\nServer connected successfully');
    console.log('=============================');
    console.log('Port number : ', PORT);
});
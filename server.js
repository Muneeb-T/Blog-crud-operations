import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*', credentials: true }));

app.listen(PORT, () => {
    console.log('\nServer connected successfully');
    console.log('=============================');
    console.log('Port number : ', PORT);
});
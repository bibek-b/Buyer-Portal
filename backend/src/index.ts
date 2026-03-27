import express from 'express';
import { env } from './config/env.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import { connectDb } from './config/db.js';

const app = express();

connectDb();
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);

const port = env.PORT || 5100;


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
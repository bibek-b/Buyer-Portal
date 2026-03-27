import express from 'express';
import { env } from './config/env.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use('/api/auth', authRoute);

app.use(cookieParser());

const port = env.PORT || 5100;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
import express from 'express';
import { env } from './config/env.js';
import authRoute from './routes/authRoute.js';
import favoriteRoute from './routes/favoriteRoute.js';
import cookieParser from 'cookie-parser';
import { connectDb } from './config/db.js';
import cors from 'cors';

const app = express();

connectDb();
app.use(cors({
    origin: env.FRONTEND_URL
}))
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/favorites', favoriteRoute)

const port = env.PORT || 5100;


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
import express from 'express';
import { env } from './config/env.js';

const app = express();

const port = env.PORT || 5100;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
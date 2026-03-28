import express from 'express';
import { verifyToken } from '../middleware/verifyTokenMiddleware.js';
import { getAllProperties } from '../controllers/propertyController.js';

const router = express.Router();

router.get('/', verifyToken, getAllProperties);

export default router;
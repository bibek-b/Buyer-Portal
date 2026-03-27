import express from 'express';
import { verifyToken } from '../middleware/verifyTokenMiddleware.js';
import { addFavorite, deleteFavorite, getAllFavorites } from '../controllers/favoriteController.js';

const router = express.Router();

router.get('/favorites', verifyToken, getAllFavorites);
router.post('/favorites/:propertyId', verifyToken, addFavorite);
router.delete('/favorites/:propertyId', verifyToken, deleteFavorite);

export default router;
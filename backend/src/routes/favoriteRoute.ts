import express from 'express';
import { verifyToken } from '../middleware/verifyTokenMiddleware.js';
import { addFavorite, deleteFavorite, getAllFavorites } from '../controllers/favoriteController.js';

const router = express.Router();

router.get('/', verifyToken, getAllFavorites);
router.post('/:propertyId', verifyToken, addFavorite);
router.delete('/:propertyId', verifyToken, deleteFavorite);

export default router;
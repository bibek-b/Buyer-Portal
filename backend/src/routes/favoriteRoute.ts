import express from 'express';
import { verifyToken } from '../middleware/verifyTokenMiddleware.js';
import { addFavorite, deleteFavorite, getAllFavorites, getUserFavorites } from '../controllers/favoriteController.js';

const router = express.Router();

router.get('/', verifyToken, getAllFavorites as any);
router.get('/my', verifyToken, getUserFavorites as any);
router.post('/:propertyId', verifyToken, addFavorite as any);
router.delete('/:propertyId', verifyToken, deleteFavorite as any);

export default router;
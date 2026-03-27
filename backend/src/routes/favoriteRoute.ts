import express from 'express';
import { verifyToken } from '../middleware/verifyTokenMiddleware.js';
import { addFavorite, deleteFavorite, getAllFavorites, getUserFavorites } from '../controllers/favoriteController.js';

const router = express.Router();

router.get('/', verifyToken, getAllFavorites);
router.get('/my', verifyToken, getUserFavorites);
router.post('/:propertyId', verifyToken, addFavorite);
router.delete('/:propertyId', verifyToken, deleteFavorite);

export default router;
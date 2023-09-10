import express from 'express';
import { productController } from '../controllers/product.controller';
import { fileUploadMiddleware } from '../middlewares/fileUploadMiddleware';

export const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/order/:orderId', productController.getProductsForOrder);

router.post('/', fileUploadMiddleware, productController.addProduct);

router.delete('/:productId', productController.deleteProduct);
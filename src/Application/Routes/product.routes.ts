import { Router } from 'express';

import { CreateProductController } from '../Controllers/ProductController';

export const productRoutes = Router();

const createProductController = new CreateProductController();

productRoutes.post('/', createProductController.create);
productRoutes.get('/', createProductController.listAll);
productRoutes.get('/{id}', createProductController.find);
productRoutes.delete('/{id}', createProductController.delete);

import { Router } from 'express';

import { productRoutes } from './product.routes';

const router = Router();

router.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

router.use('/product', productRoutes);

export { router };

import { container } from 'tsyringe';

import { Product } from '@domain/entities/Product';
import { IProductRepository } from '@domain/repositories/IProductRepository';
import { ProductRepository } from '@infra/repositories/ProductRepository';

container.registerSingleton<IProductRepository>(
  'productRepository',
  ProductRepository,
);
container.registerSingleton('product', Product);

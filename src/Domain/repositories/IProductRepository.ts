import { Product } from '@domain/entities/Product';

import { IBaseRepository } from './IBaseRepository';

export interface IProductRepository extends IBaseRepository<Product> {
  findByVisibility(
    offset: number,
    limit: number,
    status: string,
    visibility: string,
  ): Promise<Product[]>;
}

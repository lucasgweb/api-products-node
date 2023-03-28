import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@domain/repositories/IProductRepository';
import {
  IListProductsDTO,
  IResponseProductsDTO,
} from '@services/DTOs/ProductDTO';
import { ProductMapper } from '@services/Mappers/ProductMapper';

@injectable()
export class ListPublicProducts {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
  ) {}

  async execute({
    offset,
    limit,
  }: IListProductsDTO): Promise<IResponseProductsDTO> {
    const products = await this.repository.findByVisibility(
      offset,
      limit,
      'active',
      'public',
    );
    const count = await this.repository.count('public');

    const metadata = {
      total: count,
      limit,
      page: offset,
    };

    return {
      metadata,
      products: products.map(product => {
        return ProductMapper.toDTO(product);
      }),
    };
  }
}

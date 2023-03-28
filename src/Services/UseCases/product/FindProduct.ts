import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@domain/repositories/IProductRepository';
import { IResponseProductDTO } from '@services/DTOs/ProductDTO';
import { ProductMapper } from '@services/Mappers/ProductMapper';

@injectable()
export class FindProduct {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
  ) {}

  async execute(id: string): Promise<IResponseProductDTO> {
    const product = await this.repository.find(id);

    return ProductMapper.toDTO(product);
  }
}

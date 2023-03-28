import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@domain/repositories/IProductRepository';
import {
  ICreateProductDTO,
  IResponseProductDTO,
} from '@services/DTOs/ProductDTO';
import { ProductMapper } from '@services/Mappers/ProductMapper';

@injectable()
export class CreateProduct {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
  ) {}

  async execute(data: ICreateProductDTO): Promise<IResponseProductDTO> {
    const product = ProductMapper.toEntity(data);

    return ProductMapper.toDTO(await this.repository.create(product));
  }
}

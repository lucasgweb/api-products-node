import { Product } from '@domain/entities/Product';
import {
  ICreateProductDTO,
  IResponseProductDTO,
} from '@services/DTOs/ProductDTO';

export class ProductMapper {
  static toEntity(dto: ICreateProductDTO): Product {
    const product = new Product();

    product.initialize(
      dto.name,
      dto.imageUrl,
      dto.processPrice,
      dto.description,
      dto.calcType,
      dto.shortDescription,
    );

    return product;
  }

  static toDTO(entity: Product): IResponseProductDTO {
    return {
      id: entity.getId(),
      name: entity.getName(),
      imageUrl: entity.getImageUrl(),
      processPrice: entity.getProcessPrice(),
      description: entity.getDescription(),
      shortDescription: entity.getShortDescription(),
      calcType: entity.getCalcType(),
    };
  }
}

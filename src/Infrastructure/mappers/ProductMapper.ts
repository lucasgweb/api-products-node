import { Product } from '@domain/entities/Product';

import { ProductEntity } from '../database/entities/ProductEntity';

export class ProductMapper {
  public static toPersistence(product: Product): ProductEntity {
    const productEntity = new ProductEntity();
    productEntity.name = product.getName();
    productEntity.imageUrl = product.getImageUrl();
    productEntity.process_price = product.getProcessPrice();
    productEntity.description = product.getDescription();
    productEntity.short_description = product.getShortDescription();
    productEntity.calc_type = product.getCalcType();

    return productEntity;
  }

  public static toDomain(productEntity: ProductEntity): Product {
    const product = new Product();
    product.initialize(
      productEntity.name,
      productEntity.imageUrl,
      productEntity.process_price,
      productEntity.description,
      productEntity.calc_type,
      productEntity.short_description,
      productEntity.id,
      productEntity.visibility,
      productEntity.isDeleted,
    );

    return product;
  }
}

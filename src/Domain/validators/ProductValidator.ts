import Joi from 'joi';

import { Product } from '@domain/entities/Product';

export class ProductValidator {
  private static instance: ProductValidator;

  public static getInstance(): ProductValidator {
    if (!ProductValidator.instance) {
      ProductValidator.instance = new ProductValidator();
    }

    return ProductValidator.instance;
  }

  private schema = Joi.object({
    id: Joi.string(),
    visibility: Joi.string().valid('public', 'private'),
    name: Joi.string().required(),
    imageUrl: Joi.string().required(),
    processPrice: Joi.number().required(),
    description: Joi.string().required(),
    calcType: Joi.string().max(20).required(),
    shortDescription: Joi.string().max(100).required(),
    isDeleted: Joi.boolean(),
  });

  public validate(data: Product): string | boolean {
    const { error } = this.schema.validate(data);
    if (error) {
      return error.message;
    }
    return false;
  }
}

/* eslint-disable import/no-unresolved */
import { getRepository, Repository } from 'typeorm';

import { Product } from '@domain/entities/Product';
import { IProductRepository } from '@domain/repositories/IProductRepository';
import { ProductMapper } from '@infra/mappers/ProductMapper';
import { AppError } from '@shared/error/AppError';

import { ProductEntity } from '../database/entities/ProductEntity';

export class ProductRepository implements IProductRepository {
  private repository: Repository<ProductEntity>;

  constructor() {
    this.repository = getRepository(ProductEntity);
  }

  async create(obj: Product): Promise<Product> {
    const productEntity = ProductMapper.toPersistence(obj);

    return ProductMapper.toDomain(await this.repository.save(productEntity));
  }

  async update(obj: Product): Promise<void> {
    const productEntity = ProductMapper.toPersistence(obj);

    try {
      await this.repository.update(productEntity.id, productEntity);
    } catch (error) {
      throw new AppError(
        `No product was updated to id ${productEntity.id}`,
        500,
      );
    }
  }

  async delete(id: string): Promise<void> {
    const product = await this.repository.findOne(id);

    product.isDeleted = true;
    this.repository.save(product);
    console.log(product);
  }

  async find(id: string): Promise<Product> {
    return ProductMapper.toDomain(await this.repository.findOne(id));
  }

  async findAll(offset: number, limit: number): Promise<Product[]> {
    const products = await this.repository
      .createQueryBuilder('products')
      .where(`products.visibility`, { visibility: 'public' })
      .orderBy('product.createdAt', 'DESC')
      .skip(offset)
      .take(limit)
      .getMany();

    return products.map(product => {
      return ProductMapper.toDomain(product);
    });
  }

  async count(visibility: string): Promise<number> {
    return this.repository
      .createQueryBuilder('products')
      .where(`products.visibility`, { visibility })
      .getCount();
  }

  async findByVisibility(
    offset: number,
    limit: number,
    status: string,
    visibility: string,
  ): Promise<Product[]> {
    const products = await this.repository
      .createQueryBuilder('products')
      .where('products.status = :status', { status })
      .andWhere('products.visibility', { visibility })
      .orderBy('product.createdAt', 'DESC')
      .skip(offset)
      .take(limit)
      .getMany();

    return products.map(product => {
      return ProductMapper.toDomain(product);
    });
  }
}

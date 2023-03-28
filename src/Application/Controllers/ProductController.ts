import { Request, Response } from 'express';
import { container } from 'tsyringe';

import {
  CreateProduct,
  FindProduct,
  ListAllProducts,
  DeleteProduct,
  ListPublicProducts,
} from '@services/UseCases/product';

export class CreateProductController {
  async create(request: Request, response: Response): Promise<Response> {
    const createProduct = container.resolve(CreateProduct);
    const product = await createProduct.execute(request.body);

    return response.json(product);
  }

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findProduct = container.resolve(FindProduct);
    const product = await findProduct.execute(id);

    return response.json(product);
  }

  async listPublic(request: Request, response: Response): Promise<Response> {
    const limit = Number(request.query.limit as string);
    const offset = Number(request.query.offset as string);

    const findProduct = container.resolve(ListPublicProducts);
    const products = await findProduct.execute({
      offset,
      limit,
    });

    return response.json(products);
  }

  async listAll(request: Request, response: Response): Promise<Response> {
    const limit = Number(request.query.limit as string);
    const offset = Number(request.query.offset as string);

    const listProducts = container.resolve(ListAllProducts);
    const products = await listProducts.execute({
      offset,
      limit,
    });

    return response.json(products);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listProducts = container.resolve(DeleteProduct);
    const message = await listProducts.execute(id);

    return response.json({ message });
  }
}

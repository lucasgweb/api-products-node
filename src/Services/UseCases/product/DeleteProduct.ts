import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@domain/repositories/IProductRepository';

@injectable()
export class DeleteProduct {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
  ) {}

  async execute(id: string): Promise<string> {
    this.repository.delete(id);

    return 'Produto deletado com sucesso.';
  }
}

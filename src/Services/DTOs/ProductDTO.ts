export interface ICreateProductDTO {
  name: string;
  imageUrl: string;
  processPrice: number;
  description: string;
  calcType: string;
  shortDescription: string;
}

export interface IListProductsDTO {
  offset: number;
  limit: number;
}

export interface IResponseProductDTO {
  id: string;
  name: string;
  imageUrl: string;
  processPrice: number;
  description: string;
  calcType: string;
  shortDescription: string;
}

export interface IResponseProductsDTO {
  metadata: {
    total: number;
    limit: number;
    page: number;
  };
  products: IResponseProductDTO[];
}

export interface IBaseRepository<T> {
  create(Obj: T): Promise<T>;
  update(Obj: T): Promise<void>;
  find(id: string): Promise<T>;
  delete(id: string): void;
  findAll(offset: number, limit: number): Promise<T[]>;
  count(visibility?: string): Promise<number>;
}

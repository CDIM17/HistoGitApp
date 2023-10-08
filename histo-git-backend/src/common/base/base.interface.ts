export interface BaseInterface<T> {
  getAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

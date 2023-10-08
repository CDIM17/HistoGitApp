import { Type } from '@nestjs/common';
import { BaseInterface } from './base.interface';
import { BaseEntity } from './entity/base.entity';

export function BaseFunction<T extends BaseEntity>(): Type<BaseInterface<T>> {
  class BaseService implements BaseInterface<T> {
    public async getAll(): Promise<T[]> {
      return [];
    }

    public async findOne(id: string): Promise<T> {
      return new Promise((resolve) => {
        const entity: T = { id } as T;
        resolve(entity);
      });
    }
  }
  return BaseService;
}

import { BaseEntity } from './entity/base.entity';

export type Constructor<T extends BaseEntity> = new (...args: any[]) => T;

export type ConstructorDto<Tdto> = new (...args: any[]) => Tdto;

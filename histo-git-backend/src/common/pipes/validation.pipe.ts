import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationError,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  public async transform(
    value: any,
    { metatype }: ArgumentMetadata,
  ): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object: any = plainToInstance(metatype, value);
    let errors: ValidationError[] = await validate(object);
    if (errors.length > 0) {
      errors = [
        ...errors.map((error: ValidationError): ValidationError => {
          const { property, constraints }: ValidationError = error;
          const newError: ValidationError = {
            property,
            constraints,
          } as ValidationError;
          return newError;
        }),
      ];
      throw new BadRequestException(errors);
    }
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

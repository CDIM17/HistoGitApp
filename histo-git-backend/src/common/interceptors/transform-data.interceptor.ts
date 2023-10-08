import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response as ResponseType } from '../types/response.type';
import { DestructurePath as destructurePath } from '../helpers/destructure-path.helper';

@Injectable()
export class TransformDataInterceptor<T>
  implements NestInterceptor<T, ResponseType<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseType<T>> {
    const httpArgumentsHost: HttpArgumentsHost = context.switchToHttp();
    const { statusCode }: any =
      httpArgumentsHost.getResponse<Response>() as Response;
    const { path }: any = httpArgumentsHost.getRequest<Request>() as Request;
    return next.handle().pipe(
      map((data: T): ResponseType<T> => {
        if (!data) data = null;
        return {
          ok: true,
          data,
          code: statusCode,
          message: 'successfully!',
          controller: destructurePath(path),
          timestamp: new Date().toISOString(),
        } as ResponseType<T>;
      }),
    );
  }
}

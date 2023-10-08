import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';
import { DestructurePath as destructurePath } from '../helpers/destructure-path.helper';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost): void {
    const httpArgumentsHost: HttpArgumentsHost = host.switchToHttp();
    const response: Response = httpArgumentsHost.getResponse<Response>();
    const request: Request = httpArgumentsHost.getRequest<Request>();
    const status: number = exception.getStatus();
    const {
      response: { statusCode, message, error },
    }: any = exception;

    const timestamp: string = new Date().toISOString();
    const controller: string =
      request && request.url ? destructurePath(request.url) : null;
    response.status(status).json({
      ok: false,
      status: statusCode,
      message,
      error,
      controller,
      timestamp,
    });
  }
}

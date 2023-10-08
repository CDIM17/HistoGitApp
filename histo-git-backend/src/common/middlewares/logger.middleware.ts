import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  public use(request: Request, response: Response, next: NextFunction): void {
    console.log(`[ CODE: ${response.statusCode} METHOD: ${request.method} ]`);
    next();
  }
}

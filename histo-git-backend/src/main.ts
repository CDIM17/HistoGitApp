import { NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import SwaggerDocumentConfig from './config/swagger/swagger-config';
import { Environment } from './config/models/environment.model';
import environment from './config/environment/environment';
import { AppConfig } from './config/models/app-config.model';

const { appConfig }: Environment = environment();
const { port }: AppConfig = appConfig;

async function bootstrap() {
  const options: NestApplicationOptions = { abortOnError: false, cors: true };
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule, options);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  const document: OpenAPIObject = SwaggerModule.createDocument(
    app,
    SwaggerDocumentConfig,
  );
  SwaggerModule.setup('swagger', app, document);
  await app.listen(port);
}
bootstrap();

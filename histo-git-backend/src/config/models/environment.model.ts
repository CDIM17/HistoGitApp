import { ApiConfig } from './api-config.model';
import { AppConfig } from './app-config.model';
import { SwaggerConfig } from './swagger-config.model';

export interface Environment {
  appConfig: AppConfig;
  swaggerConfig: SwaggerConfig;
  apiConfig: ApiConfig;
}

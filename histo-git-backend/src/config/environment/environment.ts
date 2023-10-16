import { ApiConfig } from '../models/api-config.model';
import { AppConfig } from '../models/app-config.model';
import { Environment } from '../models/environment.model';
import { SwaggerConfig } from '../models/swagger-config.model';

export default (): Environment => {
  const appConfig: AppConfig = {
    port: Number(process.env.PORT) || 3000,
  } as AppConfig;

  const swaggerConfig: SwaggerConfig = {
    title: process.env.SWG_TITLE || '',
    description: process.env.SWG_DESCRIPTION || '',
    version: process.env.SWG_VERSION || '',
    tag: process.env.SWG_TAG || '',
  } as SwaggerConfig;

  const apiConfig: ApiConfig = {
    apiUrl: process.env.API_URL_GITHUB,
  } as ApiConfig;

  return {
    appConfig,
    swaggerConfig,
    apiConfig,
  } as Environment;
};

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

  return {
    appConfig,
    swaggerConfig,
  } as Environment;
};

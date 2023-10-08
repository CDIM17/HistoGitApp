import environment from '../environment/environment';
import { Environment } from '../models/environment.model';
import { SwaggerConfig } from '../models/swagger-config.model';
import { DocumentBuilder } from '@nestjs/swagger';

const { swaggerConfig }: Environment = environment();
const { title, description, version, tag }: SwaggerConfig = swaggerConfig;

const SwaggerDocumentConfig = new DocumentBuilder()
  .setTitle(title)
  .setDescription(description)
  .setVersion(version)
  .addTag(tag)
  .addBearerAuth()
  .build();

export default SwaggerDocumentConfig;

import environment from '../../config/environment/environment';
import { Environment } from '../../config/models/environment.model';

const environmentConstant: Environment = environment();
export const EnvironmentConstant: Environment = environmentConstant;

import 'dotenv/config';
import config from './config';
import { server } from './initializers/express';
import { logger } from './libs/logger';

try {
    logger.info(`[${config.APP_NAME}] Bootstraping Microservice`);
    server({ host: config.NODE_HOSTNAME, port: config.NODE_PORT });
} catch (error) {
    logger.error(`[${config.APP_NAME}] Caught exeption: ${error}`)
}
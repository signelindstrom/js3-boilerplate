require('dotenv').config();

import { server } from './app/initializers/express';
import { logger } from './app/libs/logger';

const name = process.env.NAME;
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

try {
    logger.info(`[${name}] bootstrapping micro service`);
    server({ hostname, port })
} catch (error) {
    logger.error(`[${name}] caught exception: ${error}`);
}
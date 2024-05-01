import * as express from 'express';
import * as cors from "cors";
import * as compression from "compression";
import helmet from 'helmet';
import createServer from './libs/express';
import { routes } from '../../components/controller';
import { logger } from '../../libs/logger';

const app = express();
const json = express.json;
const urlencoded = express.urlencoded;

export const server = ({ host, port }) => createServer({
    app, json, urlencoded, cors, helmet, compression, logger
}).server({ host, port, routes });

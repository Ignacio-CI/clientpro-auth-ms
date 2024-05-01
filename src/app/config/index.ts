const APP_NAME = process.env.APP_NAME;
const NODE_ENV = process.env.NODE_ENV;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const NODE_FILE_FOLDER = process.env.NODE_FILE_FOLDER;
const NODE_FILE_FOLDER_NAME = process.env.NODE_FILE_FOLDER_NAME;
const NODE_LOG_PATH = process.env.NODE_LOG_PATH;
const NODE_DB_FILE = process.env.NODE_DB_FILE;
const MONGODB_DB_URL = process.env.MONGODB_DB_URL;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const MONGODB_DB_COLLECTION = process.env.MONGODB_DB_COLLECTION;
const REDIS_DB_HOST = process.env.REDIS_DB_HOST;
const REDIS_DB_PORT = process.env.REDIS_DB_PORT;
const REDIS_DB_TTL = process.env.REDIS_DB_TTL;
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

const DB_CONFIG = {
    dbName: MONGODB_DB_NAME,
    dbUri: `${MONGODB_DB_URL}/${MONGODB_DB_NAME}`,
    dbColl: MONGODB_DB_COLLECTION
};

const CACHE_CONFIG = Object.freeze({
    host: process.env.REDIS_DB_HOST,
    port: process.env.REDIS_DB_PORT,
    ttl: parseInt(process.env.REDIS_DB_TTL),
    cacheKeyPrefix: `${ APP_NAME }:`
  })
  
  const ERROR_MSG = {
    post: {
      MISSING_PARAMETER: 'missing parameter: ',
      EXISTING_USER: 'user already exists',
      INVALID_EMAIL: 'invalid email'
    }
  };
  
  export default Object.freeze({
    APP_NAME,
    ERROR_MSG,
    CACHE_CONFIG,
    JWT_TOKEN_SECRET,
    NODE_ENV,
    NODE_HOSTNAME,
    NODE_PORT,
    DB_CONFIG
  })
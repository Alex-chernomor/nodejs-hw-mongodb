import 'dotenv/config';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

initMongoConnection();
setupServer();
https://github.com/Alex-chernomor/nodejs-hw-mongodb